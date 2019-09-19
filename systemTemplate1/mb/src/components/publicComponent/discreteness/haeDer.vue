<template>
  <div class="haeDer">
    <div class="titles fl boxSizing i width30 beyond">生鲜、农贸产品@dinghuo123<span style="margin-left: 7px;">订货系统</span></div>
    <div class="width70 fr">
      <ul class="fr menuUl">
        <li class="supplier"><a>供货方体验</a></li>
        <li v-for="(items, indexs) in dataMenus" :key="indexs">
          <i class="iconfont" :class="[items.icon]" :style="{ color: items.color }"/>{{ items.name }}
          <ul class="submenus" v-if="items.submenu">
            <li v-for="(item, index) in items.submenu" :key="index">{{ item.name }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  @Component()
  export default class haeDer extends Vue {
    dataMenus = [
      {name: '购物车', icon: 'icon03f', color: '#1ab399'},
      { name: '消息',
        icon: 'icontubiao313',
        color: '#1ab399',
        submenu: [
          {name: '哈哈哈'}, {name: '哈哈哈'}, {name: '哈哈哈'}, {name: '哈哈哈'}
        ]
      },
      {name: '彭垒',
        icon: 'iconkehuguanli',
        color: '#fa552c',
        submenu: [
          {name: '哈哈哈'}, {name: '哈哈哈'}, {name: '哈哈哈'}, {name: '哈哈哈'}
        ]
      },
      { name: '设置',
        icon: 'iconiconset',
        color: '#00b8d2',
        submenu: [
          {name: '哈哈哈'}, {name: '哈哈哈'}, {name: '哈哈哈'}, {name: '哈哈哈'}
        ]
      },
      {name: '反馈', icon: 'iconkefu', color: '#00a7e4'}
    ]
  }
</script>

<style lang="less" scoped>
  .haeDer {height: 60px;box-sizing: border-box;
    line-height: 60px;background-color: white; border-bottom: solid 1px rgba(0,0,0,.05);
   .titles {
     padding: 0 10px;
     color: #555;
     display: inline-block;
     font-weight: 400;
     font-size: 16px;
     line-height: 60px;
   }
    .menuUl {
      li {float: left;padding: 0 16px 0 44px;
        line-height: 60px;position: relative;cursor: pointer;color: #787878;
        .iconfont {font-size: 1.7rem;display: block;position: absolute;left: 16px;}
      }
      .submenus {position: absolute;top: 60px;left: 0;z-index: 1010;
        display: none;width: 125px;background-color: white;
        -moz-box-shadow:2px 0px 9px #ccc; -webkit-box-shadow:2px 0px 9px #ccc; box-shadow:2px 0px 9px #ccc;
        li {box-sizing: border-box;height: 37px;line-height: 37px;padding-left: 20px;color: #555;width: 100%;}
      }
      li:hover {background-color: #e8e8e8; .submenus {display: block !important;} }
      .supplier {margin: 20px 18px 20px 5px;border-radius: 2px;
        background-color: #f9633e!important;padding: 0 7px;height: 20px;line-height: 20px;cursor: default;
        a{color: white;} }
    }
  }
</style>
