<template>
  <router-link to="/notification">
    <div class="supperPopup" @click="closePopUp">
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
  </router-link>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      className: "supperPopup"
    }
  },
  methods: {
    closePopUp() {
      this.$store.dispatch("turnOffNotify");
    }
  }
}
</script>

<style lang="scss">
@import '../styles/PopupNotify';
</style>
