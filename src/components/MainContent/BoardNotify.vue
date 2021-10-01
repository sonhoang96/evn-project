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
          office: "PC Đống Đa",
          date: "13/09/2021 16:47",
          idUser: "PD10000011297",
          idxElectric: "512kWh",
          payment: "1.224.456",
        },
        {
          avatar: "../../assets/image-mockup/image-bell-notification.png",
          office: "PC Đống Đa",
          date: "13/09/2021 16:47",
          idUser: "PD10000011297",
          idxElectric: "512kWh",
          payment: "1.224.456",
        },
        {
          avatar: "../../assets/image-mockup/image-bell-notification.png",
          office: "PC Đống Đa",
          date: "13/09/2021 16:47",
          idUser: "PD10000011297",
          idxElectric: "512kWh",
          payment: "1.224.456",
        },
        {
          avatar: "../../assets/image-mockup/image-bell-notification.png",
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
  box-shadow: 0px 0px 5px #f5f5f5;
  border-radius: 24px;
  margin-top: 28px;
  margin-bottom: 40px;
  padding: 37px 20px;

  p {
    color: #11142d;
    font-size: 18px;
    font-weight: 600;
    margin: 0px 17px;
  }

  .each-notify {
    display: flex;
    justify-content: space-around;
    border-radius: 24px;
    //box-shadow: 0px 0px 5px gainsboro;
    margin-top: 20px;

    img {
      width: 55px;
      height: 55px;
      //border-radius: 50%;
      padding: 38px 18px 109px;
    }

    .img-notify {
      width: inherit;
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 96px;
        height: 109px;
        border-radius: 0;
        padding: 0px 19px 0px 0px;
      }
    }

    .each-notify__info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 70%;
      padding: 30px 0;

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

  .load-more{
    margin: auto;
    margin-top: 24px;
    display: block;
    width: 206px;
    height: 65px;
    background: linear-gradient(
            90deg, #E4353A 0%, #254291 97.92%, #1F469A 100%);
    border-radius: 16px;
    color: #fff;
    font-weight: 700;
  }
}
</style>
