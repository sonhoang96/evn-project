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
    />
  </div>
</template>

<script>
import TitleContent from "./TitleContent";
import TempoElectricBill from "./TemporaryElectricBill";
import ElectricTariff from "./ElectricTariff";
import ComparisonChart from "./ComparisonChart";
import Popup from "../PopupNotify";
import ListNotify from "./ListNotify";
import TimeOutModal from "../TimeOutModal";
import {mapState} from "vuex";
import {
  clearCycles,
  getDataFromLocalStorage, hourToMs,
  // hourToMs
} from "../../ultils/functions";

let timeToChangeView;
let cycleTimeCallData = null;
let cycleTimeCallNotify = null;

export default {
  name: 'MainContent',
  components: {
    TimeOutModal,
    ListNotify,
    Popup,
    ComparisonChart,
    ElectricTariff,
    TempoElectricBill,
    TitleContent
  },
  data() {
    return {
      changeView: true,
      modalStatus: false
    }
  },
  methods: {
    handleChangeView() {
      return this.changeView = !this.changeView
    },
    handleCheckPath() {
      return this.$route.path === '/electricity-tracking'
    },
    dialogFormVisible() {
      return this.modalStatus = !this.modalStatus;
    },
  },
  computed: mapState({
    getCustomer: state => state.indexElectric.listData,
    notification: state => state.indexElectric.notification,
    isLoading: state => state.indexElectric.isFetching,
    timeSetting: state => state.indexElectric.timeSetting,
  }),
  beforeMount() {
    const store = this.$store;
    const {message} = this.notification;
    //action turn notify
    if (message !== "CLOSE_NOTIFICATION") {
      store.dispatch("getNotifyRequest");
    }
    store.dispatch("getIdxElectricRequest");

    //Check if data in localStorage is not exist
    let checkTimeCallData = getDataFromLocalStorage("timeCallData").timeCallData === 0;
    if (checkTimeCallData) {
      store.dispatch(
          "updateTimeRequest",
          {
            timeCallData: 1,
            timeCallNotify: 1
          }
      );
    } else {
      let {callData, callNotify} = this.timeSetting;
      let getLocal = getDataFromLocalStorage("timeCallData", "timeCallNotify");
      if(callData === 0 && callNotify === 0){
        store.dispatch(
            "updateTimeRequest",
            {
              timeCallData: getLocal.timeCallData,
              timeCallNotify: getLocal.timeCallNotify
            }
        );
      }
    }
  },
  updated() {
    const store = this.$store;

    //handle set time cycle to change view
    if (!this.handleCheckPath()) {
      clearInterval(timeToChangeView)
    } else {
      clearInterval(timeToChangeView)
      timeToChangeView = setInterval(() => {
        return this.handleChangeView()
      }, 60000)
    }

    const {callData, callNotify, adjustment} = this.timeSetting;
    if( adjustment ){
      //Clear old setInterval
      clearCycles(cycleTimeCallData, cycleTimeCallNotify);

      const msTimeData = hourToMs(callData);
      const msTimeNotification = hourToMs(callNotify);

      // Setup time cycle to call request
      cycleTimeCallData = setInterval(() => store.dispatch("getIdxElectricRequest"), msTimeData)
      cycleTimeCallNotify = setInterval(() => store.dispatch("getNotifyRequest"), msTimeNotification)

      return store.dispatch("updateTimeSuccess")
    }
  },
  mounted() {
    const store = this.$store;

    //convert hour to milliseconds
    const {callData, callNotify} = this.timeSetting;
    const msTimeData = hourToMs(callData);
    const msTimeNotification = hourToMs(callNotify);

    // Setup time cycle to call request
    cycleTimeCallData = setInterval(() => store.dispatch("getIdxElectricRequest"), msTimeData)
    cycleTimeCallNotify = setInterval(() => store.dispatch("getNotifyRequest"), msTimeNotification)
    console.log(cycleTimeCallData,cycleTimeCallNotify, msTimeData, msTimeNotification)
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/MainContent";
</style>
