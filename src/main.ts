import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Rx from 'rxjs/Rx';
import VueRx from 'vue-rx';

// VueRx can use libraries other than RxJS
// that implement the observable interface.
Vue.use(VueRx, Rx)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
