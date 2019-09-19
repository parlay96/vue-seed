import Vue from 'vue'
import Router from 'vue-router'
import store from '../../vuex/index'

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

router.beforeEach((to, from, next) => {
  if (to.meta.minWidth) {
    store.commit('setMinWidth', to.meta.minWidth)
  } else {
    store.commit('resetMinWidth')
  }
  next()
})
export default router
