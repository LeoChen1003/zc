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
import wapaboutLab from '../views/wap/aboutLab'
import wapcontact from '../views/wap/contact'
import wapnew from '../views/wap/new'
import wapnewDetail from '../views/wap/newDetail'
import wapvideo from '../views/wap/video'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { pcPath: '/', mobilePath: '/wap/index' },
    component: Home
  },
  {
    path: '/home/video',
    meta: { pcPath: '/home/video', mobilePath: '/wap/video' },
    component: homeVideo
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/with',
    name: 'with',
    meta: { pcPath: '/with', mobilePath: '/wap/aboutIntro' },
    component: AboutWith
  },
  {
    path: '/new',
    meta: { pcPath: '/new', mobilePath: '/wap/new' },
    component: New
  },
  {
    path: '/new/detail1',
    meta: { pcPath: '/new/detail1', mobilePath: '/wap/newDetail' },
    component: newDetail1
  },
  {
    path: '/contact',
    meta: { pcPath: '/contact', mobilePath: '/wap/contact' },
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
        meta: { pcPath: '/', mobilePath: '/wap/index' },
        component: wapIndex
      },
      {
        path: 'productCenter',
        meta: { pcPath: '/product', mobilePath: '/wap/productCenter' },
        name: '产品中心',
        component: wapProductCenter
      },
      {
        path: 'proDetailGTGL',
        meta: { pcPath: '/product/proCai', mobilePath: '/wap/proDetailGTGL' },
        name: '智能大滚筒炒菜机套机概览',
        component: wapproDetailGTGL
      },
      {
        path: 'proDetailGTJS',
        meta: {
          pcPath: '/product/proCai/proCaiTechSpecs',
          mobilePath: '/wap/proDetailGTJS'
        },
        name: '智能大滚筒炒菜机套机技术规格',
        component: wapproDetailGTJS
      },
      {
        path: 'proDetailYTJGL',
        meta: {
          pcPath: '/product/proAIO',
          mobilePath: '/wap/proDetailYTJGL'
        },
        name: '智能精炒一体机概览',
        component: wapproDetailYTJGL
      },
      {
        path: 'proDetailYTJJS',
        meta: {
          pcPath: '/product/proAIO/proAIOTechSpecs',
          mobilePath: '/wap/proDetailYTJJS'
        },
        name: '智能精炒一体机技术规格',
        component: wapproDetailYTJJS
      },
      {
        path: 'coreAdvantages',
        meta: {
          pcPath: '/coreAdvantage',
          mobilePath: '/wap/coreAdvantages'
        },
        name: '核心优势',
        component: wapcoreAdvantages
      },
      {
        path: 'aboutIntro',
        name: '关于我们（企业介绍）',
        meta: { pcPath: '/with', mobilePath: '/wap/aboutIntro' },
        component: wapaboutIntro
      },
      {
        path: 'aboutPatent',
        name: '关于我们（发明专利）',
        meta: { pcPath: '/with', mobilePath: '/wap/aboutPatent' },
        component: wapaboutPatent
      },
      {
        path: 'aboutLab',
        name: '关于我们（实验室）',
        meta: { pcPath: '/with', mobilePath: '/wap/aboutLab' },
        component: wapaboutLab
      },
      {
        path: 'contact',
        name: '联系我们',
        meta: { pcPath: '/contact', mobilePath: '/wap/contact' },
        component: wapcontact
      },
      {
        path: 'new',
        name: '新闻中心',
        meta: { pcPath: '/new', mobilePath: '/wap/new' },
        component: wapnew
      },
      {
        path: 'newDetail',
        meta: { pcPath: '/new/detail1', mobilePath: '/wap/newDetail' },
        name: '新闻详情',
        component: wapnewDetail
      },
      {
        path: 'video',
        name: '视频',
        meta: { pcPath: '/home/video', mobilePath: '/wap/video' },
        component: wapvideo
      }
    ]
  },
  {
    path: '/coreAdvantage',
    name: 'coreAdvantage',
    meta: {
      pcPath: '/coreAdvantage',
      mobilePath: '/wap/coreAdvantages'
    },
    component: coreAdvantage
  },
  {
    path: '/coreAdvantage/intelligenceSystem',
    name: 'intelligenceSystem',
    meta: {
      pcPath: '/coreAdvantage/intelligenceSystem',
      mobilePath: '/wap/coreAdvantages'
    },
    component: intelligenceSystem
  },
  {
    path: '/coreAdvantage/intelligenceTech',
    name: 'intelligenceTech',
    meta: {
      pcPath: '/coreAdvantage/intelligenceTech',
      mobilePath: '/wap/coreAdvantages'
    },
    component: intelligenceTech
  },
  {
    path: '/coreAdvantage/intelligenceData',
    name: 'intelligenceData',
    meta: {
      pcPath: '/coreAdvantage/intelligenceData',
      mobilePath: '/wap/coreAdvantages'
    },
    component: intelligenceData
  },
  {
    path: '/coreAdvantage/intelligenceMachine',
    name: 'intelligenceMachine',
    meta: {
      pcPath: '/coreAdvantage/intelligenceMachine',
      mobilePath: '/wap/coreAdvantages'
    },
    component: intelligenceMachine
  },
  {
    path: '/coreAdvantage/intelligenceStar',
    meta: {
      pcPath: '/coreAdvantage/intelligenceStar',
      mobilePath: '/wap/coreAdvantages'
    },
    name: 'intelligenceStar',
    component: intelligenceStar
  },
  {
    path: '/product',
    name: 'product',
    meta: { pcPath: '/product', mobilePath: '/wap/productCenter' },
    component: product
  },
  {
    path: '/product/proCai',
    name: 'proCai',
    meta: { pcPath: '/product/proCai', mobilePath: '/wap/proDetailGTGL' },
    component: proCai
  },
  {
    path: '/product/proAIO',
    name: 'proAIO',
    meta: {
      pcPath: '/product/proAIO',
      mobilePath: '/wap/proDetailYTJGL'
    },
    component: proAIO
  },
  {
    path: '/product/proCai/proCaiTechSpecs',
    meta: {
      pcPath: '/product/proCai/proCaiTechSpecs',
      mobilePath: '/wap/proDetailGTJS'
    },
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
