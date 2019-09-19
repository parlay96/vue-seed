import Layout from '../../../layoutIndex/index'
export default [{
  path: '/goods',
  component: Layout,
  children: [{
               path: 'index',
               name: '商品',
               component: () => import('../viewPage/goodsIndex')
             },
             {
               path: '/productDetails',
               name: '商品详情',
               component: () => import('../viewPage/productDetails')
             }
  ]
}]
