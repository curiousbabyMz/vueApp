<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /* padding-top: 60px; */
}
.back {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 20px;
  left: 20px;
  z-index: 5;
}
ul {
  padding: 0;
}
a :visited,
a {
  color: black;
  text-decoration: none;
}
</style>
