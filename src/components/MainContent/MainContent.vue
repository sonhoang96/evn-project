<template>
  <div id="container">
    <!--title header-->
    <title-content
        :customer="getCustomer.CUSTOMER_NAME"
        :dialogFormVisible="dialogFormVisible"
    ></title-content>
    <el-row class="row-content" :gutter="70">
      <!--electric tariff-->
      <el-col :span="16" v-if="$route.name === 'Electricity Tracking'">
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
import {
  getDataToLocalStorage,
  setDataToLocalStorage,
  clearCycles,
} from "../../ultils/functions";
import {mapState} from "vuex";

let timeCallData;
let timeCallNotify;

let notifyTime = "timeCallNotify";
let dataTime = "timeCallData";

export default {
  name: "MainContent",
  data() {
    return {
      modalStatus: false,
    };
  },
  components: {
    TimeOutModal,
    ListNotify,
    Popup,
    ComparisonChart,
    ElectricTariff,
    TempoElectricBill,
    TitleContent,
  },
  methods: {
    dialogFormVisible() {
      return (this.modalStatus = !this.modalStatus);
    },
  },
  computed: mapState({
    getCustomer: (state) => state.indexElectric.listData,
    notificationStatus: (state) => state.indexElectric.notification.status,
    isLoading: (state) => state.indexElectric.isFetching,
    timeCallRequest: (state) => state.indexElectric.timeSetting,
  }),
  beforeMount() {
    const store = this.$store;
    const {message} = store.state.indexElectric.notification;
    //action turn notify
    if (message !== "CLOSE_NOTIFICATION") {
      store.dispatch("getNotifyRequest");
    }
    store.dispatch("getIdxElectricRequest");
  },
  mounted() {
    const store = this.$store;
    const {callData, callNotify} = this.timeCallRequest;
    const findData = localStorage.getItem(`${notifyTime}`);

    if (!findData) {
      //Set default value to create cycle for calling request via value in reducer
      console.log(2);
      setDataToLocalStorage(
    [dataTime, notifyTime],
    [callData, callNotify],
      "initial"
      );
      timeCallData = setInterval(() => store.dispatch("getNotifyRequest"), callData);
      timeCallNotify = setInterval(() => store.dispatch("getIdxElectricRequest"), callNotify);
      return;
    } else {
      console.log(1);
      const getLocal = getDataToLocalStorage(notifyTime, dataTime);
      timeCallData = setInterval(
          () => store.dispatch("getNotifyRequest"),
          getLocal[`${notifyTime}`]
      );
      timeCallNotify = setInterval(
          () => store.dispatch("getIdxElectricRequest"),
          getLocal[`${dataTime}`]
      );

      return;
    }
  },
  beforeDestroy() {
    /*
      remove setInterval if change the site
      if do not remove, setInterval will be conflicted
    */
    clearCycles(timeCallData, timeCallNotify);
  },
  beforeUpdate() {
    const getLocal = getDataToLocalStorage(notifyTime, dataTime);
    const {callData, callNotify} = this.timeCallRequest;
    const compareTimeData = callData !== getLocal.timeCallData;
    const compareTimeNotify = callNotify !== getLocal.timeCallNotify;
    if (compareTimeData) {
      clearCycles(timeCallData)
      timeCallData = null;
      setDataToLocalStorage(
          [dataTime],
          [callData],
          "updateTimeData"
      );
    }
    if (compareTimeNotify) {
      clearCycles(timeCallNotify)
      timeCallNotify = null;
      setDataToLocalStorage(
          [notifyTime],
          [callNotify],
          "updateTimeNotify"
      );
    }
  },
  updated() {
    const store = this.$store;
    const getLocal = getDataToLocalStorage(notifyTime, dataTime)
    const flag = localStorage.getItem("flag");
    console.log(flag)
    if (flag === 'updateTimeData') {
      timeCallData = setInterval(
          () => store.dispatch("getNotifyRequest"),
          getLocal[`${notifyTime}`]
      );
    }
    if (flag === 'updateTimeNotify') {
      timeCallNotify = setInterval(
          () => store.dispatch("getIdxElectricRequest"),
          getLocal[`${dataTime}`]
      );
    }
    return setDataToLocalStorage([0], [0], 'change')
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/MainContent";
</style>

function a(x) {
  return function() {
    setInterval(() => {}, x)
  }
}
udpate() {
this.timeCallData = a(timeData)
}
