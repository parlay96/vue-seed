<template>
  <div class="pageTabs">
    <div class="btnArea fl">
      <div class="menuBtn fl" @click="showIsCollapse"><i class="el-icon-menu"/></div>
    </div>
    <div class="tabs fl" ref="tabs" style="position: relative">
      <!--<ul class="tabsList" ref="ulList" :style="{left: '0px',width: ulWidth}">-->
      <!--<li :class="{fl: true, isactive: item.label === tag.label, limove: index === liIndex}"-->
      <!--ref="liList"-->
      <!--@click="hadelMouse"-->
      <!--@mousemove="limousemove(index, item)"-->
      <!--@mouseout="liIndex = -1"-->
      <!--v-for="(item, index) in tagList"-->
      <!--:key="index">-->
      <!--<div @click="openUrl(item)" style="padding: 0 15px" v-if="item.label">-->
      <!--<span onselectstart="return false;" style="-moz-user-select:none;">{{ item.label }}</span>-->
      <!--<i class="el-icon-error avue-icon" v-if="item.value !== '/wel/index'" @click.stop="closeTags(item)"/>-->
      <!--<div style="clear: both"/>-->
      <!--</div>-->
      <!--</li>-->
      <!--<div style="clear: both"/>-->
      <!--</ul>-->
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        @tab-click="tabClick"
        @tab-remove="removeTab">
        <el-tab-pane
          v-for="(item, index) in tagList"
          :key="index"
          :label="item.label"
          :name="item.label"
          :closable="item.label !== '首页'"
        />
      </el-tabs>
    </div>
    <div class="btnArea fl" style="width: 40px">
      <!--<div class="menuBtn fr" style="width: 60px;font-size: 15px">退出</div>-->
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
    liIndex = -1
    editableTabsValue = ''
    ulWidth = 'auto' // ul标签宽度
    ulWidth2 = 0
    @Prop({type: Boolean, default: true}) openMenu // 是否开启menu菜单
    // 获取鼠标指针在元素内移动事件
    limousemove (index, row) {
      this.liIndex = index
      // 弹出自定义菜单
      // let this_ = this
      // if (this.openMenu) {
      //   this.$refs.liList[index].oncontextmenu = function (ev) {
      //     this_.$emit('openUlMenu', ev, index, row)
      //     // 屏蔽右键默认菜单
      //     return false
      //   }
      // }
    }

    // 点击移动事件逻辑
    tabsMove (str) {
      if (this.$refs.tabs.offsetWidth >= this.$refs.ulList.offsetWidth) {
        return ''
      } else {
        let ulLeft = this.$refs.ulList.style.left
        if (str === 'right') {
          if (Math.abs(parseInt(ulLeft)) + parseInt(this.$refs.tabs.offsetWidth) > parseInt(this.$refs.ulList.offsetWidth)) {
            return ''
          } else {
            ulLeft = ulLeft === '0px' ? '-300px' : parseInt(ulLeft) - 300 + 'px'
            this.$refs.ulList.style.left = ulLeft
          }
        } else {
          if (ulLeft === '0px') {
            return ''
          } else {
            ulLeft = parseInt(ulLeft) + 300 + 'px'
            this.$refs.ulList.style.left = ulLeft
          }
        }
      }
    }

    hadelMouse (e) {
      if (this.$refs.tabs.offsetWidth >= this.$refs.ulList.offsetWidth) {
        return ''
      } else {
        let ulLeft = this.$refs.ulList.style.left
        let bodyH = document.body.clientWidth - this.$refs.tabs.offsetWidth
        let boundarystart = this.$refs.tabs.offsetWidth - bodyH / 2
        // 向左滑动
        if (e.x > boundarystart) {
          if (Math.abs(parseInt(ulLeft)) + parseInt(this.$refs.tabs.offsetWidth) > parseInt(this.$refs.ulList.offsetWidth)) {
            return ''
          } else {
            ulLeft = parseInt(ulLeft) - 300 + 'px'
            this.$refs.ulList.style.left = ulLeft
          }
          // 向右滑动
        } else if (e.x < boundarystart) {
          if (ulLeft === '0px') {
            return ''
          } else {
            ulLeft = parseInt(ulLeft) + 300 + 'px'
            this.$refs.ulList.style.left = ulLeft
          }
        }
      }
    }

    openUrl (item) {
      this.$router.push({path: item.value})
    }

    closeTags (tag) {
      const key = this.tagList.findIndex(item => item.value === tag.value)
      this.$store.commit('DEL_TAG', tag)
      if (tag.value === this.tag.value) {
        tag = this.tagList[key === 0 ? key : key - 1] // 如果关闭本标签让前推一个
        this.openUrl(tag)
      }
    }

    removeTab (targetName) {
      let tabs = JSON.parse(JSON.stringify(this.tagList))
      if (this.editableTabsValue === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.label === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              this.openUrl(nextTab)
            }
          }
        })
      }
      this.$store.commit('DEL_TAG', targetName)
    }

    mounted () {
      this.editableTabsValue = this.tag.label
      // this.setH()
    }

    showIsCollapse () {
      this.$store.state.isCollapse = !this.isCollapse
      this.$store.state.openisCollapse = true
    }

    setH () {
      this.ulWidth2 = 0
      setTimeout(() => {
        this.$refs.liList.forEach(item => {
          this.ulWidth2 = parseInt(this.ulWidth2) + item.offsetWidth
        })
        this.ulWidth = this.ulWidth2 + 'px'
      })
    }

    tabClick (val) {
      let tabs = JSON.parse(JSON.stringify(this.tagList))
      tabs.forEach((tab, index) => {
        if (tab.label === val.name) {
          this.openUrl(tab)
        }
      })
    }

    @Watch('tagList', {deep: true})
    tagListChange (val) {
      // this.setH()
      // setTimeout(() => {
      //   this.setH()
      // }, 200)
    }
    @Watch('tag')
    tagChange (val) {
      this.editableTabsValue = val.label
    }
  }
