import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import topic from '@/page/topic'
import thelogin from '@/page/thelogin/index'

Vue.use(Router)

const router = new Router({
  base:'/',
  mode: 'hash',
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
    {
      path:'/thelogin',
      name: 'thelogin',
      component: thelogin
    },
  ]
})

export default router
