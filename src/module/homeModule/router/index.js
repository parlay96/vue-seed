import Layout from '../../../components/layoutIndex'
export default [
  {
    path: '/wel',
    component: Layout,
    children: [{
      path: 'index',
      name: '首页',
      component: () => import('../viewPage/homeIndex')
    }, {
      path: 'mauLine',
      name: '月活统计',
      component: () => import('../viewPage/mauLine')
    }, {
      path: 'weekAu',
      name: '周活统计',
      component: () => import('../viewPage/weekAu')
    }, {
      path: 'dayAu',
      name: '日活统计',
      component: () => import('../viewPage/dayAu')
    }, {
      path: 'dayAdd',
      name: '每日新增',
      component: () => import('../viewPage/dayAdd')
    }, {
      path: 'nextDay',
      name: '次日留存',
      component: () => import('../viewPage/nextDay')
    }, {
      path: 'sevenDays',
      name: '七日留存',
      component: () => import('../viewPage/sevenDays')
    }, {
      path: 'fourteen',
      name: '十四日留存',
      component: () => import('../viewPage/fourteen')
    }, {
      path: 'firstFlushRate',
      name: '首冲率',
      component: () => import('../viewPage/flushRate/firstFlushRate')
    }, {
      path: 'recoilRate',
      name: '复冲率',
      component: () => import('../viewPage/flushRate/recoilRate')
    }, {
      path: 'orderLine',
      name: '订单统计',
      component: () => import('../viewPage/flushRate/orderLine')
    }]
  }
]