</script>

<style lang="less">
  @import "../../../themes/publicStyle/common";
  .pageTabs {
    height: calc(100% - 50px);
    background-color: #fafafa;
    box-sizing: border-box;
    padding: 0;
    overflow: hidden;
    .btnArea {
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      overflow: hidden;
      .menuBtn {
        width: 100%;
        font-size: 18px;
        color: #999;
        cursor: pointer;
        border-right: solid 1px #eee;
        box-sizing: border-box
      }
      .menuBtn:hover {
        color: #777;
        background: #f2f2f2;
      }
    }
    .tabs {
      width: calc(100% - 40px);
      height: 40px;
      overflow: hidden;
      .el-tabs--card > .el-tabs__header .el-tabs__nav, .el-tabs--card > .el-tabs__header {
        border: none !important;
      }
      .el-tabs__nav-wrap.is-scrollable {
        padding: 0 40px !important;
      }
      .el-tabs__nav-next, .el-tabs__nav-prev {
        width: 40px;
        font-size: 18px;
        height: 40px;
        line-height: 38px;
        text-align: center;
        overflow: hidden;
        color: #999;
        cursor: pointer;
        border-right: solid 1px #eee;
        box-sizing: border-box
      }
      .el-tabs__nav-next {
        border-left: solid 1px #eee;
      }
      .el-tabs__item {
        color: #999;
        font-size: 15px;
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
      }
      .el-tabs__item.is-active {
        color: @dh-color !important;
        border-top-color: @dh-color !important; // #1ab399
      }
      .el-tabs__item:hover {
        color: @dh-color;
      }
      .el-tabs--card > .el-tabs__header .el-tabs__item {
        border-bottom: none;
        border-top: 2px solid transparent;
      }
      .el-tabs__nav-prev:hover {
        color: #777;
        background: #f2f2f2;
      }
      .el-tabs__nav-next:hover {
        color: #777;
        background: #f2f2f2;
      }
      .tabsList {
        position: relative;
        height: 40px;
        transition: left .3s;
        -moz-transition: left .3s; /* Firefox 4 */
        -webkit-transition: left .3s; /* Safari and Chrome */
        -o-transition: left .3s; /* Opera */
        li {
          height: 40px;
          line-height: 40px;
          font-size: 15px;
          border-top: 2px solid transparent;
          color: #999;
          cursor: pointer;
          border-right: solid 1px #eee;
          box-sizing: border-box;
          span {
            display: block;
            float: left
          }
          .avue-icon {
            color: #ccc;
            font-size: 12px;
            display: block;
            float: left;
            margin-top: 15px;
            margin-left: 3px
          }
          .avue-icon:hover {
            color: #c00
          }
        }
        .limove {
          color: #777;
          background: #f2f2f2;
        }
        .isactive {
          background-color: white;
          color: @dh-color;
          border-top-color: @dh-color; // #1ab399
        }
      }
    }
  }
</style>
