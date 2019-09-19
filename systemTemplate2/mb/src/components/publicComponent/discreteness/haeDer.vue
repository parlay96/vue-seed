<template>
  <div class="haeDer">
    <div class="titles fl boxSizing width30 beyond">系统模板文字描述</div>
    <div class="width70 fr">
      <ul class="fr menuUl">
        <li v-for="(items, indexs) in dataMenus"
            :key="indexs"
            @click="links(items)">
          <i class="iconfont"
             :class="[items.icon]"
             :style="{ color: items.color }" />{{ items.name }}
          <span class="newsMsg"
                v-if="items.num">{{ items.num }}</span>
          <ul class="submenus"
              v-if="items.submenu">
            <li v-for="(item, index) in items.submenu"
                :key="index"
                @click="links(item)">{{ item.name }}</li>
          </ul>
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
    fankuiDialog = false
    dataMenus = [
      { name: '用户名',
        icon: 'iconkehuguanli',
        num: 20,
        color: '#fa552c',
        submenu: [
          { name: '退出' }
        ]
      },
      { name: '设置',
        icon: 'iconiconset',
        color: '#00b8d2',
        submenu: []
      }
    ]
    links (item) {
      if (!item.submenu) {
        if (item.query) {
          this.$router.push({ path: item.url, query: item.query })
        } else {
          if (item.name === '反馈') {
            this.fankuiDialog = true
          } else if (item.name === '退出') {
            this.$store.commit('REMOVETOKEN')
            this.$router.push({ path: '/login' })
          } else {
            this.$router.push({ path: item.url })
          }
        }
      }
    }
    beforeDestroy () {
      console.log(12334)
    }
  }
</script>

<style lang="less" scoped>
  .haeDer {
    height: 60px;
    line-height: 60px;
    background-color: @haeDerBgColor;
    border-bottom: solid 1px @border-bottom-color;
    .titles {
      padding: 0 20px;
      color: @color555;
      display: inline-block;
      font-weight: 400;
      font-size: @font-size16;
      line-height: 60px;
    }
    .menuUl {
      li {
        float: left;
        padding: 0 16px 0 44px;
        line-height: 60px;
        position: relative;
        cursor: pointer;
        font-size: @font-size14;
        color: @menuUl-li-color;
        .iconfont {
          font-size: @header-iconfont-font-size;
          display: block;
          position: absolute;
          left: 16px;
        }
        .newsMsg {
          height: 15px;
          display: block;
          background-color: @menuNewsMsgBgColor;
          color: @menuNewsMsgColor;
          border-radius: 7px;
          -moz-border-radius: 7px;
          -webkit-border-radius: 7px;
          position: absolute;
          top: 10px;
          left: 26px;
          font-size: @font-size10;
          line-height: 15px;
          text-align: center;
          padding: 0 3px;
          min-width: 10px;
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
  }
</style>
