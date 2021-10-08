<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12" id="select-notify">
        <select-component text="Thông báo gần đây"> </select-component>
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
export default {
  name: "ListNotify",
  components: { SelectComponent, SearchComponent, BoardNotify },
  data() {
    return {
      options: [
        {
          value: "Thông báo 1",
          label: "Thông báo 1",
        },
        {
          value: "Thông báo 2",
          label: "Thông báo 2",
        },
        {
          value: "Thông báo 3",
          label: "Thông báo 3",
        },
        {
          value: "Thông báo 4",
          label: "Thông báo 4",
        },
        {
          value: "Thông báo 5",
          label: "Thông báo 5",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../../styles/ListNotify";
</style>
