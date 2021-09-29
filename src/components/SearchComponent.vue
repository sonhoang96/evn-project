<template>
  <el-autocomplete
      popper-class="my-autocomplete"
      v-model="state"
      :fetch-suggestions="querySearch"
      placeholder="Please input">
    <i
        class="el-icon-edit el-input__icon"
        slot="suffix">
    </i>
    <template slot-scope="{}">
      <div class="value">{{""}}</div>
      <span class="link">{{""}}</span>
    </template>
  </el-autocomplete>
</template>

<script>
export default {
  name: "SearchComponent",
  date() {

  }
}
</script>
<style lang="scss">
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .value {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .link {
      font-size: 12px;
      color: #b4b4b4;
    }
  }
}
</style>
