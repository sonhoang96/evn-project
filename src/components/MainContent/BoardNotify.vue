<template>
  <div id="board-notify">
    <p>Thông báo gần đây</p>
    <div class="list-notify" v-for="item in dataSets" :key="item.office">
      <div class="each-notify">
        <img src="../../assets/image-mockup/profile.png" alt=""/>
        <div class="each-notify__info">
          <span>{{ item.office }} thông báo</span>
          <span>{{ item.date }}</span>
          <span>
          Tháng {{ "09/2021" }} khách hàng {{ item.idUser }} sử dụng
          {{ item.idxElectric }}, số tiền thanh toán là {{ item.payment }}
        </span>
        </div>
        <div class="img-notify">
          <img src="../../assets/image-mockup/image-bell-notification.png" alt=""/>
        </div>
      </div>
      <el-divider></el-divider>
    </div>
    <el-button class="load-more">Tải thêm</el-button>
  </div>
</template>
<script>
export default {
  name: "BoardNotify",
  data() {
    return {
      dataSets: [
        {
          avatar: "../../assets/image-mockup/image-bell-notification.png",
          office: "PC Đống Đa 1",
          date: "13/09/2021 16:47",
          idUser: "PD10000011297",
          idxElectric: "512kWh",
          payment: "1.224.456",
        },
        {
          avatar: "../../assets/image-mockup/image-bell-notification.png",
          office: "PC Đống Đa 2",
          date: "13/09/2021 16:47",
          idUser: "PD10000011297",
          idxElectric: "512kWh",
          payment: "1.224.456",
        },
        {
          avatar: "../../assets/image-mockup/image-bell-notification.png",
          office: "PC Đống Đa 3",
          date: "13/09/2021 16:47",
          idUser: "PD10000011297",
          idxElectric: "512kWh",
          payment: "1.224.456",
        },
        {
          avatar: "../../assets/image-mockup/image-bell-notification.png",
          office: "PC Đống Đa 4",
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
@import "../../styles/BoardNotify";
</style>
