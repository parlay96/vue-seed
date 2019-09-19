import 'babel-polyfill' // 引入填充库,解决IE不能显示的问题
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex'
import './permission' // 权限
import {
  httpInstance,
  router
} from './config'
import {
  AjaxPlugin
} from './plugins'

// 载入模拟数据，在对接后端服务器接口时，取消掉
import '../data'

// 引入頁面模块
import {
  goodsModule,
  orderModule,
  homeModule,
  noticeModule,
  accountModule,
  promotionModule,
  capitalModule
} from './components/viewModule/index'
Vue.use(goodsModule, {
  store,
  router
})
Vue.use(orderModule, {
  store,
  router
})
Vue.use(homeModule, {
  store,
  router
})
Vue.use(noticeModule, {
  store,
  router
})
Vue.use(accountModule, {
  store,
  router
})
Vue.use(promotionModule, {
  store,
  router
})
Vue.use(capitalModule, {
  store,
  router
})

export default {
  data () {
    return {
      dhColor: '#1ab399'
    }
  }
}
console.log('author: penglei, 博客站www.plblog.cn， element PC端种子')
// 该项目种子特别注重规范，引入了eslint代码检测，在写法上一定要规范
// eslint代码检测，使用它可以避免低级错误和统一代码的风格
// 种子采用模块化写法
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.use(AjaxPlugin, httpInstance)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
