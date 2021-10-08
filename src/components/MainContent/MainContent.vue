<template>
  <div id="container">
    <title-content :customer="getCustomer.CUSTOMER_NAME"></title-content>
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
    <Popup v-if="!message"/>
  </div>
</template>

<script>
import TitleContent from "./TitleContent";
import TempoElectricBill from "./TemporaryElectricBill";
import ElectricTariff from "./ElectricTariff";
import ComparisonChart from "./ComparisonChart";
import Popup from "../PopupNotify";
import ListNotify from "./ListNotify";

export default {
  name: 'MainContent',
  components: {
    ListNotify,
    Popup,
    ComparisonChart,
    ElectricTariff,
    TempoElectricBill,
    TitleContent
  },
  computed: {
    getCustomer() {
        return this.$store.state.indexElectric.listData
    },
    message() {
      return this.$store.state.indexElectric.notification
    },
    isLoading(){
      return this.$store.state.indexElectric.isFetching
    }
  },
  created() {
    this.$store.dispatch("getRequest")
  },
  // mounted() {
  //   this.$store.dispatch("getRequest")
  // }
}
</script>

<style lang="scss" scoped>
@import "../../styles/MainContent";
</style>
