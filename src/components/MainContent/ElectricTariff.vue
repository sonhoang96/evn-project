<template>
  <div v-if="isLoading" id="loading">
    <Loading/>
  </div>
  <div id="board" v-else>
    <span class="title-header">Chỉ số điện năng</span>
    <p class="index-electric">{{ sumIdxElectric }} kWh</p>

    <div class="mesurement-time">
      <img src="../../assets/image-mockup/clock.png"/>
      <span>Đo tại thời điểm: {{ "19/09/2021 17:00" }}</span>
    </div>

    <div class="price-list">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(list, index) in handleChangeArr" :key="list.INDICATOR">
          <div class="price-list__indicator">
            <img :src="symbol[index]"/>
            <span>{{ list.INDICATOR }}</span>
          </div>
          <p>{{ list["INDEX_VALUE"] }} kWh</p>
          <!--Progress bar-->
          <el-progress
              :percentage="list.percentage"
              :color="color[index]"
          >
          </el-progress>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import symbol1 from "../../assets/image-mockup/symbol-1.png"
import symbol2 from "../../assets/image-mockup/symbol-2.png"
import symbol3 from "../../assets/image-mockup/symbol-3.png"
import Loading from "../Loading";

export default {
  name: 'ElectricTariff',
  components: {Loading},
  data() {
    return {
      color: ["#6C5DD3", "#FFA2C0", "#3F8CFF"],
      symbol: [symbol1, symbol2, symbol3]
    }
  },
  props: {
    indexElectric: Array,
    isLoading: Boolean
  },
  computed: {
    handleChangeArr() {
      let arr = [...this.indexElectric]
      for (let i = 0; i <= 2; i++) {
        let percentage = (arr[i]['INDEX_VALUE'] / arr[4]['INDEX_VALUE']) * 100;
        arr[i].percentage = percentage;
        switch (arr[i]["INDICATOR"]) {
          case "BT":
            arr[i]["INDICATOR"] = 'Giờ Bình Thuòng'
            break;
          case "CD":
            arr[i]["INDICATOR"] = 'Giờ Cao Điểm'
            break;
          case "TD":
            arr[i]["INDICATOR"] = 'Giờ Thấp Điểm'
            break;
          default:
            break;
        }
      }
      let newArr = arr.filter(item => item.percentage);
      return newArr
    },
    sumIdxElectric() {
      return this.indexElectric.find(x => x.INDICATOR === "SG")['INDEX_VALUE'];
    },
  }
}
</script>
<style lang="scss">
@import "../../styles/ElectriTariff";
</style>
