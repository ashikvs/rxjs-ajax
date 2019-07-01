import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//loadview function, which uses the import function to dynamically import a Vue component.
function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home')
    },
    {
      path: '/about',
      name: 'about',
      component: loadView('About')
    }
  ]
})