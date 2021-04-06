import 'babel-polyfill' // 引入填充库,解决IE不能显示的问题
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './themes/amendEleTheme/theme/index.css' // 引入element-ui样式
import store from './vuex'
import Bus from './utils/bus' // 引入bus，用于组件通信
import AjaxPlugin from './plugins/ajax-plugin'
import './permission' // 权限
import {router} from './config' // 路由
import {Component} from 'vue-property-decorator'
import * as echarts from 'echarts'
import moment from 'moment'

// 载入模拟数据，在对接后端服务器接口时，取消掉
// import '../data'

// 引入頁面模块
import moduleData from './module'

moduleData.forEach(item => {
  // 注入模块
  Vue.use(item, {store, router})
})

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(Bus)
// http请求
Vue.use(AjaxPlugin)

// 将moment挂载到原型上
Vue.prototype.$moment = moment
Vue.prototype.$echarts = echarts
// Adding Custom Hooks
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])

//  Uncaught (in promise) NavigationDuplicated {_name:""NavigationDuplicated"... 的解决方法
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 该项目种子特别注重规范，引入了eslint代码检测，在写法上一定要规范
// eslint代码检测，使用它可以避免低级错误和统一代码的风格
// 种子采用模块化写

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
