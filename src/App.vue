<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  import "@/styles/index.scss"

  export default {
    name: 'app',
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0
  }

</style>
