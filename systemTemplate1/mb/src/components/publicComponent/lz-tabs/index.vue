<template>
  <div class="lz-tabs">
    <div class="tab cleafix">
      <div class="tabItem"
           v-for="(item, i) in tablist"
           :class="{tabItemActive:tabNum===i,tabTopBorder:type==='tabTopBorder'}"
           :key="i"
           @click="tabClick(item,i)">{{ item.title }}</div>
      <div class="lastDiv fr"
           v-if="tablist.length">
        <slot name="right" />
      </div>
    </div>
    <div class="tabContent"
         id="tab-content">
      <slot />
    </div>

  </div>
</template>
// @param tablist  数组 tab数据头部
// @param tabClick  tab点击方法
<script>
  import Vue from 'vue'
  import { Component, Emit, Prop } from 'vue-property-decorator'
@Component()
  export default class index extends Vue {
  tabNum = 0
  @Prop({ type: Array, default () { return [] } })
  tablist
  @Prop({ type: String, default: '' })
  type
  @Emit()
  tabClick (item, i) {
    this.tabNum = i
  }
  mounted () {
    let dom = document.getElementById('tab-content').offsetHeight
    console.log('dom', dom)
  }
  }
</script>

<style scoped lang="less">
@import "../../../themes/publicStyle/common";
.lz-tabs {
  .tab {
    background: #f1f1f1;
    .tabItem {
      border: 0;
      margin-right: 8px;
      background-color: #e6e8e9;
      color: #666;
      padding: 0 20px;
      height: 40px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      line-height: 40px;
      display: inline-block;
      list-style: none;
      font-size: 14px;
      font-weight: 500;
      color: #303133;
      position: relative;
      cursor: pointer;
      &:not(.tabItemActive):hover {
        background-color: #d7dddf;
        color: #666;
      }
    }
    .tabTopBorder {
      margin: 0 0 0 8px;
      border-top: 2px solid transparent;
    }
    .tabItemActive {
      background: white;
      color: @dh-color;
      border-color: @dh-color;
    }
  }
  .tabContent {
    padding: 30px 20px 80px;
  }
}
</style>
