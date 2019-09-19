import router from './config/router'
import store from './vuex'
router.beforeEach((to, from, next) => {
  store.state.loadingCount = 0 // 如果跳了页面，就把之前页面的请求次数清除为0
  store.commit('SETURL', to.path)
  store.commit('SETFROMURL', from.path)
  if (Object.keys(store.state.token).length !== 0) {
    // 如果我当前是有权限的，手动输入地址到登录页面或者点击浏览器回退到登录页面，
    //     那么不好意思，你就不能去登录页面（你就去跳转前的路径）
    if (to.path === '/login') {
      next(from.path)
      // 如果不是登录页面，那么就把当前路由信息进行保存
    } else {
      if (!to.meta.noAddTag) {
        // 设置缓存页面
        if (to.meta.setKeepAlive && to.meta.keepAliveName) {
          store.commit('SETKEEPALIVEDATA', [to.meta.keepAliveName])
        }
        // 保存当前页面的tab
        store.commit('ADD_TAG', {
          keepAliveName: to.meta.keepAliveName || '', // 需要缓存页面的名称
          label: to.name,
          value: to.path,
          query: to.query,
          params: to.params
        })
      }
      next()
    }
  } else {
    console.log('无权限')
    if (to.path === '/login') { // 如果是登录页面路径，就直接next()
      next()
    } else { // 不然就跳转到登录
      next('/login')
    }
  }
})
