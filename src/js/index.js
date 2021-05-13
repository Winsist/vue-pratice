import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import routes from '../router'
import store from '../store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import echarts from 'echarts'

require("../style/mycss/base.css");
require("../style/mycss/home.css");

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Router)

// 原型链挂载
// Vue.prototype.$echarts = echarts

export const eventBus = new Vue()

var router = new Router({
  routes,
  // ,
  // mode: 'hash'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})