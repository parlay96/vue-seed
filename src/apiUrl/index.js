const publics = {
  uploadImg: '/abc', // 图片上传地址
  login: '/user/login', // 登陆
  yuehuo: '/user/mau', // 月活
  dayHuo: '/user/dau', // 日活
  weekHuo: '/user/wau', // 周活
  dayAddu: '/user/new-incr', // 每日新增
  retentionOne: '/retention/one', // 次日存留
  retentionSeven: '/retention/seven', // 7日存留
  retentionFourteen: '/retention/fourteen', // 14日存留
  payRate: '/pay/fresh-payer-rate', // 首冲率
  payPayerRate: '/pay/repeat-payer-rate', // 复冲率
  orderCount: '/order/count', // 订单统计
  menus: '/sys/menu/listForUser' // 菜单数据地址
}

export default Object.assign({}, publics)
