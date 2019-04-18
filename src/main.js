// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Es6Promise from 'es6-promise'

Es6Promise.polyfill()

import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import 'jquery'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import mixins from './mixins'
import axios from 'axios'

import * as custom from './filters/commin' // 存放过滤器

Vue.prototype.axios = axios
Vue.config.productionTip = false

Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
});


Vue.mixin(mixins)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
