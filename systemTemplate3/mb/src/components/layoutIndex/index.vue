<template>
  <el-container class="avue-contail">
    <el-aside :style="{width: isCollapse ? asideWidthCollapse : asideWidth}"
              :class="{avueaside: true, packUp: isCollapse === true && openisCollapse === true, unfold: isCollapse === false && openisCollapse === true}">
      <div class="width100 boxSizing aside">
        <div class="avue-logo" @click="links">
          系统模板
        </div>
        <div class="avue-menuBox">
          <div class="avue-menu">
            <pl-menu :data="menus"/>
            <div class="navbar-footer">
              <pl-menu2 :data="footerMenus"/>
            </div>
          </div>
        </div>
      </div>
    </el-aside>
    <el-container>
      <el-header class="avue-haeder" style="height: 48px;">
        <div class="headerPl width100 boxSizing overflowHidden">
          <page-tabs @openUlMenu="openUlMenu" :open-menu="true"/>
          <hae-der/>
        </div>
      </el-header>
      <el-main class="avue-main">
        <!--拼命加载中-->
        <div class="loadingBox" v-if="loading">
          <div v-loading="loading"
               element-loading-text="拼命加载中"
               class="loadingc"
               v-if="loading"/>
        </div>
        <div class="avue-mainBox card-box boxSizing" ref="avue">
          <div class="viewBox">
            <keep-alive :include="keepAliveData.join(',')">
              <router-view/>
            </keep-alive>
          </div>
        </div>
      </el-main>
    </el-container>
    <!--tab自定义菜单-->
    <custom-menu ref="customMenu"/>
  </el-container>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { State } from 'vuex-class'
  import menuData from '../../../data/menuData'
  import plMenu from '../publicComponent/discreteness/pl-menu'
  import plMenu2 from '../publicComponent/discreteness/pl-menu2'
  import haeDer from '../publicComponent/discreteness/haeDer'
  import pageTabs from '../publicComponent/discreteness/pageTabs'
  import customMenu from '../publicComponent/custom-menu/custom-menu'
  @Component({
    components: { haeDer, pageTabs, plMenu, plMenu2, customMenu }
  })
  export default class layoutIndex extends Vue {
    @State('keepAliveData') keepAliveData
    @State('isCollapse') isCollapse
    @State('openisCollapse') openisCollapse
    @State('url') url
    // [侧边栏宽度] 正常状态
    asideWidth= '170px'
    // [侧边栏宽度] 折叠状态
    asideWidthCollapse= '80px'
    menus = []
    footerMenus = [
      {
        'href': '',
        'title': '应用',
        'icon': 'iconiconfontyingyong',
        submenu: []
      },
      {
        'href': '',
        'title': '系统',
        'icon': 'iconxitong',
        submenu: []
      }
    ]
    created () {
      this.menus = menuData
    }
    get loading () {
      return this.$store.state.loadingCount > 0
    }
    // 弹出自定义菜单
    openUlMenu (ev, index, row) {
      this.$refs.customMenu.openCustomMenu(ev, index, row)
    }
    links () {
      this.$router.push({ path: '/' })
    }
  }
</script>

<style lang="less">
  .avue-contail {
    width: 100%;height: 100%;
    // 菜单展开收起动画
    @keyframes myfirst { from {width: 170px;} to {width: 80px;} }
    @keyframes myfirst2 { from {width: 80px;} to {width: 170px;} }
    // 页面动画
    @keyframes myfirst3 { from {width: 90%;height: 90%;margin-top: 50px;} to {width: 100%;height: 100%;margin-top: 0} }
    // 页面动画样式
    .pageView {
      margin: 0 auto;animation: myfirst3 .3s;
      -moz-animation: myfirst3 .3s;-webkit-animation: myfirst3 .3s;-o-animation: myfirst3 .3s;
    }
    // 菜单收起样式
    .packUp {animation: myfirst .3s;-moz-animation: myfirst .3s;
      -webkit-animation: myfirst .3s;-o-animation: myfirst .3s;
    }
    // 菜单展开样式
    .unfold {animation: myfirst2 .3s;-moz-animation: myfirst2 .3s;
      -webkit-animation: myfirst2 .3s;-o-animation: myfirst2 .3s;
    }
    // 左边
    .avueaside {
      height: 100%;padding: 0 0px 0 0;overflow: visible;
      .aside {-moz-box-shadow:0px 0px 12px @box-shadow-color;-webkit-box-shadow:0px 0px 12px @box-shadow-color;
        box-shadow:0px 0px 12px @box-shadow-color;height: 100%;
      }
      .avue-logo {
        cursor: pointer;
        height: 100px;
        width: 100%;
        line-height: 90px;
        background-color: @avue-logo-bgcolor;
        font-size: @font-size20;
        overflow: hidden;
        color: @color555;
        text-align: center;
        box-sizing: border-box;
        z-index: 1024;
        border-bottom: 2px solid @dh-color;
        img {
          display: inline-block;
          /*width: 100%;*/
          /*height: 100%;*/
        }
        /*border-bottom: 1px solid #111;*/
      }
      .avue-menuBox {
        width: 100%;
        padding-top: 20px;
        background-color: @avue-menu-bgcolor;
        position: relative;
        height: calc(100% - 100px);
        box-sizing: border-box;
        .avue-menu {height: 100%;box-sizing: border-box;padding-bottom: 120px;position: relative;
        .navbar-footer {position: absolute;bottom: 0;height: 120px;left: 0;width: 100%;}
        }
        .avue-menu::-webkit-scrollbar {
          display: none;
        }
      }
    }
    // 顶部
    .avue-haeder {width: 100%;z-index: 1024;padding: 0;padding-left: 15px;
      .headerPl {height: 100%;
        // -moz-box-shadow:-2px 2px 5px @box-shadow-color;
       // -webkit-box-shadow:-2px 2px 5px @box-shadow-color;
       // box-shadow:-2px 2px 5px @box-shadow-color;
      }
    }
    // 下部
    .avue-main {height: 100%; padding: 15px !important;position: relative;
      // 加载器盒子
      .loadingBox {padding:15px 15px 15px 5px !important;height: 100%;position: absolute;
        left: 0;top: 0;width: 100%;z-index: 10000;box-sizing: border-box;
        .loadingc {
          height: 100%;width: 100%;
          .el-loading-spinner {top: 32% !important;}
          .el-loading-mask {background-color: rgba(255, 255, 255, 0.5) !important;}
        }
     }
      // 页面大盒子
      .avue-mainBox {height: 100%;width: 100%;padding: 10px;
        background-color: @avue-main-bgcolor;
        // box-shadow: 0 2px 12px 0 @box-shadow-color;
        // 页面盒子
        .viewBox {height: 100%;box-sizing: border-box;padding: 5px;width: 100%;}
      }
    }
  }
</style>
