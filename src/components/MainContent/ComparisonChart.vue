<template>
  <div id="chart">
    <div class="chart-options">
      <span>Chi tiết lượng điện tiêu thụ</span>
      <select-component text="Theo tháng" :list="handleCreateListMonth"></select-component>
    </div>
    <div v-if="isLoading" id="loading">
      <Loading/>
    </div>
    <div class="chart-board" v-else>
      <chart-board
          :xAxis=true
          :yAxis=true
          :stacked=true
          :label="handleCreateListMonth"
          :dataChart="handleAddAtrToData"
          :display=true
      ></chart-board>
    </div>
  </div>
</template>

<script>
import ChartBoard from "../Common/ChartBoard";
import SelectComponent from "../Common/SelectComponent";
import Loading from "../Loading";
import { createArray } from "../../ultils/functions";

export default {
  name: "ComparisonChart",
  components: {Loading, SelectComponent, ChartBoard},
  props: {
    dataChart: Array,
    isLoading: Boolean
  },
  computed: {
    handleCreateListMonth() {
      return createArray("Tháng", 12)
    },
    handleAddAtrToData() {
      return [
        {...this.dataChart[0], color: "#e4353ad9"},
        {...this.dataChart[1], color: "#254291d9"}
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/ComparisonChart";
</style>
