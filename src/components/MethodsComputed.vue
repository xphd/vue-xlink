<template>
  <div id="app">
    <h1>{{message}}</h1>

    <p class="test1">{{methodTest}}</p>
    <p class="test2-1">{{methodTest()}}</p>
    <p class="test2-2">{{methodTest()}}</p>
    <p class="test2-3">{{methodTest()}}</p>
    <p class="test3-1">{{computedTest}}</p>
    <p class="test3-2">{{computedTest}}</p>

    <input v-model="message">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "I am message"
    };
  },
  //   watch: {
  //     message() {
  //       console.log("methodTest");
  //       return this.message + "is using methods";
  //     }
  //   },
  methods: {
    methodTest() {
      console.log("methodTest");
      return this.message + "is using methods";
    }
  },
  computed: {
    computedTest() {
      console.log("computedTest");
      return this.message + "is using computed";
    }
  }
};
</script>

<style scoped>
</style>