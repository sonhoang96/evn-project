<template>
  <div class="overlay" v-if="isLoading">
    <Loading />
  </div>
  <div id="container" v-else>
    <title-content :customer="getCustomer.CUSTOMER_NAME"></title-content>
    <el-row class="row-content" :gutter="70">
      <el-col :span="16" v-if="$route.name === 'Electricity Tracking'">
        <index-electric-board
            :indexElectric="getCustomer.DATA.INDEX_ELECTRIC"
        ></index-electric-board>
      </el-col>
      <el-col :span="16" v-else>
        <list-notify></list-notify>
      </el-col>
      <el-col :span="8">
        <tempo-elec-bill
            :money="getCustomer.AMOUNT_CALCULATE"
            :lastConsumption="getCustomer.LAST_CONSUMPTION"
            :dataChart="getCustomer.DATA.CHARRT"
        ></tempo-elec-bill>
      </el-col>
    </el-row>
    <el-row class="row-chart" v-if="$route.name === 'Electricity Tracking'">
      <el-col :span="24">
        <comparison-chart
            :dataChart="getCustomer.DATA.CHARRT"
        ></comparison-chart>
      </el-col>
    </el-row>
    <!--popup board-->
    <popup></popup>
  </div>
</template>

<script>
import TitleContent from "./TitleContent";
import TempoElecBill from "./TemporaryElectricBill";
import IndexElectricBoard from "./IndexElectrict";
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
    IndexElectricBoard,
    TempoElecBill,
    TitleContent
  },
  data() {
    return {
      // DATA
    }
  },
  computed: {
    getCustomer() {
      return this.$store.state.indexElectric.listData
    },
    isLoading() {
      return this.$store.state.indexElectric.isFetching
    }
  },
  mounted() {
    this.$store.dispatch("getRequest")
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
