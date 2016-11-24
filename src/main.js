import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/main.css'

import router from './routers'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
