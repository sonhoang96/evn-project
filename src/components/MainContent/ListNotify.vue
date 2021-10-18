<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" id="select-notify">
        <select-component text="Thông báo gần đây" :list="options"></select-component>
      </el-col>
      <el-col :span="12" id="search-notify">
        <search-component></search-component>
      </el-col>
    </el-row>
    <el-row>
      <board-notify></board-notify>
    </el-row>
  </div>
</template>
<script>
import SearchComponent from "../Common/SearchComponent";
import SelectComponent from "../Common/SelectComponent";
import BoardNotify from './BoardNotify.vue';
import {createArray} from "../../ultils/functions";

export default {
  name: "ListNotify",
  components: {SelectComponent, SearchComponent, BoardNotify},
  data() {
    return {
      options: createArray("Thông báo", 7)
    };
  },
};
</script>
<style lang="scss">
@import "../../styles/ListNotify";
</style>
