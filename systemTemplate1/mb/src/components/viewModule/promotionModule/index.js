import promotionModule from './vuex'
import routes from './router'
/**
 *  将不同的业务模块按照module分开, 每个模块将自身公开为一个插件, 在install方法中，负责注册自身的相关资源
 */
export default {
  install (Vue, { store, router }) {
    router.addRoutes(routes)
    store.registerModule('promotionModule', promotionModule)
  }
}
