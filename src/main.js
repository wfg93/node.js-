// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from './router'
import  '@/assets/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);


import 'swiper/dist/css/swiper.css'

import * as index from './filters/'
Object.keys(index).forEach(key => {
  Vue.filter(key,index[key])
})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
