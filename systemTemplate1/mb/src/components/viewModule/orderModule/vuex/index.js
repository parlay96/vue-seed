export default {
  namespaced: true,
  state: {
    tabName: '',
    tabType: 1
  },
  mutations: {
    changeTabName (state, data) {
      state.tabName = data.name
      state.tabType = data.type
      console.log(data)
    }
  },
  actions: {

  }
}
