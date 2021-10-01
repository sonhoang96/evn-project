<template>
  <div id="container">
    <title-content></title-content>
    <el-row class="row-content" :gutter="70">
      <el-col :span="16" v-if="$route.name === 'Electricity Tracking'">
        <index-electric-board></index-electric-board>
      </el-col>
      <el-col :span="16" v-else>
        <list-notify></list-notify>
      </el-col>
      <el-col :span="8">
        <tempo-elec-bill></tempo-elec-bill>
      </el-col>
    </el-row>
    <el-row class="row-chart" v-if="$route.name === 'Electricity Tracking'">
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
import ListNotify from "./ListNotify";
export default {
  name: 'MainContent',
  components: {ListNotify, Popup, ComparisonChart, IndexElectricBoard, TempoElecBill, TitleContent},
  methods:{
    log: function (){
      console.log(this.$route)
    }
  }
}
</script>

<style lang="scss" scoped>
#container {
  margin: 125px 114px 0;
  text-align: left;
  .row-content{
    margin-top: 55px;
  }
  .row-chart{
    margin-top: 85px;
  }
}
</style>
