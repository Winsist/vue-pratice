import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import routes from '../router'
import store from '../store'

import directives from "./directives";
import filters from "./filters";

require("../style/mycss/base.css");
require("../style/mycss/home.css");
// require("../style/index.less");


Vue.config.productionTip = false
Vue.use(Router)
Vue.use(directives);
Vue.use(filters);

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