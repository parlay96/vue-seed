import apiUrl from '../../../apiUrl'
import Vue from 'vue'
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    // 月活
    yuehuoLine ({ commit }, params) {
      return Vue.http.get(apiUrl.yuehuo, {params}).then(({ data }) => {
        return data
      })
    },
    // 日活
    dayhuoLine ({ commit }, params) {
      return Vue.http.get(apiUrl.dayHuo, {params}).then(({ data }) => {
        return data
      })
    },
    // 周活
    weekHuoLine ({ commit }, params) {
      return Vue.http.get(apiUrl.weekHuo, {params}).then(({ data }) => {
        return data
      })
    },
    // 每日新增
    dayAddLine ({ commit }, params) {
      return Vue.http.get(apiUrl.dayAddu, {params}).then(({ data }) => {
        return data
      })
    },
    // 次日存留
    retentionOne ({ commit }, params) {
      return Vue.http.get(apiUrl.retentionOne, {params}).then(({ data }) => {
        return data
      })
    },
    // 7日存留
    retentionSeven ({ commit }, params) {
      return Vue.http.get(apiUrl.retentionSeven, {params}).then(({ data }) => {
        return data
      })
    },
    // 14日存留
    retentionFourteen ({ commit }, params) {
      return Vue.http.get(apiUrl.retentionFourteen, {params}).then(({ data }) => {
        return data
      })
    },
    // 首冲率
    payRateLine ({ commit }, params) {
      return Vue.http.get(apiUrl.payRate, {params}).then(({ data }) => {
        return data
      })
    },
    // 复冲率
    payPayerRateLine ({ commit }, params) {
      return Vue.http.get(apiUrl.payPayerRate, {params}).then(({ data }) => {
        return data
      })
    },
    // 订单统计
    orderCountLine ({ commit }, params) {
      return Vue.http.get(apiUrl.orderCount, {params}).then(({ data }) => {
        return data
      })
    }
  }
}
