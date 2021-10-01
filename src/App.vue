<template>
  <div id="app">
    <nav-menu/>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu/NavMenu";

export default {
  name: "App",
  components: {NavMenu}
}
</script>
<style lang="scss">
@font-face {
  font-family: Inter;
  src: local("Inter"),
  url("./assets/Inter-font/Inter-VariableFont_slnt,wght.ttf") format("truetype");
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
