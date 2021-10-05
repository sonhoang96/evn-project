<template>
    <el-select v-model="value" :placeholder="text">
      <el-option
          v-for="item in month"
          :key="item"
          :label="item"
          :value="item">
      </el-option>
    </el-select>
</template>
<script>
  export default {
    name: "SelectComponent",
    props:{
      text: String,
      month: Array
    },
  }
</script>
<style></style>
