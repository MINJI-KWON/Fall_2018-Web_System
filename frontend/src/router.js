import Vue from 'vue'
import Router from 'vue-router'
import ViewMainPage from './views/ViewMainPage.vue'
import ViewLogin from './views/ViewLogin.vue'
import ViewRegister from './views/ViewRegister.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ViewLogin',
      component: ViewLogin
    },
    {
      path: '/register',
      name: 'ViewRegister',
      component: ViewRegister
    },
    {
        path: '/main/:userId',
        name: 'ViewMainPage',
        component: ViewMainPage
    }

      /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( webpackChunkName: "about"  './views/About.vue')
    }
    */
  ]
})
