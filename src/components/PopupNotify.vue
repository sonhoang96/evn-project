<template>
  <div class="supperPopup">
    <div id="popup">
      <el-row>
        <el-col :span="8">
          <div class="date">
            <span>{{ "T2" }}</span>
            <span>{{ "13" }}</span>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="notify">
            <span>{{ "PC Đống Đa thông báo" }}</span>
            <span>
            Tháng {{ "9/2021" }}, khách hàng
            <br/>
            {{ "PD10000011297" }} sử dụng {{ "512" }}kWh
          </span>
            <span>{{ "11:30" }}</span>
            <!--img arrow-->
            <img
                src="../assets/image-mockup/arrow-right.png"
                alt="arrow right"
                class="arrow-right"
                width="6"
                height="12"
            >
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup"
}
</script>

<style lang="scss">
.supperPopup {
  position: absolute;
  top: 100px;
  right: 0;
  width: 383px;
  height: 114px;
  &:after {
    display: block;
    content: "";
    position: absolute;
    width: 367px;
    height: inherit;
    background-color: #ADC1EB;
    bottom: -14px;
    left: 8px;
    border-radius: 12px;
  }

  #popup {
    position: relative;
    z-index: 1;
    width: inherit;
    height: inherit;
    background: #1F469A;
    color: #fff;
    border-radius: 12px;

    &:after {
      display: block;
      content: "";
      position: absolute;
      width: 383 - 16;
      height: 14px;
      background-color: #ADC1EB;
    }

    .el-row, .el-col, .date, .notify {
      height: inherit;
    }

    .el-row {

    }

    .date {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        font-size: 32px;

        &:first-child {
          font-size: 12px;
        }
      }
    }

    .notify {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      position: relative;

      span {
        display: block;
        font-size: 16px;
        font-weight: 600;

        &:nth-child(2) {
          font-size: 12px;
          font-weight: normal;
        }

        &:nth-child(3) {
          display: flex;
          justify-content: center;
          align-items: center;
          width: fit-content;
          padding: 3px 10px 3px 10px;
          border-radius: 8px;
          background-color: #EBF5FF;
          color: #2763E4;
          font-weight: 600;
        }
      }

      .arrow-right {
        position: absolute;
        top: 25px;
        right: 25px;
      }
    }
  }
}

</style>
