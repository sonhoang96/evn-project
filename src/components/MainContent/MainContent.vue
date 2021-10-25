<template>
  <div id="container">
    <title-content
        :customer="getCustomer.CUSTOMER_NAME"
        :dialogFormVisible="dialogFormVisible"
    >
    </title-content>
    <el-row class="row-content" :gutter="70" v-if="changeView">
      <!--electric tariff-->
      <el-col :span="16" v-if="handleCheckPath()">
        <ElectricTariff
            :indexElectric="getCustomer.DATA['INDEX_ELECTRIC']"
            :isLoading="isLoading"
        />
      </el-col>
      <!--list notify-->
      <el-col :span="16" v-else>
        <ListNotify/>
      </el-col>
      <!--TempoElectricBill-->
      <el-col :span="8">
        <TempoElectricBill
            :money="getCustomer['AMOUNT_CALCULATE']"
            :lastConsumption="getCustomer['LAST_CONSUMPTION']"
            :dataChart="getCustomer.DATA['CHARRT']"
            :isLoading="isLoading"
        />
      </el-col>
    </el-row>
    <el-row class="row-chart" v-if="handleCheckPath() && !changeView">
      <!--ComparisonChart-->
      <el-col :span="24">
        <ComparisonChart
            :dataChart="getCustomer.DATA['CHARRT']"
            :isLoading="isLoading"
        />
      </el-col>
    </el-row>
    <!--2 buttons-->
    <el-row class="row-button" :gutter="20" v-if="handleCheckPath()">
      <el-col :span="12">
        <el-button class="feedback-btn">Gửi thắc mắc về tiền điện</el-button>
      </el-col>
      <el-col :span="12">
        <el-button class="notify-btn">Thông báo sự cố điện</el-button>
      </el-col>
    </el-row>
    <!--popup board-->
    <Popup v-if="notification.status"/>
    <!--Setting times board-->
    <TimeOutModal
        :dialogFormVisible="dialogFormVisible"
        :status="modalStatus"
        :timeSetting="timeSetting"
        :updateTime="updateTime"
    />
  </div>
</template>

<script>
import {
  hourToMs,
  clearCycles,
  setDataToLocalStorage,
  getDataFromLocalStorage,
} from "../../ultils/functions";
import Popup from "../PopupNotify";
import ListNotify from "./ListNotify";
import TitleContent from "./TitleContent";
import TimeOutModal from "../TimeOutModal";
import ElectricTariff from "./ElectricTariff";
import ComparisonChart from "./ComparisonChart";
import TempoElectricBill from "./TemporaryElectricBill";
import {mapState, mapActions} from "vuex";

let timeToChangeView;
let cycleTimeCallData = null;
let cycleTimeCallNotify = null;

let timer = 60000;

export default {
  name: 'MainContent',
  components: {
    Popup,
    ListNotify,
    TitleContent,
    TimeOutModal,
    ElectricTariff,
    ComparisonChart,
    TempoElectricBill,
  },
  data() {
    return {
      changeView: true,
      modalStatus: false,
    }
  },
  methods: {
    ...mapActions({
      getNotify: 'getNotifyRequest',
      updateTime: 'updateTimeRequest',
      updateTimeSuccess: 'updateTimeSuccess',
      getElectricTariff: 'getIdxElectricRequest',
    }),
    handleChangeView() {
      return this.changeView = !this.changeView;
    },
    dialogFormVisible() {
      return this.modalStatus = !this.modalStatus;
    },
    handleCheckPath() {
      return this.$route.path === '/electricity-tracking';
    },
    setTimeToDispatch(){
      let {callData, callNotify} = this.timeSetting;
      let msTimeData = hourToMs(callData);
      let msTimeNotification = hourToMs(callNotify);

      //Clear old setInterval
      clearCycles(cycleTimeCallData, cycleTimeCallNotify);

      // Setup time cycle to call request
      cycleTimeCallData = setInterval(() => this.getElectricTariff(), msTimeData);
      cycleTimeCallNotify = setInterval(() => this.getNotify(), msTimeNotification);
      return;
    }
  },
  computed: mapState({
    getCustomer: state => state.indexElectric.listData,
    isLoading: state => state.indexElectric.isFetching,
    timeSetting: state => state.indexElectric.timeSetting,
    notification: state => state.indexElectric.notification,
  }),
  beforeMount() {
    const {message} = this.notification;
    const {callData, callNotify} = this.timeSetting;
    const getLocal = getDataFromLocalStorage("timeCallData", "timeCallNotify");
    const checkTimeCallData = getLocal.timeCallData === 0;

    //action turn notify
    if (message !== "CLOSE_NOTIFICATION") {
      this.getNotify();
    }
    this.getElectricTariff();

    //Check existence of timeCallData in localStorages
    if ( checkTimeCallData ) {
      return this.updateTime({
        timeCallData: 1,
        timeCallNotify: 1
      });
    } else {
      //Initial callData and callNotify are equal 0
      if (callData === 0 && callNotify === 0) {
        return this.updateTime({
          timeCallData: getLocal.timeCallData,
          timeCallNotify: getLocal.timeCallNotify
        });
      }
    }
  },
  updated() {
    const {callData, callNotify, adjustment} = this.timeSetting;

    //handle set time cycle to change view
    if (!this.handleCheckPath()) {
      clearCycles(timeToChangeView);
    } else {
      clearCycles(timeToChangeView);
      timeToChangeView = setInterval(() => this.handleChangeView(), timer);
    }

    if ( adjustment ) {
      setDataToLocalStorage(['timeCallData', 'timeCallNotify'], [callData, callNotify]);
      this.setTimeToDispatch()
      return this.updateTimeSuccess();
    }

    return;
  },
  mounted() {
    this.setTimeToDispatch()
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/MainContent";
</style>
