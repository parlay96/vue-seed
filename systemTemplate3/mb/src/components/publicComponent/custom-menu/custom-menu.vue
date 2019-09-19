<template>
  <div class="uiMenuBox"
       ref="uiMenu"
       style="display: none;top: 0;left: 0"
       @click.stop="uiMenuStop = true">
    <ul class="uiMenu">
      <!--关闭标签-->
      <li @click="uiMenuClick('关闭标签')" v-if="uimenurow.value !== '/wel/index'" class="liStopFalse">
        <i class="el-icon-close"/><span>关闭标签</span>
      </li>
      <li v-else class="liStop"><i class="el-icon-close"/><span>关闭标签</span></li>
      <!--其他标签-->
      <li @click="uiMenuClick('关闭其他标签')"
          v-if="tagList.length >= 3 && uimenurow.value === tag.value"
          class="liStopFalse">
        <i/><span>关闭其他标签</span>
      </li>
      <li v-else class="liStop"><i/><span>关闭其他标签</span></li>
      <!--刷新-->
      <!--<li @click="uiMenuClick('刷新')" v-if="tag.value === uimenurow.value" class="liStopFalse">-->
      <!--<i class="el-icon-refresh"/><span>刷新</span>-->
      <!--</li>-->
      <!--<li v-else class="liStop"><i class="el-icon-refresh"/><span>刷新</span></li>-->
      <div style="border: 0.5px solid #e6e6e6; margin: 5px 0"/>
      <!--左侧-->
      <li v-if="uimenurow.value === '/wel/index' || tabIndex === 1" class="liStop">
        <i/><span>关闭左侧标签</span>
      </li>
      <li @click="uiMenuClick('关闭左侧标签')" v-else class="liStopFalse"><i/><span>关闭左侧标签</span></li>
      <!--右侧-->
      <li @click="uiMenuClick('关闭右侧标签')"
          v-if="tagList.length >= 2 && tabIndex !== tagList.length - 1"
          class="liStopFalse">
        <i/><span>关闭右侧标签</span>
      </li>
      <li v-else class="liStop"><i/><span>关闭右侧标签</span></li>
      <!--全部-->
      <li @click="uiMenuClick('关闭全部标签')" v-if="tagList.length > 2" class="liStopFalse">
        <i class="el-icon-error"/><span>关闭全部标签</span>
      </li>
      <li v-else class="liStop"><i class="el-icon-error"/><span>关闭全部标签</span></li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { State } from 'vuex-class'
  @Component()
  // tab自定义菜单
  export default class customMenu extends Vue {
    @State('tagList') tagList
    @State('tag') tag
    uiMenuStop = true
    uimenurow = '' // 当前uimenu菜单的信息
    tabIndex = '' // 当前tab索引
    mounted () {
      this.globalClick(this.moreSetupMenuRemove)
      this.$refs.uiMenu.oncontextmenu = function (ev) {
        return false
      }
    }
    // 关闭自定义菜单
    moreSetupMenuRemove () {
      this.$refs.uiMenu.style.display = 'none'
    }
    // 自定义菜单列表点击事件
    uiMenuClick (val) {
      // 关闭标签（关闭当前页面的标签）
      if (val === '关闭标签' && this.tagList[this.tabIndex].value === this.tag.value) {
        // 关闭当前页面的标签  先去获取当前页面标签的右边是否存在标签，再去获取左边
        let nextTab = this.tagList[this.tabIndex + 1] || this.tagList[this.tabIndex - 1]
        // 跳转页面
        this.openUrl(nextTab)
        // 关闭标签
        this.$store.commit('DEL_TAG', this.tagList[this.tabIndex].value)
      } else if (val === '关闭标签') {
        this.$store.commit('DEL_TAG', this.tagList[this.tabIndex].value)
      }

      // 是否关闭其他标签
      if (val === '关闭其他标签') {
        // 找出不是当前标签和首页标签
        let oldTab = JSON.parse(JSON.stringify(this.tagList))
        let data = oldTab.filter(item => item.value !== this.tag.value && item.value !== '/wel/index')
        data.forEach(item => {
          this.$store.commit('DEL_TAG', item.value)
        })
      }

      // 判断是否关闭左侧标签(并且左侧标签为当前页面)
      if (val === '关闭左侧标签' && this.tagList[this.tabIndex - 1].value === this.tag.value) {
        this.openUrl(this.uimenurow)
        this.$store.commit('DEL_TAG', this.tagList[this.tabIndex - 1].value)
      } else if (val === '关闭左侧标签' && this.tagList[this.tabIndex - 1]) {
        this.$store.commit('DEL_TAG', this.tagList[this.tabIndex - 1].value)
      }

      // 判断是否关闭右侧标签（并且右侧标签为当前页面）
      if (val === '关闭右侧标签' && this.tagList[this.tabIndex + 1].value === this.tag.value) {
        this.openUrl(this.uimenurow)
        this.$store.commit('DEL_TAG', this.tagList[this.tabIndex + 1].value)
      } else if (val === '关闭右侧标签' && this.tagList[this.tabIndex + 1]) {
        this.$store.commit('DEL_TAG', this.tagList[this.tabIndex + 1].value)
      }

      // 是否关闭全部标签
      if (val === '关闭全部标签') {
        // 找出不是首页标签
        let oldTab = JSON.parse(JSON.stringify(this.tagList))
        let datas = oldTab.filter(item => item.value !== '/wel/index')
        datas.forEach(item => {
          this.$store.commit('DEL_TAG', item.value)
        })
        this.openUrl({ value: '/wel/index' })
      }

      // 关闭菜单弹框
      this.moreSetupMenuRemove()
    }
    openUrl (item) {
      if (item.query) {
        this.$router.push({path: item.value, query: item.query})
      } else {
        this.$router.push({path: item.value})
      }
    }
    // 弹出自定义菜单
    openCustomMenu (ev, index, row) {
      this.uimenurow = row
      this.tabIndex = index
      let oeVent = ev || event
      this.$refs.uiMenu.style.display = 'block'
      // 设置自定义菜单的坐标，达到鼠标右键的地方弹出自定义菜单
      this.$refs.uiMenu.style.left = oeVent.clientX + 'px'
      this.$refs.uiMenu.style.top = oeVent.clientY + 'px'
    }
  }
</script>

<style scoped lang="less">
  .uiMenuBox {z-index: 1025;position: absolute;width: 182px;font-family: inherit;background: #fff;
    border: 1px solid #bebebe;border-radius: 5px;-webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
    box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
    .uiMenu {width: 100%;padding: 5px 0;overflow: hidden;box-sizing: border-box;
      li {padding: 0 5px;box-sizing: border-box;height: 25px;line-height: 25px;font-size: 14px;
        -moz-user-select: none;-khtml-user-select: none;user-select: none;
        i {display: block;float: left;width: 22px;font-size: 15px;font-weight: bold;box-sizing: border-box;padding-top: 1px;
          height: 25px;line-height: 25px;text-align: left} span {display: block;float: left}
      }
      .liStop {color: #bebebe;cursor: default; i {color: #bebebe;}
        &:hover{background-color: rgba(0, 0, 0, .1)}
      }
      .liStopFalse {color: #222;cursor: pointer; i {color: @dh-color;}
        &:hover{background-color: @dh-color;color: white; i{color: white}}
      }
    }
  }
</style>
