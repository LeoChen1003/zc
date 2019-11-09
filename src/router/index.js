import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutWith from '../views/AboutWith.vue'
import New from '../views/New.vue'
import newDetail1 from '../views/newDetail1.vue'
import wepIndex from '../views/wap/index.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/with',
    name: 'with',
    component: AboutWith
  },
  {
    path: '/new',
    name: 'new',
    component: New,
  },
  {
    path: '/new/detail1',
    name: 'detail1',
    component: newDetail1
  },
  {
    path: '/wap',
    component: wepIndex,
    children: [
      {
        path: 'index',
        name: 'index',
        component: wepIndex
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
