const proxyAddress = CONTEXT_PATH + 'wyethErp/wyeth' // 开发环境
// const proxyAddress = '/wyeth' // 线上环境
const publics = {
  uploadImg: '/abc', // 图片上传地址
  menus: proxyAddress + '/sys/menu/listForUser' // 菜单数据地址
}

export default Object.assign({}, publics)
