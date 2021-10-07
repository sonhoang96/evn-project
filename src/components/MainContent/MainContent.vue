<template>
  <div class="overlay" v-if="isLoading">
    <Loading/>
  </div>
  <div id="container" v-else>
    <title-content :customer="getCustomer.CUSTOMER_NAME"></title-content>
    <el-row class="row-content" :gutter="70">
      <!--electric tariff-->
      <el-col :span="16" v-if="$route.name === 'Electricity Tracking'">
        <ElectricTariff :indexElectric="getCustomer.DATA.INDEX_ELECTRIC"/>
      </el-col>
      <!--list notify-->
      <el-col :span="16" v-else>
        <ListNotify/>
      </el-col>
      <!--TempoElectricBill-->
      <el-col :span="8">
        <TempoElectricBill
            :money="getCustomer.AMOUNT_CALCULATE"
            :lastConsumption="getCustomer.LAST_CONSUMPTION"
            :dataChart="getCustomer.DATA.CHARRT"
        />
      </el-col>
    </el-row>
    <el-row class="row-chart" v-if="$route.name === 'Electricity Tracking'">
      <!--ComparisonChart-->
      <el-col :span="24">
        <ComparisonChart :dataChart="getCustomer.DATA.CHARRT"/>
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
import Loading from "../Loading";

export default {
  name: 'MainContent',
  components: {
    Loading,
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
    isLoading() {
      return this.$store.state.indexElectric.isFetching
    },
    message() {
      return this.$store.state.indexElectric.notification
    }
  },
  created() {
     this.$store.dispatch("getRequest")
  },
  mounted() {
    // setInterval(() => this.$store.dispatch("getRequest"), 60000)
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
}

#container {
  margin: 125px 114px 0;
  text-align: left;
  @media (max-width: 1200px) {
    margin: 125px 20px 0;
  }


  .row-content {
    margin-top: 55px;
  }

  .row-chart {
    margin-top: 85px;
    @media (max-width: 1200px) {
      margin-top: 70px;
    }
  }
}
</style>
