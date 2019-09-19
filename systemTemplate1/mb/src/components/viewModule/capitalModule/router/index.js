import Layout from '../../../layoutIndex/index'
export default [{
  path: '/capital',
  component: Layout,
  children: [{
    path: 'index',
    name: '资金',
    component: () => import('../viewPage/capitalIndex')
  }, {
    path: 'recharge',
    name: '充值',
    component: () => import('../viewPage/recharge/index')
  }]
}]
