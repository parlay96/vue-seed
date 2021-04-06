import axios from '../config/http'

export default {
  install (Vue) {
    Vue.prototype.$http = axios
    Vue.http = axios
  }
}
