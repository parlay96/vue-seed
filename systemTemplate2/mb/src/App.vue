<template>
  <div id="app" ref="app" :style="{minWidth: minWidth}">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Watch } from 'vue-property-decorator'
  import { State, Mutation } from 'vuex-class'
  @Component()
  export default class app extends Vue {
    @State('minWidth') minWidth
    @State('keepAliveData') keepAliveData
    @Mutation('SETscreen') SETscreen
    @State('pageViewTime') pageViewTime
    @State('url') url
    @Watch('url')
    urlChange (val) {
      this.onresize()
    }
    // 监听窗口变化
    onresize () {
      window.onresize = null
      // 监听窗口变化
      window.onresize = () => {
        let obj = {
          h: document.body.clientHeight,
          w: document.body.clientWidth
        }
        this.SETscreen(obj)
        obj = null
      }
    }

    created () {
    }
    mounted () {
      this.onresize()
      this.$refs.app.onclick = null
      // 定义全局点击函数 (用来移动鼠标右键菜单的)
      Vue.prototype.globalClick = (callback) => {
        this.$refs.app.onclick = () => {
          callback()
        }
      }
    }
  }
</script>

<style lang="less">
  @import './themes/publicStyle/default.less';
</style>
