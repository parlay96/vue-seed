<template>
  <div class="pageTabs overflowHidden fl">
    <div class="btnArea fl">
      <div class="menuBtn fl" @click="showIsCollapse"><i :class="isCollapse ? 'iconshouqi iconfont' : 'iconshouqi- iconfont'"/></div>
    </div>
    <div class="tabs fl" ref="tabs" style="position: relative">
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        @tab-click="tabClick"
        @tab-remove="removeTab">
        <!--//  :closable="item.label !== '首页'" 表示首页不许出现关闭按钮X-->
        <el-tab-pane
          v-for="item in tagList"
          :key="item.label + item.value"
          :label="item.label"
          :name="item.label + item.value"
          :closable="item.label !== '首页'"
        />
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Component, Watch, Prop} from 'vue-property-decorator'
  import {State} from 'vuex-class'
  @Component({})
  export default class pageTabs extends Vue {
    @State('isCollapse')isCollapse
    @State('tagList')tagList
    @State('tag')tag
    @State('url') url
    editableTabsValue = ''
    @Prop({type: Boolean, default: false}) openMenu // 是否开启menu菜单
    openUrl (item) {
      if (this.url === item.value) return
      if (item.query) {
        this.$router.push({path: item.value, query: item.query})
      } else {
        this.$router.push({path: item.value})
      }
    }
    removeTab (targetName) {
      let tabs = JSON.parse(JSON.stringify(this.tagList))
      let zw = targetName.match(/[\u4e00-\u9fa5]+/g)
      let zm = targetName.slice('/').replace(/[\u4e00-\u9fa5]/g, '')
      if (zw[0]) {
        if (this.editableTabsValue === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.label === zw[0]) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                this.openUrl(nextTab)
              }
            }
          })
        }
        this.$store.commit('DEL_TAG', zm)
      }
    }
    mounted () {
      this.editableTabsValue = this.tag.label + this.tag.value
      this.$refs.tabs.onmousemove = null
      this.$refs.tabs.onmousemove = (ev) => {
        ev.target.oncontextmenu = null
        if (ev.target.classList[0] && ev.target.classList[0] === 'el-tabs__nav-scroll') {
         return
        }
        ev.target.oncontextmenu = (ev) => {
          if (this.openMenu && ev.target.id) {
            let tabs = JSON.parse(JSON.stringify(this.tagList))
            // 解析id
            let yw = ev.target.id.match(/\w+/g)
            if (!yw) {
              return ''
            }
            let url = ''
            yw.forEach((item, index) => {
              if (index > 0) {
                url = url + '/' + item
              }
            })
            tabs.forEach((item, index) => {
              if (ev.target.innerText === item.label && item.value === url) {
                this.$emit('openUlMenu', ev, index, item)
              }
            })
            // 屏蔽右键默认菜单
            return false
          }
        }
      }
    }

    showIsCollapse () {
      this.$store.state.isCollapse = !this.isCollapse
      this.$store.state.openisCollapse = true
    }

    tabClick (val) {
      let tabs = JSON.parse(JSON.stringify(this.tagList))
      tabs.forEach((tab, index) => {
        if (tab.label === val.label) {
          this.openUrl(tab)
        }
      })
    }
    @Watch('tag')
    tagChange (val) {
      if (Object.keys(val).length !== 0) {
        this.editableTabsValue = val.label + val.value
      } else {
        this.editableTabsValue = '123'
      }
    }
  }
</script>

<style lang="less">
  .pageTabs {height: 100%;width: calc(100% - 190px);background-color: @pageTabsbgColor;padding: 14px 0 0 0;box-sizing: border-box;
    .btnArea {width: 40px;height: 34px;line-height: 33px;text-align: center;overflow: hidden;
      .menuBtn {
        width: 100%;
        font-size: @font-size18;
        color: @color999;
        cursor: pointer;
        /*border-right: solid 1px @menuBtnborder-right;*/
        box-sizing: border-box;
      }
      .menuBtn:hover {
        color: @menuBtnhoverC;
        /*background: @menuBtnhoverbgC;*/
      }
    }
    .tabs {
      width: calc(100% - 40px);
      height: 34px;
      overflow: hidden;
      .el-tabs--card > .el-tabs__header .el-tabs__nav, .el-tabs--card > .el-tabs__header {
        border: none !important;
      }
      .el-tabs__nav-wrap.is-scrollable {
        padding: 0 40px !important;
      }
      .el-tabs__nav-next, .el-tabs__nav-prev {
        width: 40px;
        font-size: @el-tabs-btn-font-size;
        height: 34px;
        line-height: 34px;
        text-align: center;
        overflow: hidden;
        color: @el-tabs-btn-color;
        cursor: pointer;
        /*<!--border-right: solid 1px @el-tabs-btn-border-right-color;-->*/
        box-sizing: border-box;
      }
      .el-tabs__nav-prev {
        /*margin-right: 2px;*/
      }
      .el-tabs__nav-next {
        /* border-left: solid 1px @el-tabs-btn-border-right-color;*/
       }
       .el-tabs__item {
         color: @el-tabs-item-color;
         font-size: @el-tabs-item-font-size;
         -moz-user-select: none;
         -khtml-user-select: none;
         user-select: none;
         height: 34px;
         border-radius: 5px 5px 0 0;
         margin-right: 2px;
         background-color: @el-tabs__item_bgColor;
         border-left: none !important;
         line-height: 34px;
       }
       .el-tabs__item.is-active {
         font-weight: 500;
         color: @el-tabs-item-is-active-color !important;
         background-color: @el-tabs-item-is-active-bgcolor !important;
         /*border-top-color: @el-tabs-item-is-active-border-top-color !important; // #1ab399*/
      }
      .el-tabs--card > .el-tabs__header .el-tabs__item .el-icon-close {
        font-size: 18px;
        height: 18px;
        line-height: 18px;
      }
      .el-tabs--card > .el-tabs__header .el-tabs__item.is-active.is-closable .el-icon-close {
        width: 18px;
      }
      .el-tabs__item .el-icon-close:hover {
        background-color: transparent !important;
        color: @dh-color !important;
      }
      .el-tabs__item:hover {
        color: @el-tabs-item-hover-c;
        background-color: @el-tabs-item-hover-bgc;
        .el-icon-close {
          width: 18px !important;
        }
      }
      .el-tabs--card > .el-tabs__header .el-tabs__item {
        border-bottom: none;
        /*border-top: 2px solid transparent;*/
      }
       .el-tabs__nav-next:hover {
         color: @el-tabs-btn-hover-color;
         /* background: @el-tabs-btn-hover-bgcolor;*/
       }
      .el-tabs__nav-prev:hover {
        color: @el-tabs-btn-hover-color;
        /*background: @el-tabs-btn-hover-bgcolor;*/
      }
    }
}
</style>
