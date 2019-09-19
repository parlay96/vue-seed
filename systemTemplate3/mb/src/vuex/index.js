import Vue from 'vue'
import Vuex from 'vuex'
import { setStore, getStore, removeStore } from '../utils/store'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    title: '应用', // title
    error: {
      count: 0,
      message: ''
    },
    screenObj: 0, // 窗口的高宽度变化
    url: '', // 保存当前url
    menus: [], // 菜单
    fromUrl: '', // 保存后退的一个路由
    keepAliveData: ['layoutIndex'], // 需要缓存的页面的名称
    loadingCount: 0, // 判断请求剩余次数
    isCollapse: false, // 水平折叠收起菜单
    openisCollapse: false, // 管理menu开关动画
    plMenuFals: false,
    token: getStore({ name: 'token' }) || {token: 123234},
    tagList: getStore({ name: 'tagList', type: 'session' }) || [],
    tag: getStore({ name: 'tag', type: 'session' }) || {},
    minWidth: '1280px'
  },
  mutations: {
    // 设置最小宽度
    setMinWidth (state, data) {
      state.minWidth = data
    },
    // 重置最小宽度
    resetMinWidth (state) {
      state.minWidth = '1280px'
    },
    // 设置左边菜单
    SETMENU (state, data) {
      state.menus = data
    },
    // 设置窗口的高宽度
    SETscreen (state, data) {
      state.screenObj = data
    },
    // 设置当前url路径
    SETURL (state, data) {
      state.url = data
    },
    SETFROMURL (state, data) {
      state.fromUrl = data
    },
    // 设置需要缓存的页面
    SETKEEPALIVEDATA (state, data) {
      state.keepAliveData = [...new Set([...state.keepAliveData, ...data])]
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
      setStore({ name: 'token', content: state.token })
    },
    // 移除token
    REMOVETOKEN (state, data) {
      state.token = {}
      state.userObj = {}
      state.tagList = []
      state.tag = {}
      removeStore({name: 'token'})
      removeStore({name: 'userObj'})
      removeStore({name: 'tagList'})
      removeStore({name: 'tag'})
    },
    // 存Tab列表数据
    ADD_TAG: (state, action) => {
      state.tag = action
      setStore({ name: 'tag', content: state.tag, type: 'session' })
      if (action.value === '/wel/index' && state.tagList.length <= 0) {
        state.tagList.push(action)
        setStore({ name: 'tagList', content: state.tagList, type: 'session' })
      } else {
        if (action.value !== '/wel/index' && state.tagList.length <= 0) {
          let obj = {label: '首页', value: '/wel/index'}
          state.tagList.push(obj)
        }
        let tiaojian = true
        state.tagList.forEach(item => { if (item.value === action.value) { tiaojian = false } })
        if (tiaojian) {
          state.tagList.push(action)
          setStore({ name: 'tagList', content: state.tagList, type: 'session' })
        }
      }
    },
    // 刪除Tab单个数据
    DEL_TAG: (state, action) => {
      const key = state.tagList.findIndex(item => item.value === action)
      const item = state.tagList.find(item => item.value === action)
      if (key >= 0) {
        state.tagList.splice(key, 1)
        setStore({ name: 'tagList', content: state.tagList, type: 'session' })
      }
      // 删除需要缓存的页面
      if (item.keepAliveName) {
        let data = [item.keepAliveName]
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
      }
    },
    // 修改Tab单个数据的名称
    // 使用方法 首先（获取当前路由信息let tag = this.$store.state.tag,
    // 然后修改tag对象里面的label为你想要的值，然后调用AMEND_TAG
    // ，吧tag传进来）
    AMEND_TAG (state, obj) {
      state.tagList.forEach(item => {
        if (item.value === obj.value) {
          if (obj.label) {
            item.label = obj.label
          }
        }
      })
      // 存入当前被修改的值
      state.tag = obj
      setStore({ name: 'tag', content: state.tag, type: 'session' })
      setStore({ name: 'tagList', content: state.tagList, type: 'session' })
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
  actions: {}
})
