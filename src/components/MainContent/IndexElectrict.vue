<template>
  <div id="board">
    <span class="title-header">Chỉ số điện năng</span>
    <p class="index-electric">{{ "27,089.19 kWh" }}</p>

    <div class="mesurement-time">
      <img src="../../assets/image-mockup/clock.png"/>
      <span>Đo tại thời điểm: {{ "19/09/2021 17:00" }}</span>
    </div>

    <div class="price-list">
      <el-row :gutter="20">
        <el-col :span="8">
          <img src="../../assets/image-mockup/symbol-1.png"/>
          <span>{{ "Biểu giá 1" }}</span>
          <p>{{ "15,200.74" }}</p>
          <el-progress :percentage="56" color="#6C5DD3"></el-progress>
        </el-col>
        <el-col :span="8">
          <img src="../../assets/image-mockup/symbol-2.png"/>
          <span>{{ "Biểu giá 1" }}</span>
          <p>{{ "6,775.64" }}</p>
          <el-progress :percentage="25" color="#FFA2C0"></el-progress>
        </el-col>
        <el-col :span="8">
          <img src="../../assets/image-mockup/symbol-3.png"/>
          <span>{{ "Biểu giá 1" }}</span>
          <p>{{ "5,112.81" }}</p>
          <el-progress :percentage="19" color="#3F8CFF"></el-progress>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexElectricBoard'
}
</script>
<style lang="scss">
#board {
  //height: 500px;
  background: #ffffff;
  border-radius: 24px;
  padding: 35px ;
  box-shadow: 0px 0px 5px #d0d0d0;

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

      .el-col {
        position: relative;

        &:nth-child(2) {
          transform: rotateX(2);

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
          &:after{
            left: 90%;
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
