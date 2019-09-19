<template>
  <div class="pl-menu boxSizing">
    <ul class="menuUl">
      <li class="menuli"
          v-for="(item,index) in data"
          :class="{active: item.state && activeFalse}"
          @mousemove="activeFalse = false"
          @mouseout="activeFalse = true"
          :key="index">
        <router-link :to="{ path: item.href}" class="links" :style="{ paddingLeft: isCollapse ? '35px' : '40px' }">
          <!--<i class="iconfont inconisCollapse" :class="[item.icon]" v-if="!isCollapse"/>
          <i class="iconfont" :class="[item.icon]" v-if="isCollapse"/>-->
          <i :class="['iconfont',item.icon, isCollapse?'':'inconisCollapse']"/>
          <transition name="fade">
            <span class="beyond link-text" v-if="!isCollapse" :title="item.title">{{ item.title }}</span>
          </transition>
        </router-link>
        <!--<a class="links">-->
        <!--<i class="iconfont iconorder_icon"/>-->
        <!--<span>{{ item.title }}</span>-->
        <!--</a>-->
        <div class="pl-submenu" :style="{ left: isCollapse ? asideWidthCollapse: asideWidth }">
          <div class="second-menu-wrap">
            <ul class="second-menu-item" v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
              <span class="second-menu-title">{{ subItem.title }}</span>
              <li class="subLinks" v-for="(subIt, ins) in subItem.list" :key="ins">
                <router-link :to="{ path: subIt.href}" :class="{ activeText: url === subIt.href }">
                  <span style="position: relative;">{{ subIt.title }}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop, Watch } from 'vue-property-decorator'
  import { State } from 'vuex-class'
  @Component({
    components: { }
  })
  export default class plMenu extends Vue {
    @State('isCollapse') isCollapse
    @State('url') url
    @Prop() data
    // [侧边栏宽度] 正常状态
    asideWidth= '170px'
    // [侧边栏宽度] 折叠状态
    asideWidthCollapse= '80px'
    activeFalse = true
    @Watch('url')
    urlChange (val) {
      this.data.forEach(item => {
        item.state = false
        item.submenu.forEach(it => {
          it.list.forEach(is => {
            if (is.href === this.url) {
              item.state = true
            }
          })
        })
      })
    }
    created () {
      this.data.forEach(item => {
        item.state = false
        item.submenu.forEach(it => {
          it.list.forEach(is => {
            if (is.href === this.url) {
              item.state = true
            }
          })
        })
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../../themes/publicStyle/common";
  .pl-menu {width: 100%;height: 100%;
    .menuli {position: relative;font-size: 16px;
      .links {display: block;padding: 0 28px;height: 45px;color: #555;position: relative; transition: padding-left .3s;
        line-height: 45px;overflow: hidden;white-space: nowrap;cursor: pointer;
        .inconisCollapse {font-size: 19px;display: inline-block;width: 20px;box-sizing: border-box;}
        .iconfont{
          font-size: 18px;
          margin-right: 10px;
        }
      }
      .pl-submenu {display: none;position: absolute;z-index: 1055;top: 0px;
        -moz-box-shadow:2px 0px 9px #ccc; -webkit-box-shadow:2px 0px 9px #ccc; box-shadow:2px 0px 9px #ccc;
        .second-menu-wrap {
          overflow: hidden;
          display: table;
          padding: 20px 0;
          background-color: #fff;
          white-space: nowrap;
          position: relative;
          z-index: 1055;
          .second-menu-item {
            display: table-cell;
            line-height: 30px;
            height: 100%;
            border-right: 1px solid #eef1f9;
            font-size: 15px;
            .second-menu-title {
              color: #96a6b6;
              padding: 0 40px;
            }
            .subLinks {display: block;
              a {padding: 10px 40px;  color: #415161;  cursor: pointer;}
              a:hover {color: @submenus-hover-color;z-index: 3633;}
            }
          }
          .second-menu-item:last-child {
            border-right: none;
          }
        }
      }
    }
    .menuli:hover {background-color: @dh-color;color: white !important;
      -webkit-transition:background-color .5s linear;
      transition: background-color .5s linear;
      .links {
        color: white !important;
      }
      .pl-submenu {display: block;} }
    .noActive {
      color: red;
    }
    .active {
      background-color: @dh-color !important;color: white !important;
      -webkit-transition:background-color .5s linear;
      transition: background-color .5s linear;
      .links {
        color: white !important;
      }
    }
    .activeText {
      color: @submenus-hover-color !important;
    }
  }
</style>
