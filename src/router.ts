import Vue from "vue";
import Router from "vue-router";
import HomeContainer from "./views/homeComponent/homeContainer.vue";
import AboutContainer from "./views/aboutComponent/aboutContainer.vue";
import CsrfContainer from "./views/csrfComponent/csrfContainer.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeContainer
    },
    {
      path: "/about",
      name: "about",
      component: AboutContainer
    },
    {
      path: "/csrf",
      name: "CsrfContainer",
      component: CsrfContainer
    },
    // {
      //path: "/about",
      //name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () =>
        //import(/* webpackChunkName: "about" */ "./views/About.vue")
    //} 
  ]
});
