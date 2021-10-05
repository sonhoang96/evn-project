<template>
  <div id="board">
    <span class="title-header">Chỉ số điện năng</span>
    <p class="index-electric">{{ sumIdxElectric }} kWh</p>

    <div class="mesurement-time">
      <img src="../../assets/image-mockup/clock.png"/>
      <span>Đo tại thời điểm: {{ "19/09/2021 17:00" }}</span>
    </div>

    <div class="price-list">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(list, index) in handleChangeArr" :key="list.INDICATOR">
          <img :src="symbol[index]"/>
          <span>{{ `Biểu giá ${index + 1}` }}</span>
          <p>{{ list.INDEX_VALUE }} kWh</p>
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

export default {
  name: 'IndexElectricBoard',
  data() {
    return {
      color: ["#6C5DD3", "#FFA2C0", "#3F8CFF"],
      symbol: [symbol1, symbol2, symbol3]
    }
  },
  props: {
    indexElectric: Array
  },
  computed: {
    handleChangeArr(){
      let arr = [...this.indexElectric]
      for (let i = 0; i <= 2; i++) {
        let percentage = (arr[i]['INDEX_VALUE'] / arr[4]['INDEX_VALUE']) * 100;
        arr[i].percentage = percentage;
      }
      let newArr = arr.filter(item => item.percentage);
      return newArr
    },
    sumIdxElectric(){
      return this.indexElectric.find(x => x.INDICATOR === "SG")['INDEX_VALUE'];
    }
  }
}
</script>
<style lang="scss">
#board {
  //height: 500px;
  background: #ffffff;
  border-radius: 24px;
  padding: 35px;
  box-shadow: 0px 0px 5px #d0d0d0;
  @media (max-width: 1024px) {
    padding: 32px;
    height: 338px;
  }

  .title-header {
    font-size: 18px;
    font-weight: 600;
  }

  .index-electric {
    font-size: 56px;
    color: #1F499D;
    font-weight: 600;
    margin-top: 45px;
    margin-bottom: 18px;
  }

  .mesurement-time {
    display: flex;
    align-items: center;

    span {
      font-size: 13px;
      font-weight: 600;
      margin-left: 12px;
    }
  }

  .price-list {
    margin-top: 45px;

    .el-row {
      border: 1px solid #E4E4E4;
      border-radius: 16px;
      padding: 45px 24px;
      @media(max-width: 1024px) {
        padding: 20px 10px;
        .el-col {
          padding: 0 !important;
          padding-left: 15px !important;
        }
      }

      .el-col {
        position: relative;

        &:nth-child(2) {

          &:before, &:after {
            content: "";
            display: block;
            width: 1px;
            height: 130px;
            background: #E4E4E4;
            position: absolute;
            top: -18%;
            left: -10%;
          }

          &:after {
            left: 90%;
          }

          @media (max-width: 1024px) {
            &:before, &:after {
              height: 90px;
              top: 0;
              left: -5%;
            }
            &:after {
              left: 95%;
            }
          }
        }

        span {
          font-size: 13px;
          color: #808191;
          margin-left: 13px;
        }

        p {
          font-size: 32px;
          color: #11142D;
          margin-top: 8px;
          margin-bottom: 11px;
        }

      }

      .el-progress__text {
        display: none
      }
    }
  }
}
</style>
