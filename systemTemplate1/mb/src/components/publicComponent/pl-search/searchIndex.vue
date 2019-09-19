<template>
  <div class="searchIndex">
    <div class="ui-combo-wrap fl">
      <input type="text"
             class="input-txt fl"
             v-model="typeVal"
             autocomplete="off"
             readonly="readonly"
             style="cursor: default; width: 58px;">
      <i class="iconfont iconsanjiaoxia fl"/>
      <div class="opensPopup">
        <ul>
          <li v-for="(item, index) in data"
              :key="index"
              :class="{active: typeVal === item}"
              @click="selectChange(item)">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="inputSearch fl">
      <input type="text"
             class="ui-input"
             v-model="searchVal"
             placeholder="请输入订货单号"
             autocomplete="off">
      <i class="iconfont iconsousuo" @click="searchChange"/>
    </div>
    <a class="fr linksGj" @click="advancedSearch">高级搜索</a>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  @Component()
  export default class searchIndex extends Vue {
    @Prop({ type: Array, default: () => ['搜订货单', '搜退货单', '搜商品'] }) data
    typeVal = '搜订货单'
    searchVal = ''
    selectChange (item) {
     this.typeVal = item
    }
    advancedSearch () {
      this.$emit('advancedSearch')
    }
    searchChange () {
      let obj = { type: this.typeVal, value: this.searchVal }
      this.$emit('searchChange', obj)
    }
  }
</script>

<style scoped lang="less">
  @import "../../../themes/publicStyle/common";
  .searchIndex {width: 390px;height: 32px;
    .ui-combo-wrap {
      position: relative;
      height: 30px;
      width: 98px;
      z-index: 10;
      background-color: #fff;
      border: 1px solid #d6dee3;
      color: #555;
      .iconfont {
        width: 16px;
        color: #777;
        height: 28px;
        line-height: 30px;
        font-size: 1.1rem;
      }
      .input-txt {
        padding: 5px 12px;
        height: 20px;
        line-height: 20px;
        color: #555;
        border: 0;
        font-size: 14px;
      }
      &:hover {
        border: 1px solid #a8b3b9;
      }
    }
    .inputSearch {
      width: 254px;
      position: relative;
      .ui-input {
        margin-left: -1px;
        width: 228px;
        z-index: 1;
        padding: 5px 12px;
        height: 20px;
        vertical-align: middle;
        line-height: 20px;
        border: 1px solid #d6dee3;
        color: #555;
        font-family: verdana,'宋体','Microsoft Yahei',Tahoma,Arial;
        font-size: 14px;
        outline: 0;
        &:hover {
          border: 1px solid #a8b3b9;
        }
        &:focus {
          border: 1px solid @dh-color;
        }
      }
      .iconfont {
        position: absolute;
        right: 8px;
        top: 5px;
        font-size: 1.67rem;
        color: #ccc;
        cursor: pointer;
      }
      .iconfont:hover {
        color: @dh-color;
      }
    }
    .linksGj {
      width: 25px;
      height: 30px;
      line-height: 15px;
      display: block;
      margin-top: 1px;
      color: #555;
    }
    .ui-combo-wrap:hover {
      border: 1px solid @dh-color !important;
      .opensPopup {
        display: block !important;
      }
    }
    .opensPopup {
      display: none;
      width: 98px;
      background: #fff;
      border: 1px solid @dh-color;
      border-top: none !important;
      z-index: 111111111111;
      max-height: 230px;
      overflow: auto;
      position: absolute;
      top: 31px;
      left: -1px;
      ul {
        li {
          padding: 2px 10px;
          line-height: 26px;
          font-size: 14px;
          cursor: default;
          overflow: hidden;
          color: #555;
          background: #FFF;
        }
        li:hover {
          background-color: #f2f2f2 !important;
        }
      }
    }
    .active {
      color: @dh-color !important;
    }
  }
</style>
