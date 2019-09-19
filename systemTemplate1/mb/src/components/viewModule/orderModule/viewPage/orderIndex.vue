<template>
  <div class="card-box guide">
    <lzTabs @tab-click="tabClick"
            :tablist="editableTabs2">
      <template slot="right">
        <div>
          <plsearch />
        </div>
      </template>
      <div class="lz-scroll">
        <component :is="tabName" />
      </div>
    </lzTabs>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'
  import lzTabs from '../../../publicComponent/lz-tabs'
  import plsearch from '../../../publicComponent/pl-search/searchIndex'
  import orderSheet from './orderComponents/orderindex/orderSheet'
  import returnOrderSheet from './orderComponents/orderindex/returnOrderSheet'
  import orderStatistic from './orderComponents/orderindex/orderStatistic'
  import shipmentRecord from './orderComponents/orderindex/shipmentRecord'
  const orderModule = namespace('orderModule')
@Component({ components: { lzTabs, orderSheet, returnOrderSheet, orderStatistic, shipmentRecord, plsearch } })
  export default class orderIndex extends Vue {
    @orderModule.Mutation('changeTabName') changeTabName
  editableTabs2 = [
    {
    title: '订货单',
    name: 'orderSheet'
  }, {
    title: '退货单',
    name: 'returnOrderSheet'
  }, {
    title: '订单统计',
    name: 'orderStatistic'
  }, {
    title: '发货统计',
    name: 'shipmentRecord'
  }]
  tabName = 'orderSheet'
  // 组件的切换
  tabClick (obj) {
    this.tabName = obj.name
    this.changeTabName({name: 'orderStatisticDefult', type: 1})
  }
  }
</script>

<style lang="less" scoped>
  .lz-goodsIndex {
    .lz-tabs .tabContent {
      padding-bottom: 0 !important;
    }
  }
  .lz-scroll {
    height: calc(100% - 40px);
    overflow: scroll;
    &:hover::-webkit-scrollbar-thumb {
      -webkit-border-radius: 5px;
      border-radius: 5px;
      background-color: rgba(144, 147, 153, 0.5);
    }
    /*Div失去焦点滑块样式*/
    &:focus::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0);
    }
  }
</style>
<style lang="less">
  .lz-goodsIndex {
    .lz-tabs .tabContent {
      padding-bottom: 20px !important;
    }
  }
</style>
