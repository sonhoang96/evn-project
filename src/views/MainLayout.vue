<template>
  <div>
    <nav-menu/>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu/NavMenu";

export default {
  name: "MainLayout",
  components: {NavMenu}
}
</script>
