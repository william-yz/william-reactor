import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueRx from 'vue-rx'

import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription' // Disposable if using RxJS4

// tada!
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/main.css'

import router from './routers'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueRx, { Observable, Subscription })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
