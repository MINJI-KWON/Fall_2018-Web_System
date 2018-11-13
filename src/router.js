import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ViewRegister from './views/ViewRegister.vue'
import ViewPersonalFeed from './views/ViewPersonalFeed.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: ViewRegister
    },
    {
        path: '/:id',
        name: 'personalFeed',
        component: ViewPersonalFeed
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
