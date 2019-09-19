<template>
  <el-container class="avue-contail">
    <el-aside :style="{width: isCollapse ? asideWidthCollapse : asideWidth}"
              :class="{avueaside: true, packUp: isCollapse === true && openisCollapse === true, unfold: isCollapse === false && openisCollapse === true}">
      <div class="avue-logo boxSizing">B2B订货系统</div>
      <div class="avue-menuBox">
        <div class="avue-menu">
          <pl-menu :data="menus"/>
        </div>
      </div>
    </el-aside>
    <el-container>
      <el-header class="avue-haeder" style="height: 100px;background-color: #f2f2f2">
        <hae-der/>
        <page-tabs @openUlMenu="openUlMenu"/>
      </el-header>
      <el-main class="avue-main">
        <div class="avue-mainBox">
          <keep-alive :include="keepAliveData.join(',')">
            <router-view class="pageView"/>
          </keep-alive>
        </div>
      </el-main>
    </el-container>
    <!--tab自定义菜单-->
    <div class="uiMenuBox"
         ref="uiMenu"
         style="display: none;top: 0;left: 0"
         @click.stop="uiMenuStop = true">
      <ul class="uiMenu">
        <li @click="uiMenuClick('关闭标签')" v-if="uimenurow.value !== '/wel/index'" class="liStopFalse">
          <i class="el-icon-close"/><span>关闭标签</span>
        </li>
        <li v-else class="liStop"><i class="el-icon-close"/><span>关闭标签</span></li>
        <li @click="uiMenuClick('关闭其他标签')"
            v-if="tagList.length >= 3"
            class="liStopFalse">
          <i/><span>关闭其他标签</span>
        </li>
        <li v-else class="liStop"><i/><span>关闭其他标签</span></li>
        <li @click="uiMenuClick('刷新')" v-if="tag.value === uimenurow.value" class="liStopFalse">
          <i class="el-icon-refresh"/><span>刷新</span>
        </li>
        <li v-else class="liStop"><i class="el-icon-refresh"/><span>刷新</span></li>
        <div style="border: 0.5px solid #e6e6e6; margin: 5px 0"/>
        <li v-if="uimenurow.value === '/wel/index' || tabIndex === 1" class="liStop">
          <i/><span>关闭左侧标签</span>
        </li>
        <li @click="uiMenuClick('关闭左侧标签')" v-else class="liStopFalse"><i/><span>关闭左侧标签</span></li>
        <li @click="uiMenuClick('关闭右侧标签')"
            v-if="tagList.length >= 2 && tabIndex !== tagList.length - 1"
            class="liStopFalse">
          <i/><span>关闭右侧标签</span>
        </li>
        <li v-else class="liStop"><i/><span>关闭右侧标签</span></li>
        <li @click="uiMenuClick('关闭全部标签')" v-if="tagList.length > 2" class="liStopFalse">
          <i class="el-icon-error"/><span>关闭全部标签</span>
        </li>
        <li v-else class="liStop"><i class="el-icon-error"/><span>关闭全部标签</span></li>
      </ul>
    </div>
  </el-container>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { State } from 'vuex-class'
  import menuData from '../../../data/menuData'
  import plMenu from '../publicComponent/discreteness/pl-menu'
  import haeDer from '../publicComponent/discreteness/haeDer'
  import pageTabs from '../publicComponent/discreteness/pageTabs'
  @Component({
    components: { haeDer, pageTabs, plMenu }
  })
  export default class index extends Vue {
    @State('keepAliveData') keepAliveData
    @State('tagList') tagList
    @State('isCollapse') isCollapse
    @State('openisCollapse') openisCollapse
    @State('tag') tag
    // [侧边栏宽度] 正常状态
    asideWidth= '96px'
    // [侧边栏宽度] 折叠状态
    asideWidthCollapse= '78px'
    menus = []
    uiMenuStop = true
    uimenurow = '' // 当前uimenu菜单的信息
    tabIndex = '' // 当前tab索引
    created () {
      this.menus = menuData
    }
    mounted () {
      this.globalClick(this.moreSetupMenuRemove)
    }
    // 关闭自定义菜单
    moreSetupMenuRemove () {
      this.$refs.uiMenu.style.display = 'none'
    }
    // 弹出自定义菜单
    openUlMenu (ev, index, row) {
      this.uimenurow = row
      this.tabIndex = index
      let oeVent = ev || event
      this.$refs.uiMenu.style.display = 'block'
      // 设置自定义菜单的坐标，达到鼠标右键的地方弹出自定义菜单
      this.$refs.uiMenu.style.left = oeVent.clientX + 'px'
      this.$refs.uiMenu.style.top = oeVent.clientY + 'px'
    }
    // 自定义菜单列表点击事件
    uiMenuClick (val) {
      console.log(val)
    }
  }
