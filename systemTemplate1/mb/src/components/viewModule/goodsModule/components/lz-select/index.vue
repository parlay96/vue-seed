<template>
  <div class="lz-select"
       @mouseleave="mouseoutF">
    <div class="select-bigbox"
         :class="{'checked-border':show}">
      <div class="select-header clearfix"
           @click="showClick">
        <div class="fl item-left">
          {{ checkeName }}
        </div>
        <div class="fr item-right">
          <i class="iconfont iconsanjiaoxia" />
        </div>
      </div>
      <transition name="fade">
        <div class="select-content"
             :class="{'checked-border':show,'checked-content':show}"
             v-if="show">
          <div class="select-item"
               v-for="(item,i) in 3"
               :key="i"
               @click="itemClick(item)">
            {{ item }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
@Component()
  export default class index extends Vue {
  show = false
  checkeName = '2131'
  showClick () {
    this.show = true
  }
  mouseoutF () {
    this.show = false
  }
  itemClick (val) {
    this.show = false
    this.checkeName = val
    console.log(val)
  }
  }
</script>

<style lang="less" scoped>
@import "../../../../../themes/publicStyle/common";
.lz-select {
  width: 100%;
  display: inline-block;
  vertical-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 1px #eee;
  }
  // 选中是的border颜色
  .checked-border {
    border-color: @dh-color!important;
  }
  // 选中时的内容
  .checked-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 30px;
    left: -1px;
    z-index: 1;
  }
  // select大盒子
  .select-bigbox {
    border: 1px solid #eee;
    position: relative;
    // 头部
    .select-header {
      height: 31px;
      line-height: 30px;
      vertical-align: middle;

      .item-left {
        padding-left: 12px;
      }
      .item-right {
        background: #f1f1f1;
        .iconfont {
          color: #ddd;
          padding: 0 1px;
        }
        &:hover {
          .iconfont {
            color: #dddddd;
            padding: 0 1px;
          }
        }
      }
    }
    // 下拉部分
    .select-content {
      border: 1px solid #eee;
      height: auto;
      .select-item {
        background: white;
        height: 30px;
        line-height: 30px;
        padding-left: 12px;
        &:hover {
          background: #f1f1f1;
        }
      }
    }
  }
}
</style>
