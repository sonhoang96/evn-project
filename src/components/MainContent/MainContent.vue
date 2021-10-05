<template>
  <div id="container">
    <title-content :customer="DATA.CUSTOMER_NAME"></title-content>
    <el-row class="row-content" :gutter="70">
      <el-col :span="16" v-if="$route.name === 'Electricity Tracking'">
        <index-electric-board
          :indexElectric="DATA.DATA.INDEX_ELECTRIC"
        ></index-electric-board>
      </el-col>
      <el-col :span="16" v-else>
        <list-notify></list-notify>
      </el-col>
      <el-col :span="8">
        <tempo-elec-bill
            :money="DATA.AMOUNT_CALCULATE"
            :lastConsumption="DATA.LAST_CONSUMPTION"
            :dataChart="DATA.DATA.CHARRT"
        ></tempo-elec-bill>
      </el-col>
    </el-row>
    <el-row class="row-chart" v-if="$route.name === 'Electricity Tracking'">
      <el-col :span="24">
        <comparison-chart
            :dataChart="DATA.DATA.CHARRT"
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
import DATA from "../../../evn.json";

export default {
  name: 'MainContent',
  components: {
    ListNotify,
    Popup,
    ComparisonChart,
    IndexElectricBoard,
    TempoElecBill,
    TitleContent
  },
  data() {
    return {
      DATA
    }
  },
}
</script>

<style lang="scss" scoped>
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
    @media (max-width: 1200px){
      margin-top: 70px;
    }
  }
}
</style>
