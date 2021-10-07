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
@font-face {
  font-family: Inter;
  src: local("Inter"),
  url("./assets/Inter-font/Inter-VariableFont_slnt,wght.ttf") format("truetype");
}

body{
  overflow: hidden;
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
</style>
