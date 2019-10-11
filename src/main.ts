import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Rx from 'rxjs/Rx';
import { SubSink } from 'subsink';
import VueRx from 'vue-rx';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.use(Vuetify)

// VueRx can use libraries other than RxJS
// that implement the observable interface.
Vue.use(VueRx, Rx, SubSink)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
