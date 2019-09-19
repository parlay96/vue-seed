import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  base: CONTEXT_PATH,
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/wel/index'
  }]
})
