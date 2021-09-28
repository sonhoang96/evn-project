<template>
  <div class="about">
    <nav-menu />
    <main-content />
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu/NavMenu";
import MainContent from "../components/MainContent/MainContent";
  export default {
    name: "ElectricityView",
    components: {MainContent, NavMenu},
}
</script>

<style>

</style>
