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
      path: 'texts',
      name: '实例',
      component: () => import('../viewPage/texts')
    }]
  }
]
