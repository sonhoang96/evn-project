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
import {mapState} from "vuex";

let callData;
let callNotify;

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
    // timeCallRequest: state => state.indexElectric.timeSetting
  })

  //     {
  //   getCustomer() {
  //     return this.$store.state.indexElectric.listData
  //   },
  //   notificationStatus() {
  //     return this.$store.state.indexElectric.notification.status
  //   },
  //   isLoading() {
  //     return this.$store.state.indexElectric.isFetching
  //   },
  //   timeCallRequest(){
  //     return {
  //       this.
  //     }
  //   }
  // }
  ,
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
    const timeCallData = localStorage.getItem("timeCallData");
    const timeCallNotify = localStorage.getItem("timeCallNotify");

    //Setup time to update data and call notification
    callData = setInterval(() => store.dispatch("getNotifyRequest"), timeCallData);
    callNotify = setInterval(() => store.dispatch("getIdxElectricRequest"), timeCallNotify);
  },
  beforeDestroy() {
    // remove setInterval if change the site
    // if do not remove, setInterval will be conflicted
    clearInterval(callData)
    clearInterval(callNotify)
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/MainContent";
</style>
