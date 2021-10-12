<template>
  <div class="nav-menu">
    <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        active-text-color="#E4353A"
        text-color="#171725"
    >
      <!--Logo-->
      <template>
        <router-link to="/electricity-tracking">
          <img
              src="../../assets/image-mockup/logo.png"
              class="el-menu__logo"
              @click="handleChangeIdxMenu"
              alt="logo"
          />
        </router-link>
      </template>

      <!--List menu-->
      <el-menu-item index="1">
        <router-link to="/electricity-tracking">Theo dõi điện</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/feedback">Phản hồi ý kiến</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/notification">Thông báo</router-link>
      </el-menu-item>

      <div class="el-menu__tool">

        <!--Magnifying flass-->
        <div class="el-menu__tool-grass">
          <img src="../../assets/image-mockup/Magnifying-glass.png" alt="magnifying glass"/>
          <span></span>
        </div>

        <!--Bell-->
        <div class="el-menu__tool-bell">
          <img src="../../assets/image-mockup/bell.png" alt="bell"/>
          <img class="el-menu__tool-red-dot" src="../../assets/image-mockup/Notification-sign.png"
               alt="notification sign"/>
        </div>

        <!--Account information-->
        <div class="el-menu__tool-account">
          <img id="account-img" src="../../assets/image-mockup/profile.png" alt="profile"/>
          <div id="account-info">
            <p>{{ Customer.CUSTOMER_NAME }}</p>
            <p style="color: grey">{{ Customer.CUSTOMER_ID }}</p>
          </div>
        </div>

        <!--Retangle-->
        <div class="el-menu__tool-list">
          <img src="../../assets/image-mockup/Rectangle.png" alt="rectangle"/>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'NavMenu',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleChangeIdxMenu() {
      this.activeIndex = "1"
    },
    handleActiveTab(path) {
      switch (path) {
        case "/electricity-tracking":
          this.activeIndex = "1"
          break;
        case "/feedback":
          this.activeIndex = "2"
          break;
        case "/notification":
          this.activeIndex = "3"
          break;
        default:
          this.activeIndex = "1"
      }
    }
  },
  computed: {
    Customer() {
      const {CUSTOMER_NAME, CUSTOMER_ID} = this.$store.state.indexElectric.listData;
      return {CUSTOMER_NAME, CUSTOMER_ID}
    },
  },
  watch: {
    $route(to) {
      this.handleActiveTab(to.path)
    }
  },
  mounted() {
    const path = localStorage.getItem("currentPath")
    this.handleActiveTab(path)
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/NavMenu";
</style>
