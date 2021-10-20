<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');

body {
  overflow-x: hidden;
}

#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #11142D;
  background: #fff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

//prefix dropdown
.el-select-dropdown {
  .el-select-dropdown__item.selected{
    color: #164399;
    font-weight: 600;
  }
  ul{
    font-family: Inter;
  }
}
//tooltip
#tooltip{
  font-family: Inter;
  font-size: 14px;
}
</style>
