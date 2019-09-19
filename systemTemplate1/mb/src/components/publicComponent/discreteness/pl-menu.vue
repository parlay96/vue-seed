<template>
  <div class="pl-menu boxSizing">
    <ul class="menuUl">
      <li class="menuli"
          v-for="(item,index) in data"
          :class="{active: url === item.href}"
          :key="index">
        <router-link :to="{ path: item.href}" class="links">
          <div>
            <p><i class="iconfont" :class="[item.icon]"/></p>
            <p><span>{{ item.title }}</span></p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import { State } from 'vuex-class'
  @Component({
    components: { }
  })
  export default class plMenu extends Vue {
    @State('url') url
    @Prop() data
  }
</script>

<style scoped lang="less">
  .pl-menu {width: 100%;
    .menuli {position: relative;font-size: 16px; height: 85px;
      .links {display: block;height: 85px;color: white;
        overflow: hidden;cursor: pointer;text-align: center;padding-top: 16px;
        .iconfont {vertical-align: middle;font-size: 29px;}
      }
    }
    .menuli:hover {background-color: rgba(0, 0, 0, 0.1);color: white;
      .pl-submenu {display: block;} }
    .active {
      background-color: rgba(0, 0, 0, 0.1);color: white;
    }
  }
</style>
