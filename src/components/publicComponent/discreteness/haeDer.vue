<template>
  <div class="haeDer fr">
    <div class="width100">
      <ul class="menuUl overflowHidden">
        <li v-for="(items, indexs) in dataMenus" :key="indexs" @click="links(items)">
          <i class="iconfont"
             :class="[items.icon]"
             :style="{ color: items.color }"
             v-if="!items.submenu || items.submenu.length === 0"/>
          <el-dropdown @visible-change="visibleChange" v-else @command="commands">
            <div class="tdOperation">
              <i class="iconfont" :class="[items.icon]" :style="{ color: items.color }" />
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="(item, index) in items.submenu"
                                :command="item.name"
                                :key="index">{{ item.name }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component()
  export default class haeDer extends Vue {
    dataMenus = [
      { icon: 'iconkehu-xiangao-', submenu: [{ name: '退出' }] }
      // { icon: 'iconxiaoxi-',
      //   submenu: [
      //     { name: '退出退出' },
      //     { name: '退出' },
      //     { name: '退出' }
      //   ]
      // },
      // { icon: 'iconkefu-',
      //   submenu: [
      //     { name: '退出' },
      //     { name: '退出是' },
      //     { name: '退出' }
      //   ]
      // }
    ]

    visibleChange (e) {
      let dom = null
      dom = document.querySelector('body')
      if (e) {
        dom.classList.add('sm-haeDer')
      } else {
        dom.classList.remove('sm-haeDer')
      }
    }

    commands (e) {
      if (e === '退出') {
        this.$store.commit('REMOVETOKEN')
        this.$router.push({ path: '/login' })
      }
    }
    links (item) {
      if (!item.submenu) {
        if (item.query) {
          this.$router.push({ path: item.url, query: item.query })
        } else {
          // console.log(item)
          // if (item.name === '反馈') {
          //   this.fankuiDialog = true
          // } else if (item.name === '退出') {
          //   this.$store.commit('REMOVETOKEN')
          //   this.$router.push({ path: '/login' })
          // } else {
          //   this.$router.push({ path: item.url })
          // }
        }
      }
    }
  }
</script>

<style lang="less">
  .haeDer {
    height: 48px;
    line-height: 48px;
    width: 190px;
    padding-right: 15px;
    box-sizing: border-box;
    background-color: @haeDerBgColor;
    .menuUl {
      li {
        float: right;
        height: 48px;
        width: 44px;
        line-height: 58px;
        text-align: center;
        position: relative;
        cursor: pointer;
        font-size: @font-size14;
        color: @menuUl-li-color;
        .iconfont {
          font-size: @header-iconfont-font-size;
          color: rgba(0, 0, 0, .65);
        }
      }
      .submenus {
        position: absolute;
        top: 60px;
        right: 0;
        z-index: 1010;
        display: none;
        min-width: 125px;
        background-color: @submenusBgColor;
        -moz-box-shadow: 2px 0px 9px @menu-box-shadow;
        -webkit-box-shadow: 2px 0px 9px @menu-box-shadow;
        box-shadow: 2px 0px 9px @menu-box-shadow;
        li {
          height: 37px;
          line-height: 37px;
          padding-left: 20px;
          color: @color555;
          width: 100%;
        }
        li:hover {
          color: @submenus-hover-color;
        }
      }
      li:hover {
        background-color: @menuUl-hover-bgcolor;
        .submenus {
          display: block !important;
        }
      }
    }
    .el-dropdown {
      display: block !important;
      height: 48px !important;
    }
  }
  // 修改下拉菜单样式
  .sm-haeDer {
    .el-dropdown-menu {
      padding: 5px 0 !important;
    }
    .el-dropdown-menu__item {
      line-height: 34px !important;
      text-align: center;
    }
    .el-dropdown-menu__item:not(.is-disabled):hover, .el-dropdown-menu__item:focus {
      background-color: @dh-bottom-color;
      color: rgba(0, 0, 0, .65);
      font-size: 14px;
    }
  }
</style>
