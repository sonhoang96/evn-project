<template>
  <div class="nav-menu">
    <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#E4353A"
        text-color="#171725"
    >
      <!--Logo-->
      <template>
        <!--<router-link to="/electricity-tracking">-->
        <img src="../../assets/image-mockup/logo.png" class="el-menu__logo"/>
        <!--</router-link>-->
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
          <img src="../../assets/image-mockup/Magnifying-glass.png"/>
          <span></span>
        </div>

        <!--Bell-->
        <div class="el-menu__tool-bell">
          <img src="../../assets/image-mockup/bell.png"/>
          <img class="el-menu__tool-red-dot" src="../../assets/image-mockup/Notification-sign.png"/>
        </div>

        <!--Account information-->
        <div class="el-menu__tool-account">
          <img id="account-img" src="../../assets/image-mockup/profile.png"/>
          <div id="account-info">
            <p>{{ DATA.CUSTOMER_NAME}}</p>
            <p style="color: grey">{{ DATA.CUSTOMER_ID }}</p>
          </div>
        </div>

        <!--Retangle-->
        <div class="el-menu__tool-list">
          <img src="../../assets/image-mockup/Rectangle.png"/>
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
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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

    .el-menu__logo {
      float: left;
      margin: 12px 102px 12px 29px;
      cursor: pointer;
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
    }
  }
}
</style>
