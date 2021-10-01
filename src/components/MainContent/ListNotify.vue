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
import SearchComponent from "../SearchComponent";
import SelectComponent from "../SelectComponent";
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
.el-row {
  input {
    width: inherit !important;
    height: 65px;
    border-radius: 16px;
    background: #e4e4e44d;
    padding: 18px 0px 18px 23px;
    &::placeholder {
      font-size: 14px;
      font-weight: 600;
      color: #a9a9ab;
    }
    &:focus {
      border: 1px solid #e4e4e4;
      box-shadow: 0px 0px 5px #f5f5f5;
    }
  }
  #select-notify {
    .el-select {
      width: 100%;
      .el-input__suffix {
        .el-input__suffix-inner {
          margin-right: 10px;
          i {
            font-size: 18px;
            font-weight: 600;
            color: #1b1d21;
          }
        }
      }
    }
  }
  #search-notify {
    .el-autocomplete {
      width: 100%;
    }
  }
}
</style>
