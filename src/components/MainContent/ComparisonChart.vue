<template>
  <div id="chart">
    <div class="chart-options">
      <span>Chi tiết lượng điện tiêu thụ</span>
      <select-component text="Theo tháng" :month="handleCreateListMonth"></select-component>
    </div>
    <div v-if="isLoading" id="loading">
      <Loading />
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
import {createArray} from "../../ultils/functions";
import Loading from "../Loading";

export default {
  name: "ComparisonChart",
  components: {Loading, SelectComponent, ChartBoard},
  props: {
    dataChart: Array,
    isLoading: Boolean
  },
  computed: {
    handleCreateListMonth() {
      return createArray("Tháng",12)
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
#chart {
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0px 0px 5px #d0d0d0;

  .chart-options {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-select {
      float: right;

      input {
        width: 200px;
        height: 56px;
        border-radius: 16px;
        background: #e4e4e44d;
        padding: 18px 0px 18px 23px;

        &::placeholder {
          font-size: 14px;
          font-weight: 600;
          color: #a9a9ab;
        }

        &:focus {
          border: 1px solid #E4E4E4;
          box-shadow: 0px 0px 5px #f5f5f5;
        }
      }

      .el-input__suffix {
        .el-input__suffix-inner {
          margin-right: 10px;

          i {
            font-size: 18px;
            font-weight: 600;
            color: #1B1D21;
          }
        }

      }
    }
  }

  .chart-board {
    margin-top: 45px;
  }
}
</style>
