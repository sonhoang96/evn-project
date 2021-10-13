<template>
  <div id="container">
    <!--title header-->
    <title-content
        :customer="getCustomer.CUSTOMER_NAME"
        :dialogFormVisible="dialogFormVisible"
    ></title-content>
    <el-row class="row-content" :gutter="70">
      <!--electric tariff-->
      <el-col
          :span="16"
          v-if="$route.name === 'Electricity Tracking'"
      >
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
            :dataChart="getCustomer.DATA['CHARRT'] ? getCustomer.DATA['CHARRT'] : []"
            :is-loading="isLoading"
        />
      </el-col>
    </el-row>
    <el-row class="row-chart" v-if="$route.name === 'Electricity Tracking'">
      <!--ComparisonChart-->
      <el-col :span="24">
        <ComparisonChart
            :dataChart="getCustomer.DATA['CHARRT']"
            :is-loading="isLoading"
        />
      </el-col>
    </el-row>
    <!--popup board-->
    <Popup v-if="notificationStatus"/>
    <!--Modal to set up timeout to call request data-->
    <TimeOutModal
        :dialogFormVisible="dialogFormVisible"
        :status="modalStatus"
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
import {getDataToLocalStorage, setDataToLocalStorage, clearDataOfLocalStorage} from "../../ultils/functions"
import {mapState} from "vuex";

let timeCallData;
let timeCallNotify;

let notifyTime = 'timeCallNotify';
let dataTime = 'timeCallData';

export default {
  name: 'MainContent',
  data() {
    return {
      modalStatus: false
    }
  },
  components: {
    TimeOutModal,
    ListNotify,
    Popup,
    ComparisonChart,
    ElectricTariff,
    TempoElectricBill,
    TitleContent
  },
  methods: {
    dialogFormVisible() {
      return this.modalStatus = !this.modalStatus;
    }
  },
  computed: mapState({
    getCustomer: state => state.indexElectric.listData,
    notificationStatus: state => state.indexElectric.notification.status,
    isLoading: state => state.indexElectric.isFetching,
    timeCallRequest: state => state.indexElectric.timeSetting,
  }),
  beforeMount() {
    const store = this.$store;
    const {message} = store.state.indexElectric.notification;
    //action turn notify
    if (message !== "CLOSE_NOTIFICATION") {
      store.dispatch("getNotifyRequest")
    }
    store.dispatch("getIdxElectricRequest")
  },
  mounted() {
    const store = this.$store;
    const {callData, callNotify} = this.timeCallRequest;
    const findData = localStorage.getItem(`${notifyTime}`);

    if (!findData) {
      //Set default value to create cycle for calling request via value in reducer
      setDataToLocalStorage([dataTime, notifyTime], [callData, callNotify])
      timeCallData = setInterval(() => store.dispatch("getNotifyRequest"), callData);
      timeCallNotify = setInterval(() => store.dispatch("getIdxElectricRequest"), callNotify);
      return;
    } else {
      console.log(1)
      const getLocal = getDataToLocalStorage(notifyTime, dataTime)
      timeCallData = setInterval(() => store.dispatch("getNotifyRequest"), getLocal[`${notifyTime}`]);
      timeCallNotify = setInterval(() => store.dispatch("getIdxElectricRequest"), getLocal[`${dataTime}`]);

      return;
    }
  },
  beforeDestroy() {
    /*
      remove setInterval if change the site
      if do not remove, setInterval will be conflicted
    */
    clearDataOfLocalStorage(timeCallData, timeCallNotify)
  },
  updated() {
    const store = this.$store;
    const {callData, callNotify} = this.timeCallRequest;
    const compareCallTimeData = callData !== getDataToLocalStorage(dataTime)[0];
    const compareCallTimeNotify = callNotify !== getDataToLocalStorage(notifyTime)[0];
    console.log(3)
    if (compareCallTimeData || compareCallTimeNotify) {
      //Step 1 clear storage
      clearDataOfLocalStorage(timeCallData, timeCallData);
      //Step 2 re setup localstorage, add new time to call request
      setDataToLocalStorage([dataTime, notifyTime], [callData, callNotify])
      //Step 3 re setup cycle to call request
      timeCallData = setInterval(() => store.dispatch("getNotifyRequest"), callData);
      timeCallNotify = setInterval(() => store.dispatch("getIdxElectricRequest"), callNotify);
      return;
    }
    return;
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/MainContent";
</style>
