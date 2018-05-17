<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.tyan{
    background:RGBA(46, 63, 80, 1.00);
    color: #fff;
    text-align: center;
    font: 22px sans-serif;
}
</style>
