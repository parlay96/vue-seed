import Layout from '../../../layoutIndex/index'
export default [
  {
    path: '/wel',
    component: Layout,
    children: [{
      path: 'index',
      name: '首頁',
      component: () => import('../viewPage/homeIndex')
    }]
  }
]
