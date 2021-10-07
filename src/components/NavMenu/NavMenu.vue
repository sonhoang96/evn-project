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
          <img class="el-menu__tool-red-dot" src="../../assets/image-mockup/Notification-sign.png" alt="notification sign"/>
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
import DATA from "../../../evn.json";

export default {
  name: 'NavMenu',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      DATA
    };
  },
  methods:{
    handleChangeIdxMenu(){
      this.activeIndex = "1"
    }
  },
  computed: {
    Customer(){
      const {CUSTOMER_NAME, CUSTOMER_ID} = this.$store.state.indexElectric.listData;
      return {CUSTOMER_NAME, CUSTOMER_ID}
    }
  },
  mounted() {
    const path = localStorage.getItem("currentPath")
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
}
</script>

<style lang="scss" scoped>
div.nav-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  .el-menu {
    font-size: 14px;
    font-weight: 600;
    height: 80px;
    @media(max-width: 1024px) {
      .el-menu-item {
        padding: 0 15px;
      }
    }

    .el-menu__logo {
      float: left;
      margin: 12px 102px 12px 29px;
      cursor: pointer;
      @media(max-width: 1200px) {
        margin: 12px 50px 12px 29px;
      }
    }

    li {
      height: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 14px;

      a {
        text-decoration: none;
      }
    }

    .el-menu__tool {
      float: right;
      height: 100%;
      display: flex;
      align-items: center;

      .el-menu__tool-bell {
        position: relative;

        .el-menu__tool-red-dot {
          position: absolute;
          top: -5px;
          right: -5px;
        }
      }

      .el-menu__tool-account {
        display: flex;
        align-items: center;

        #account-img {
          width: 37px;
          height: 37px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 12px;

          &:hover {
            border: 1px solid lightblue;
          }
        }

        #account-info {
          text-align: left;

          p {
            margin: 0;
            color: #171725;
          }
        }
      }

      div[class*="el-menu__tool-"] {
        margin-right: 40px;
      }

      @media (max-width: 1200px) {
        .el-menu__tool-list {
          display: none;
        }
      }
    }
  }
}
</style>
