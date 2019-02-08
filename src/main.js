import Vue from "vue";
import App from "./App.vue";

// add vue-bootstrap start
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// add vue-bootstrap end

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
