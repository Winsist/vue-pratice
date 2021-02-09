import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import routes from '../router'
import store from '../store'

require("../style/mycss/base.css");
require("../style/mycss/home.css");

Vue.config.productionTip = false
Vue.use(Router)

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