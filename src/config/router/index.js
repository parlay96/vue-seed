import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  base: CONTEXT_PATH,
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/wel/index'
    }
  ]
})

export default router
