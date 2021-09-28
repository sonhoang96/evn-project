<template>
  <el-row>
    <el-col :span="24" class="title">
      <span>Xin chào Nguyễn Văn A</span>
      <h1>Theo dõi điện</h1>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TitleContent"
}
</script>

<style lang="scss">
.title {
  padding-left: 21px;

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
}
</style>
