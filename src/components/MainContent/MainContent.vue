<template>
  <div id="container">
    <title-content></title-content>
    <el-row class="row-content">
      <el-col :span="15">
        <index-electric-board></index-electric-board>
      </el-col>
      <el-col :span="9">
        <tempo-elec-bill></tempo-elec-bill>
      </el-col>
    </el-row>
    <el-row class="row-chart">
      <el-col :span="24">
        <comparison-chart></comparison-chart>
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
export default {
  name: 'MainContent',
  components: {Popup, ComparisonChart, IndexElectricBoard, TempoElecBill, TitleContent},
}
</script>

<style lang="scss" scoped>
#container {
  margin: 125px 125px 0;
  text-align: left;
  .row-content{
    margin-top: 55px;
  }
  .row-chart{
    margin-top: 85px;
  }
}
</style>
