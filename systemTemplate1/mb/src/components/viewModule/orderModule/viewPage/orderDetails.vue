<template>
  <div class="card-box guide details">
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
  import orderDetail from './orderComponents/orderDetails/orderDetail'
  import lzTabs from '../../../publicComponent/lz-tabs'
  import plsearch from '../../../publicComponent/pl-search/searchIndex'
  import shipmentsRecord from './orderComponents/orderDetails/shipmentsRecord'
  import paymentRecord from './orderComponents/orderDetails/paymentRecord'
@Component({ components: { orderDetail, shipmentsRecord, paymentRecord, lzTabs, plsearch } })
  export default class orderIndex extends Vue {
  editableTabs2 = [
    {
    title: '订单详情',
    name: 'orderDetail'
  }, {
    title: '出库/发货记录',
    name: 'shipmentsRecord'
  }, {
    title: '付款记录',
    name: 'paymentRecord'
  }]
  tabName = 'orderDetail'
  // 组件的切换
  tabClick (obj) {
    this.tabName = obj.name
  }
  }
</script>
<style lang="less" scoped>
  .lz-goodsIndex {
    .lz-tabs .tabContent {
      padding-bottom: 0 !important;
      overflow: hidden;
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
