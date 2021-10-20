<template>
  <el-row>
    <el-col :span="24" class="title">
      <span>Xin chào {{ customer }}</span>
      <h1>{{title}}</h1>
      <el-tooltip placement="left" effect="light">
        <div slot="content" id="tooltip">
          Hiệu chỉnh thời gian
          <br/>
          định kì để hệ thống
          <br/>
          cập nhật dữ liệu
        </div>
        <i class="el-icon-setting" @click="dialogFormVisible"></i>
      </el-tooltip>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TitleContent",
  props: ['customer', 'dialogFormVisible', 'handleCheckPath'],
  data: () => {
    return{
      title: 'Theo dõi điện'
    }
  },
  mounted() {
    if( !this.handleCheckPath()) this.title = "Thông báo"
  }
}
</script>

<style lang="scss">
.title {
  padding-left: 21px;
  position: relative;
  span {
    font-size: 18px;
    color: black;
    font-weight: 600;
  }

  h1 {
    color: #164399;
    font-weight: 600;
    font-size: 40px;
    margin: 0;
    animation: title 1s forwards;
  }

  i {
    position: absolute;
    top: 50%;
    right: 21px;
    font-size: 2.5em;
    transform: translate(0, -50%);
    animation: rotate 15s infinite;
    cursor: pointer;
    transition: 0.3s;
    outline: none;

    &:hover {
      color: #164399;
    }
  }

  @keyframes rotate {
    0% {
      transform: translate(0, -50%) rotate(0deg);
    }
    100% {
      transform: translate(0, -50%) rotate(360deg);
    }
  }
  @keyframes title {
    0%{ opacity: 0.5 }
    100%{opacity: 1}
  }
}
</style>
