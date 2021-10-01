<template>
  <div id="chart">
    <div class="chart-options">
      <span>Chi tiết lượng điện tiêu thụ</span>
      <select-component text="Theo tháng"></select-component>
    </div>
    <div class="chart-board">
      <chart-board
          :amount=7
          :xAxis=true
          :yAxis=true
          :stacked=true
          :label="label"
          :dataChart="dataChart"
          :display=true
      ></chart-board>
    </div>
  </div>
</template>

<script>
import ChartBoard from "../ChartBoard";
import SelectComponent from "../SelectComponent";

export default {
  name: "ComparisonChart",
  components: {SelectComponent, ChartBoard},
  data(){
    return{
      label: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ],
      dataChart:[
        [2, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 50],
        [2, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
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
