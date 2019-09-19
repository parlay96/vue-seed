import Vue from 'vue'
import Vuex from 'vuex'
import {
  setStore,
  getStore
} from '../utils/store'
import apiUrl from '../apiUrl'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    title: '应用', // title
    error: {
      count: 0,
      message: ''
    },
    url: '', // 保存当前url
    keepAliveData: [], // 需要缓存的页面的名称
    loadingCount: 0, // 判断请求剩余次数
    isCollapse: false, // 水平折叠收起菜单
    openisCollapse: false, // 管理menu开关动画
    token: getStore({
      name: 'token'
    }) || {},
    tagList: getStore({
      name: 'tagList',
      type: 'session'
    }) || [],
    tag: getStore({
      name: 'tag',
      type: 'session'
    }) || {}
  },
  mutations: {
    // 设置当前url路径
    SETURL (state, data) {
      state.url = data
    },
    // 设置需要缓存的页面
    SETKEEPALIVEDATA (state, data) {
      state.keepAliveData = [...state.keepAliveData, ...data]
    },
    // 删除需要缓存的页面
    REMOVEKEEPALIVEDATA (state, data) {
      let datas = JSON.parse(JSON.stringify(state.keepAliveData))
      let das = (arr, val) => {
        let datas1 = arr.filter(item => item !== val)
        return datas1
      }
      if (data.length > 0) {
        data.forEach(it => {
          datas = das(datas, it)
        })
      }
      state.keepAliveData = JSON.parse(JSON.stringify(datas))
    },
    // 存入token
    SET_TOKEN: (state, token) => {
      state.token = token
      setStore({
        name: 'token',
        content: state.token
      })
    },
    // 存Tab列表数据
    ADD_TAG: (state, action) => {
      state.tag = action
      setStore({
        name: 'tag',
        content: state.tag,
        type: 'session'
      })
      if (action.value === '/wel/index' && state.tagList.length <= 0) {
        state.tagList.push(action)
        setStore({
          name: 'tagList',
          content: state.tagList,
          type: 'session'
        })
      } else {
        let tiaojian = true
        state.tagList.forEach(item => {
          if (item.value === action.value) {
            tiaojian = false
          }
        })
        if (tiaojian) {
          state.tagList.push(action)
          setStore({
            name: 'tagList',
            content: state.tagList,
            type: 'session'
          })
        }
      }
    },
    // 刪除Tab单个数据
    DEL_TAG: (state, action) => {
      const key = state.tagList.findIndex(item => item.label === action)
      state.tagList.splice(key, 1)
      setStore({
        name: 'tagList',
        content: state.tagList,
        type: 'session'
      })
    },
    updateTitle (state, payload) {
      if (payload.title) {
        state.title = payload.title
      }
    },
    addError (state, payload) {
      let count = 1 + state.error.count
      let message = payload
      state.error = {
        count,
        message
      }
    },
    loading (state) {
      state.loadingCount++
      console.debug('after loading the loading count is ', state.loadingCount)
    },
    loadingComplete (state) {
      state.loadingCount--
      console.debug('after complete the loading count is ', state.loadingCount)
    }
  },
  actions: {
    Login ({
      commit
    }, parame) {
      return Vue.http.get(apiUrl.token).then(({
        data
      }) => {
        commit('SET_TOKEN', data)
        return data
      })
    }
  }
})
