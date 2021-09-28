<template>
  <div id="bill-board">
    <div class="bill-board__frame">
      <span>Tiền tạm tính tháng {{ "10" }}</span>
      <!-- absolute -->
      <div class="bill-board__content">
        <div id="content">
          <p>Cập nhật 1 ngày trước</p>
          <p>{{ "240.830" }} <small>VNĐ</small></p>
          <span>Tương đương {{ "124" + "kWh" }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TempoElecBill",
};
</script>
<style lang="scss">
#bill-board {
  height: 470px;
  padding-left: 63px;
  .bill-board__frame {
    float: right;
    width: 400px;
    height: inherit;
    border-radius: 25px;
    background-image: linear-gradient(to top, #254291, #e4353a);
    position: relative;
    .bill-board__content {
      position: absolute;
      width: 384px;
      height: 354px;
      background: #fff;
      bottom: 8px;
      left: 8px;
      border-radius: 20px;
      #content {
        height: 100%;
        padding: 18px 24px 14px;
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
}
</style>
