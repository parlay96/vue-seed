import Vue from 'vue'
import apiUrl from '../../../../apiUrl'
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    // 登录请求
    login ({ commit }, params) {
      return Vue.http.post(apiUrl.login, params).then(({ data }) => {
        return data
      })
    }
  }
}
