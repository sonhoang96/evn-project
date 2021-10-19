<template>
  <div id="bill-board">
    <div class="bill-board__frame">
      <span>Tiền tạm tính tháng {{ handleGetMonth }}</span>
      <!-- absolute -->
      <div v-if="isLoading" id="loading">
        <Loading />
      </div>
      <div class="bill-board__content" v-else>
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
import ChartBoard from "../Common/ChartBoard";
import {
  getMonth,
  formatPrice,
  createArray
} from "../../ultils/functions";
import Loading from "../Loading";

export default {
  name: "TempoElectricBill",
  components: {Loading, ChartBoard},
  props: {
    money: null,
    lastConsumption: null,
    dataChart: Array,
    isLoading: Boolean,
  },
  computed:{
    handleCreateListMonth(){
      return createArray('Tháng',7)
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
@import "../../styles/TemporaryElectricBill";
</style>
