<template>
  <el-select v-model="notify" :placeholder="text">
    <el-option
        v-for="item in list"
        :key="item"
        :label="item"
        :value="item">
    </el-option>
  </el-select>
</template>
<script>
export default {
  name: "SelectComponent",
  data() {
    return {
      notify: 'Thông báo gần đây'
    }
  },
  computed: {
    selectOption: {
      get() {
        return this.notify
      },
      set(value) {
        console.log(value)
        return value
      }
    }
  },
  props: {
    text: String,
    list: Array
  },
  mounted() {
    console.log(this.list)
  }
}
</script>
<style>
</style>
