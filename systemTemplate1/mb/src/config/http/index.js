// import Vue from 'vue'
// import { AjaxPlugin } from '../../plugins'
import store from '@/vuex'
import axios from 'axios'
const instance = axios.create()
// Vue.use(AjaxPlugin)

instance.interceptors.request.use(config => {
  // 判断是否存在token，如果存在将每个页面header都添加token
  store.commit('loading')
  if (Object.keys(store.state.token).length !== 0) {
    config.headers.common['Authentication-Token'] = store.state.token.token
  }
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  store.commit('loadingComplete')
  return response
}, error => {
  store.commit('loadingComplete')
  return Promise.reject(error)
})
export default instance
