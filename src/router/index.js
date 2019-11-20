import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutWith from '../views/AboutWith.vue'
import New from '../views/New.vue'
import newDetail1 from '../views/newDetail1.vue'
import coreAdvantage from '../views/coreAdvantage.vue'
import intelligenceSystem from '../views/intelligenceSystem'
import intelligenceTech from '../views/intelligenceTech.vue'
import intelligenceData from '../views/intelligenceData.vue'
import intelligenceMachine from '../views/intelligenceMachine.vue'
import intelligenceStar from '../views/intelligenceStar.vue'
import product from '../views/product.vue'
import proCai from '../views/proCai.vue'
import proCaiTechSpecs from '../views/proCaiTechSpecs.vue'
import proAIO from '../views/proAIO.vue'
import proAIOTechSpecs from '../views/proAIOTechSpecs.vue'
import contact from '../views/contact.vue'
import buyConsult from '../views/buyConsult.vue'
import homeVideo from '../views/video.vue'

import wapLayout from '../views/wap/layout'
import wapIndex from '../views/wap/index'
import wapProductCenter from '../views/wap/productCenter'
import wapproDetailGTJS from '../views/wap/proDetailGTJS'
import wapproDetailGTGL from '../views/wap/proDetailGTGL'
import wapproDetailYTJJS from '../views/wap/proDetailYTJJS'
import wapproDetailYTJGL from '../views/wap/proDetailYTJGL'
import wapcoreAdvantages from '../views/wap/coreAdvantages'
import wapaboutIntro from '../views/wap/aboutIntro'
import wapaboutPatent from '../views/wap/aboutPatent'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home/video',
    component: homeVideo
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/with',
    name: 'with',
    component: AboutWith
  },
  {
    path: '/new',
    component: New
  },
  {
    path: '/new/detail1',
    component: newDetail1
  },
  {
    path: '/contact',
    component: contact
  },
  {
    path: '/buyConsult',
    component: buyConsult
  },
  {
    path: '/wap',
    component: wapLayout,
    children: [
      {
        path: 'index',
        name: '首页',
        component: wapIndex
      },
      {
        path: 'productCenter',
        name: '产品中心',
        component: wapProductCenter
      },
      {
        path: 'proDetailGTGL',
        name: '智能大滚筒炒菜机套机概览',
        component: wapproDetailGTGL
      },
      {
        path: 'proDetailGTJS',
        name: '智能大滚筒炒菜机套机技术规格',
        component: wapproDetailGTJS
      },
      {
        path: 'proDetailYTJGL',
        name: '智能精炒一体机概览',
        component: wapproDetailYTJGL
      },
      {
        path: 'proDetailYTJJS',
        name: '智能精炒一体机技术规格',
        component: wapproDetailYTJJS
      },
      {
        path: 'coreAdvantages',
        name: '核心优势',
        component: wapcoreAdvantages
      },
      {
        path: 'aboutIntro',
        name: '关于我们（企业介绍）',
        component: wapaboutIntro
      },
      {
        path: 'aboutPatent',
        name: '关于我们（发明专利）',
        component: wapaboutPatent
      }
    ]
  },
  {
    path: '/coreAdvantage',
    name: 'coreAdvantage',
    component: coreAdvantage
  },
  {
    path: '/coreAdvantage/intelligenceSystem',
    name: 'intelligenceSystem',
    component: intelligenceSystem
  },
  {
    path: '/coreAdvantage/intelligenceTech',
    name: 'intelligenceTech',
    component: intelligenceTech
  },
  {
    path: '/coreAdvantage/intelligenceData',
    name: 'intelligenceData',
    component: intelligenceData
  },
  {
    path: '/coreAdvantage/intelligenceMachine',
    name: 'intelligenceMachine',
    component: intelligenceMachine
  },
  {
    path: '/coreAdvantage/intelligenceStar',
    name: 'intelligenceStar',
    component: intelligenceStar
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/product/proCai',
    name: 'proCai',
    component: proCai
  },
  {
    path: '/product/proAIO',
    name: 'proAIO',
    component: proAIO
  },
  {
    path: '/product/proCai/proCaiTechSpecs',
    name: 'proCaiTechSpecs',
    component: proCaiTechSpecs
  },
  {
    path: '/product/proAIO/proAIOTechSpecs',
    name: 'proAIOTechSpecs',
    component: proAIOTechSpecs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
