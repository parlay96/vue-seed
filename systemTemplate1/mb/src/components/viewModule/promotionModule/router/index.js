import Layout from '../../../layoutIndex/index'
export default [{
  path: '/promotion',
  component: Layout,
  children: [{
               path: 'index',
               name: '促销',
               component: () => import('../viewPage/promotionIndex')
             },
             {
               path: 'index/details/:key',
               name: '促销详情',
               component: () => import('../viewPage/promotionDetail/index')
             }
  ]
}]
