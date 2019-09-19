let homeMenu = [{
  'sort': 1,
  'href': '/wel/texts',
  'title': '实例',
  'icon': 'iconorder_icon',
  'submenu': [{
    'title': '实例',
    'list': [{'href': '/wel/texts', 'title': '实例'}]
  }]
}]
// 合并
let menuDatas = [...homeMenu]
// 排序
menuDatas.sort((a, b) => {
  return a.sort - b.sort
})
export default menuDatas
