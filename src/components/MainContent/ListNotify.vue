<template>
  <div>
    <el-row>
      <el-col :span="12">
        <select-component
            text="Thông báo gần đây"
            width="100%">
        </select-component>
      </el-col>
      <el-col :span="12">
        <search-component></search-component>
      </el-col>
    </el-row>
    <el-row>
      <!--Danh sách-->
    </el-row>
  </div>
</template>
<script>
  import SearchComponent from "../SearchComponent";
  import SelectComponent from "../SelectComponent";
  export default{
    name: "ListNotify",
    components: {SelectComponent, SearchComponent},
    data() {
      return {
        options: [{
          value: 'Thông báo 1',
          label: 'Thông báo 1'
        }, {
          value: 'Thông báo 2',
          label: 'Thông báo 2'
        }, {
          value: 'Thông báo 3',
          label: 'Thông báo 3'
        }, {
          value: 'Thông báo 4',
          label: 'Thông báo 4'
        }, {
          value: 'Thông báo 5',
          label: 'Thông báo 5'
        }]
      }
    }
  }
</script>
<style lang="scss">

</style>
