<template>
  <el-autocomplete
      popper-class="my-autocomplete"
      v-model="search"
      :fetch-suggestions="() => ``"
      placeholder="Tìm kiếm">
    <i
        slot="prefix"
        class="el-input__icon el-icon-search"
    >
    </i>
    <template slot-scope="{}">
      <div class="value">{{ "" }}</div>
      <span class="link">{{ "" }}</span>
    </template>
  </el-autocomplete>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      textSearch: ''
    }
  },
  computed: {
    search: {
      get() {
        return this.textSearch
      },
      set(value) {
        this.textSearch = value
      }
    }
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
