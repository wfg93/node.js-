import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import topic from '@/page/topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'index',
      component: index
    },
    {
      path:'/topic/:id',
      name: 'topic',
      component: topic
    },
  ]
})
