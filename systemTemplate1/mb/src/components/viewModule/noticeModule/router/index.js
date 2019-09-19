import Layout from '../../../layoutIndex/index'
export default [
  {
    path: '/notice',
    component: Layout,
    children: [{
      path: 'index',
      name: '通知',
      component: () => import('../viewPage/noticIndex')
    }]
  }
]
