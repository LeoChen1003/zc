import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/index.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper /* { default global options } */)
import 'swiper/dist/css/swiper.css'

import './icons' // icon

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
