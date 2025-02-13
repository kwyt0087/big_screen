import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'homeIndex',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/index')
      }
    ]
  }

  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

]

const router = new VueRouter({
  routes
})

export default router
