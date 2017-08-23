import Vue from 'vue'
import Router from 'vue-router'
import So from '@/components/so'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/so/status',
      name: 'so',
      component: So
    }
  ]
})
