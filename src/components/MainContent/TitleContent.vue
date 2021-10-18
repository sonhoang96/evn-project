<template>
  <el-row>
    <el-col :span="24" class="title">
      <span>Xin chào {{customer}}</span>
      <h1>Theo dõi điện</h1>
      <i class="el-icon-setting" @click="dialogFormVisible"></i>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TitleContent",
  props: ['customer', 'dialogFormVisible'],
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
  }
  i{
    position: absolute;
    top: 50%;
    right: 21px;
    font-size: 2.5em;
    transform: translate(0, -50%);
    animation: rotate 15s infinite;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      color: #164399;
    }
  }
  @keyframes rotate {
    0%{
      transform: translate(0, -50%) rotate(0deg);
    }
    100%{
      transform: translate(0, -50%) rotate(360deg);
    }
  }
}
</style>
