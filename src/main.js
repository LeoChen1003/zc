import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MetaInfo from 'vue-meta-info'

import { Toast, MessageBox } from 'mint-ui'

Vue.prototype.$toast = Toast
Vue.prototype.$messagebox = MessageBox
Vue.use(MetaInfo)

import './styles/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper /* { default global options } */)
import 'swiper/dist/css/swiper.css'

import './icons' // icon

//页面禁止滑动
Vue.prototype.noScroll = function() {
  var mo = function(e) {
    e.preventDefault()
  }
  document.body.style.overflow = 'hidden'
  document.addEventListener('touchmove', mo, false)
}

//页面可以滑动
Vue.prototype.canScroll = function() {
  var mo = function(e) {
    e.preventDefault()
  }
  document.body.style.overflow = ''
  document.removeEventListener('touchmove', mo, false)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
