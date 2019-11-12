import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutWith from '../views/AboutWith.vue'
import New from '../views/New.vue'
import newDetail1 from '../views/newDetail1.vue'
import coreAdvan from '../views/coreAdvan.vue'
import sytOs from '../views/intellSyt.vue'
import intellTech from '../views/intellTech.vue'
import intellData from '../views/intellData.vue'
import intellMach from '../views/intellMach.vue'
import intellStar from '../views/intellStar.vue'
import product from '../views/product.vue'

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
    path: '/coreAdvan',
    name: "coreAdvan",
    component: coreAdvan,
  },
  {
    path: '/coreAdvan/sytOs',
    name: 'sytOs',
    component: sytOs
  },
  {
    path: '/coreAdvan/intellTech',
    name: 'intellTech',
    component: intellTech
  },
  {
    path: '/coreAdvan/intellData',
    name: 'intellData',
    component: intellData
  },
  {
    path: '/coreAdvan/intellMach',
    name: 'intellMach',
    component: intellMach
  },
  {
    path: '/coreAdvan/intellStar',
    name: 'intellStar',
    component: intellStar
  },
  {
    path: '/product',
    name: 'product',
    component: product
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
