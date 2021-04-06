let homeMenu = [{
  'sort': 1,
  'href': '/wel/mauLine',
  'title': '统计',
  'icon': 'iconorder_icon',
  'submenu': [{
    'title': '用户相关统计',
    'list': [
      {'href': '/wel/mauLine', 'title': '月活统计'},
      {'href': '/wel/weekAu', 'title': '周活统计'},
      {'href': '/wel/dayAu', 'title': '日活统计'},
      {'href': '/wel/dayAdd', 'title': '每日新增'},
      {'href': '/wel/nextDay', 'title': '次日留存'},
      {'href': '/wel/sevenDays', 'title': '七日留存'},
      {'href': '/wel/fourteen', 'title': '十四日留存'}
    ]
  }, {
    'title': '充值相关统计',
    'list': [
      {'href': '/wel/firstFlushRate', 'title': '首冲率'},
      {'href': '/wel/recoilRate', 'title': '复冲率'},
      {'href': '/wel/orderLine', 'title': '订单统计'}
    ]
  }]
}]
// 合并
let menuDatas = [...homeMenu]
// 排序
menuDatas.sort((a, b) => {
  return a.sort - b.sort
})
export default menuDatas
