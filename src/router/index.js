import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/views/Frame'
import Article from '@/views/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Frame',
      component: Frame
    },
  ]
})
