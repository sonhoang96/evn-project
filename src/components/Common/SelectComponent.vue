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
      notify: this.text
    }
  },
  computed: {
    selectOption: {
      get() {
        return this.notify
      },
      set(value) {
        return value
      }
    }
  },
  props: {
    text: String,
    list: Array
  },
}
</script>
<style>
</style>
