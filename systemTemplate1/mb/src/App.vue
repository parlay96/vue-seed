<template>
  <div id="app"
       ref="app">
    <keep-alive :include="keepAliveData.join(',')">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { State } from 'vuex-class'
@Component()
  export default class app extends Vue {
  @State('keepAliveData') keepAliveData
  created () {
  }
  mounted () {
    // 定义全局点击函数 (用来移动鼠标右键菜单的)
    let this_ = this
    Vue.prototype.globalClick = function (callback) {
      this_.$refs.app.onclick = function () {
        callback()
      }
    }
  }
  }
</script>

<style lang="less">
@import "./themes/publicStyle/default.less";
@import "./themes/publicStyle/index.less";
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
//i标签活动标签
.iTagStyle {
  display: inline-block;
  min-width: 27px;
  text-align: center;
  height: 16px;
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  padding: 2px;
  border-radius: 3px;
  margin-right: 4px;
}
.el-select-dropdown__item {
  &.selected,
  &:hover {
    color: @font-color !important;
  }
}
</style>
