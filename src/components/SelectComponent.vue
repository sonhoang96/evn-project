<template>
    <el-select v-model="value" :placeholder="text">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
</template>
<script>
  export default {
    name: "SelectComponent",
    data() {
      return {
        options: [{
          value: 'Tháng 1',
          label: 'Tháng 1'
        }, {
          value: 'Tháng 2',
          label: 'Tháng 2'
        }, {
          value: 'Tháng 3',
          label: 'Tháng 3'
        }, {
          value: 'Tháng 4',
          label: 'Tháng 4'
        }, {
          value: 'Tháng 5',
          label: 'Tháng 5'
        }]
      }
    },
    props:{
      text: String,
      width: String
    }
  }
</script>
<style></style>
