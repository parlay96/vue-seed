import store from '@/vuex'
import axios from 'axios'
import { router } from '@/config'

const httpConfig = {
  baseURL: '/yupao',
  timeout: 6 * 60 * 1000
}

if (process.env.NODE_ENV === 'production') {
  httpConfig.baseURL = ''
}

const http = axios.create(httpConfig)

http.interceptors.request.use(config => {
  let tokenInfo = store.state.token.token
  config.headers['X-Token'] = tokenInfo
  store.commit('loading')
  return config
}, error => {
  return Promise.reject(error)
})

http.interceptors.response.use(response => {
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

export default http
