import store from '@/vuex'
import Vue from 'vue'
import {AjaxPlugin} from '../../plugins'
import { router } from '@/config'
Vue.use(AjaxPlugin)

Vue.http.interceptors.request.use(config => {
  let tokenInfo = store.state.token.accessToken
  config.headers['Authorization'] = tokenInfo
  store.commit('loading')
  return config
}, error => {
  return Promise.reject(error)
})

Vue.http.interceptors.response.use(response => {
  store.commit('loadingComplete')
  if (response.status >= 200 && response.status <= 300) {
    if (response.data.code === '401') {
      store.commit('REMOVETOKEN')
      router.push({path: '/login'})
    }
    if (response.data) {
      return response
    } else {
      return response
    }
  }
}, error => {
  store.commit('loadingComplete')
  return Promise.reject(error)
})
