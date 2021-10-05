<template>
  <div id="bill-board">
    <div class="bill-board__frame">
      <span>Tiền tạm tính tháng {{ handleGetMonth }}</span>
      <!-- absolute -->
      <div class="bill-board__content">
        <div id="content">
          <p>Cập nhật 1 ngày trước</p>
          <p>{{ handleFormatPrice }} <small>VNĐ</small></p>
          <span>Tương đương {{ lastConsumption }} kWh</span>
          <div class="bill-board__content-chart">
            <chart-board
                color="rgba(24, 113, 198, 0.5)"
                :amount=7
                :xAxis=false
                :yAxis=false
                :stacked=false
                :label="handleCreateListMonth"
                :dataChart="dataChart"
                :display=false
            ></chart-board>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartBoard from "../ChartBoard";
import {
  createListMonth,
  getMonth,
  formatPrice
} from "../../ultils/functions";

export default {
  name: "TempoElecBill",
  components: {ChartBoard},
  props: {
    money: null,
    lastConsumption: null,
    dataChart: Array
  },
  computed:{
    handleCreateListMonth(){
      return createListMonth(7)
    },
    handleFormatPrice(){
      return formatPrice(this.money)
    },
    handleGetMonth(){
      return getMonth();
    }
  }
  ,
};
</script>
<style lang="scss">
#bill-board {
  height: 470px;
  width: 340px;
  padding-left: 63px;
  float: right;
  .bill-board__frame {
    height: inherit;
    border-radius: 25px;
    background-image: linear-gradient(to top, #254291, #e4353a);
    box-shadow: 0px 0px 5px #d0d0d0;
    position: relative;
    @media (max-width: 1024px){
      height: 398px;
      width: 298px;
      float: right;
    }
    .bill-board__content {
      position: absolute;
      width: 325px;
      height: 359px;
      background: #fff;
      bottom: 8px;
      left: 8px;
      border-radius: 20px;
      @media (max-width: 1024px){
        height: 302px;
        width: 282px;
      }
      #content {
        height: 100%;
        padding: 28px 24px 0px;

        span {
          position: static;
          font-size: 14px;
          color: #7fba7a;
        }

        p {
          font-size: 32px;
          font-weight: 700;
          margin: 0;

          &:first-child {
            font-size: 14px;
            color: #808191;
            margin-bottom: 5px;
            font-weight: normal;
          }

          small {
            font-size: 14px !important;
          }
        }

        .bill-board__content-chart {
          margin-top: 25px;
        }
      }
    }

    span {
      position: absolute;
      top: 45px;
      left: 32px;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
    }
  }

  canvas#bar-chart {
    height: 200px !important;
    @media (max-width: 1024px){
      height: 170px !important;
      margin-top: -10px;
    }
  }
}
</style>
