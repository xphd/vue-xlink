<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <cross-link/>
    <!-- <methods-computed/> -->
  </div>
</template>

<script>
import CrossLink from "./components/CrossLink.vue";
import MethodsComputed from "./components/MethodsComputed.vue";

export default {
  name: "app",
  components: {
    "cross-link": CrossLink,
    "methods-computed": MethodsComputed
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
