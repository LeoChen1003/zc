import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutWith from '../views/AboutWith.vue'
import New from '../views/New.vue'
import newDetail1 from '../views/newDetail1.vue'
import coreAdvantage from '../views/coreAdvantage.vue'
import product from '../views/product.vue'
import proCai from '../views/proCai.vue'
import proCaiTechSpecs from '../views/proCaiTechSpecs.vue'
import proAIO from '../views/proAIO.vue'
import proAIOTechSpecs from '../views/proAIOTechSpecs.vue'
import contact from '../views/contact.vue'
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
  { path: "*", redirect: "/" },
  {
    path: '/',
    name: 'home',
    meta: {
      pcPath: '/',
      mobilePath: '/wap/index',
      title: '优特智厨 - 官方网站'
    },
    component: Home
  },
  {
    path: '/home/video',
    meta: {
      pcPath: '/home/video',
      mobilePath: '/wap/video',
      title: '优特智厨 - 官方网站'
    },
    component: homeVideo
  },
  {
    path: '/with',
    name: 'with',
    meta: {
      pcPath: '/with',
      mobilePath: '/wap/aboutIntro',
      title: '关于我们 - 优特智厨'
    },
    component: AboutWith
  },
  {
    path: '/new',
    meta: {
      pcPath: '/new',
      mobilePath: '/wap/new',
      title: '新闻中心 - 优特智厨'
    },
    component: New
  },
  {
    path: '/new/detail1',
    meta: {
      pcPath: '/new/detail1',
      mobilePath: '/wap/newDetail',
      title: '新闻中心 - 优特智厨'
    },
    component: newDetail1
  },
  {
    path: '/contact',
    meta: {
      pcPath: '/contact',
      mobilePath: '/wap/contact',
      title: '联系我们 - 优特智厨'
    },
    component: contact
  },
  {
    path: '/wap',
    component: wapLayout,
    children: [
      {
        path: 'index',
        name: '首页',
        meta: {
          pcPath: '/',
          mobilePath: '/wap/index',
          title: '优特智厨 - 官方网站'
        },
        component: wapIndex
      },
      {
        path: 'productCenter',
        meta: {
          pcPath: '/product',
          mobilePath: '/wap/productCenter',
          title: '产品中心 - 优特智厨'
        },
        name: '产品中心',
        component: wapProductCenter
      },
      { 
        path: 'proDetailGTGL',
        meta: {
          pcPath: '/product/proCai',
          mobilePath: '/wap/proDetailGTGL',
          title: '智能一拖三炒菜机 - 优特智厨'
        },
        name: '智能大滚筒炒菜机套机概览',
        component: wapproDetailGTGL
      },
      {
        path: 'proDetailGTJS',
        meta: {
          pcPath: '/product/proCai/proCaiTechSpecs',
          mobilePath: '/wap/proDetailGTJS',
          title: '智能一拖三炒菜机 - 优特智厨'
        },
        name: '智能大滚筒炒菜机套机技术规格',
        component: wapproDetailGTJS
      },
      {
        path: 'proDetailYTJGL',
        meta: {
          pcPath: '/product/proAIO',
          mobilePath: '/wap/proDetailYTJGL',
          title: '智能精炒一体机 - 优特智厨'
        },
        name: '智能精炒一体机概览',
        component: wapproDetailYTJGL
      },
      {
        path: 'proDetailYTJJS',
        meta: {
          pcPath: '/product/proAIO/proAIOTechSpecs',
          mobilePath: '/wap/proDetailYTJJS',
          title: '智能精炒一体机 - 优特智厨'
        },
        name: '智能精炒一体机技术规格',
        component: wapproDetailYTJJS
      },
      {
        path: 'coreAdvantages',
        meta: {
          pcPath: '/coreAdvantage',
          mobilePath: '/wap/coreAdvantages',
          title: '核心优势 - 优特智厨'
        },
        name: '核心优势',
        component: wapcoreAdvantages
      },
      {
        path: 'aboutIntro',
        name: '关于我们（企业介绍）',
        meta: {
          pcPath: '/with',
          mobilePath: '/wap/aboutIntro',
          title: '关于我们 - 优特智厨'
        },
        component: wapaboutIntro
      },
      {
        path: 'aboutPatent',
        name: '关于我们（发明专利）',
        meta: {
          pcPath: '/with',
          mobilePath: '/wap/aboutPatent',
          title: '关于我们 - 优特智厨'
        },
        component: wapaboutPatent
      },
      {
        path: 'aboutLab',
        name: '关于我们（实验室）',
        meta: {
          pcPath: '/with',
          mobilePath: '/wap/aboutLab',
          title: '关于我们 - 优特智厨'
        },
        component: wapaboutLab
      },
      {
        path: 'contact',
        name: '联系我们',
        meta: {
          pcPath: '/contact',
          mobilePath: '/wap/contact',
          title: '联系我们 - 优特智厨'
        },
        component: wapcontact
      },
      {
        path: 'new',
        name: '新闻中心',
        meta: {
          pcPath: '/new',
          mobilePath: '/wap/new',
          title: '新闻中心 - 优特智厨'
        },
        component: wapnew
      },
      {
        path: 'newDetail',
        meta: {
          pcPath: '/new/detail1',
          mobilePath: '/wap/newDetail',
          title: '新闻中心 - 优特智厨'
        },
        name: '新闻详情',
        component: wapnewDetail
      },
      {
        path: 'video',
        name: '视频',
        meta: {
          pcPath: '/home/video',
          mobilePath: '/wap/video',
          title: '优特智厨 - 官方网站'
        },
        component: wapvideo
      }
    ]
  },
  {
    path: '/coreAdvantage',
    name: 'coreAdvantage',
    meta: {
      pcPath: '/coreAdvantage',
      mobilePath: '/wap/coreAdvantages',
      title: '核心优势 - 优特智厨'
    },
    component: coreAdvantage
  },
  {
    path: '/product',
    name: 'product',
    meta: {
      pcPath: '/product',
      mobilePath: '/wap/productCenter',
      title: '产品中心 - 优特智厨'
    },
    component: product
  },
  {
    path: '/product/proCai',
    name: 'proCai',
    meta: {
      pcPath: '/product/proCai',
      mobilePath: '/wap/proDetailGTGL',
      title: '智能大滚筒炒菜机套机 - 优特智厨'
    },
    component: proCai
  },
  {
    path: '/product/proAIO',
    name: 'proAIO',
    meta: {
      pcPath: '/product/proAIO',
      mobilePath: '/wap/proDetailYTJGL',
      title: '智能精炒一体机 - 优特智厨'
    },
    component: proAIO
  },
  {
    path: '/product/proCai/proCaiTechSpecs',
    meta: {
      pcPath: '/product/proCai/proCaiTechSpecs',
      mobilePath: '/wap/proDetailGTJS',
      title: '智能大滚筒炒菜机套机 - 优特智厨'
    },
    name: 'proCaiTechSpecs',
    component: proCaiTechSpecs
  },
  {
    path: '/product/proAIO/proAIOTechSpecs',
    meta: {
      pcPath: '/product/proAIO/proAIOTechSpecs',
      mobilePath: '/wap/proDetailYTJJS',
      title: '智能精炒一体机 - 优特智厨'
    },
    name: 'proAIOTechSpecs',
    component: proAIOTechSpecs
  }
]

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
