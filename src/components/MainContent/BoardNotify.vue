<template>
  <div id="board-notify">
    <p>Thông báo gần đây</p>
    <div class="each-notify">
      <img src="../../assets/image-mockup/profile.png" alt="" />
      <div class="each-notify__info">
        <span>{{ "PC Đống Đa" }} thông báo</span>
        <span>{{ "13/09/2021 16:47" }}</span>
        <span>
          Tháng {{ "09/2021" }} khách hàng {{ "PD10000011297" }} sử dụng
          {{ "512kWh" }}, số
          <br />
          tiền thanh toán là {{ "1.224.456" }}
        </span>
      </div>
      <img src="../../assets/image-mockup/image-bell-notification.png" alt="" />
    </div>
    <el-divider></el-divider>
  </div>
</template>
<script>
export default {
  name: "BoardNotify",
  data() {
    return {
      dataSets: [
        {
          avarta: () => import("../../assets/image-mockup/profile.png"),
          office: "PC Đống Đa",
          date: "13/09/2021 16:47",
          idUser: "PD10000011297",
          idxElectric: "512kWh",
          payment: "1.224.456",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#board-notify {
  width: inherit;
  height: 500px;
  box-shadow: 0px 0px 5px #f5f5f5;
  border-radius: 24px;
  margin-top: 28px;
  padding: 37px 20px;
  p {
    color: #11142d;
    font-size: 18px;
    font-weight: 600;
    margin: 0px 17px 40px;
  }
  .each-notify {
    display: flex;
    justify-content: space-around;
    border-radius: 24px;
    box-shadow: 0px 0px 5px gainsboro;
    img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      padding: 38px 18px 109px;
      &:last-child {
        width: 110px;
        height: auto;
        position: absolute;
        right: 19px;
      }
    }
    .each-notify__info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 85%;
      span {
        font-size: 15px;
        color: #808191;
        font-weight: 600;
        line-height: 24px;
        &:first-child {
          color: #11142d;
          font-size: 18px;
        }
        &:last-child {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
        }
      }
    }
  }
}
</style>