</script>

<style lang="less">
  .el-aside {
    width: 230px;
    overflow: visible;
  }
  .avue-contail {
    width: 100%;
    height: 100%;
    @keyframes myfirst { from {width: 230px;} to {width: 78px;} }
    @keyframes myfirst2 { from {width: 78px;} to {width: 230px;} }
    @keyframes myfirst3 { from {width: 90%;height: 90%;margin-top: 50px;} to {width: 100%;height: 100%;margin-top: 0} }
    .pageView {
      margin: 0 auto;
      animation: myfirst3 .5s;
      -moz-animation: myfirst3 .5s;
      -webkit-animation: myfirst3 .5s;
      -o-animation: myfirst3 .5s;
    }
    .packUp {
      animation: myfirst .5s;
      -moz-animation: myfirst .5s;
      -webkit-animation: myfirst .5s;
      -o-animation: myfirst .5s;
    }
    .unfold {
      animation: myfirst2 .5s;
      -moz-animation: myfirst2 .5s;
      -webkit-animation: myfirst2 .5s;
      -o-animation: myfirst2 .5s;
    }
    .avueaside {
      background-color: #1ab399;
      height: 100%;
      .avue-logo {
        height: 150px;
        width: 100%;
        font-size: 20px;
        padding-top: 50px;
        overflow: hidden;
        color: hsla(0,0%,100%,.8);
        text-align: center;
        z-index: 1024;
      }
      .avue-menuBox {
        width: 100%;
        color: white;
        position: relative;
        height: calc(100% - 150px);
        .avue-menu {
          height: 100%;
          box-sizing: border-box;
          .el-menu {border-right: none !important;}
          .el-menu-item:hover, .el-submenu__title:hover {
            /*background-color:#20222a !important;*/
            color: white !important;
          }
          .el-menu-item:hover .el-icon-setting {color: white !important;}
          .el-submenu__title:hover .el-icon-setting {color: white !important;}
        }
       .avue-menu::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .el-header {padding: 0}
    .avue-haeder {
      background: #fafafa;
      width: 100%;
      box-sizing: border-box;
      z-index: 1024;
    }
    .el-main {
      box-sizing: border-box;
      padding: 20px 3px 10px 10px !important;
      background-color: #f2f2f2 !important;
    }
    .avue-main {
      height: 100%;
      background-color: white;
      border-top: 1px solid #ddd;
      box-sizing: border-box;
      box-shadow: 0 4px 8px #ddd inset;
      .avue-mainBox {height: 100%;overflow-x: auto;padding-right: 5px}
      /*Div获取焦点滑块样式*/
      .avue-mainBox:hover::-webkit-scrollbar-thumb {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        background-color: rgba(144,147,153,.5);
      }
      /*Div失去焦点滑块样式*/
      .avue-mainBox:focus::-webkit-scrollbar-thumb {
        background-color:rgba(255,255,255,0.0)
      }
    }
    .uiMenuBox {z-index: 1025;position: absolute;width: 182px;font-family: inherit;background: #fff;
      border: 1px solid #bebebe;border-radius: 5px;-webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
      box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
      .uiMenu {width: 100%;padding: 5px 0;overflow: hidden;box-sizing: border-box;
        li {padding: 0 5px;box-sizing: border-box;height: 25px;line-height: 25px;font-size: 14px;
          i {display: block;float: left;width: 22px;font-size: 15px;font-weight: bold;box-sizing: border-box;padding-top: 1px;
            height: 25px;line-height: 25px;text-align: left} span {display: block;float: left}
        }
        .liStop {color: #bebebe;cursor: default; i {color: #bebebe;}
          &:hover{background-color: rgba(0, 0, 0, .1)}
        }
        .liStopFalse {color: #222;cursor: pointer; i {color: #3ca2e0;}
          &:hover{background-color: #3ca2e0;color: white; i{color: white}}
        }
      }
    }
  }
</style>
