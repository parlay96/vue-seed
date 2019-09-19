import Layout from '../../../layoutIndex/index'
export default [
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '订单',
        component: () => import('../viewPage/orderIndex')
      },
      {
        path: 'details',
        name: '订单详情',
        component: () => import('../viewPage/orderDetails')
      },
      {
        path: 'addOrder',
        name: '新增货单',
        component: () => import('../viewPage/addOrder')
      }
    ]
  }
]
