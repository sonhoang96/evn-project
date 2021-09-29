<template>
  <div id="chart">
    <div class="chart-options">
      <span>Chi tiết lượng điện tiêu thụ</span>
      <el-select v-model="value" placeholder="Theo tháng">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="chart-board">
      <chart-board></chart-board>
    </div>
  </div>
</template>

<script>
import ChartBoard from "./ChartBoard";
export default {
  name: "ComparisonChart",
  components: {ChartBoard},
  data() {
    return {
      options: [{
        value: 'Tháng 1',
        label: 'Tháng 1'
      }, {
        value: 'Tháng 2',
        label: 'Tháng 2'
      }, {
        value: 'Tháng 3',
        label: 'Tháng 3'
      }, {
        value: 'Tháng 4',
        label: 'Tháng 4'
      }, {
        value: 'Tháng 5',
        label: 'Tháng 5'
      }]
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
        background: #E4E4E4;
        padding: 18px 0px 18px 23px;

        &::placeholder {
          font-size: 14px;
          font-weight: 600;
          color: #a9a9ab;
        }
        &:focus{
          border: 1px solid #E4E4E4;
          box-shadow: 0px 0px 5px #f5f5f5;
        }
      }

      .el-input__suffix {
        .el-input__suffix-inner{
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
  .chart-board{
    margin-top: 45px;
  }
}
</style>
