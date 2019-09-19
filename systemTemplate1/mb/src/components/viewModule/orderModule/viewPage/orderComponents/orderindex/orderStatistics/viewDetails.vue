<template>
  <div class="orderStatistics">
    <div class="select">
      <orderSheetSelect :down-order-show="downOrderShow" :button-show="buttonShow"/>
      <div><span>2019-02-02</span> 至 <span>2019-03-28</span></div>
    </div>
    <div class="order-sum clearfix">
      <div class="order-sum-1">
        订货单 <span class="order-sum-money">￥<span class="order-sum-money-detail">0</span></span><span class="small">0笔</span>
      </div>
      <div class="order-sum-2">
        退货单 <span class="order-sum-money">￥ <span class="order-sum-money-detail">0</span></span><span class="small">0笔</span>
      </div>
    </div>
    <viewDetailsTable/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import orderSheetSelect from '../../../orderPublicComponents/orderSheetSelect'
  import viewDetailsTable from '../../../orderPublicComponents/viewDetailsTable'
  @Component({components: {orderSheetSelect, viewDetailsTable}})
  export default class orderStatistics extends Vue {
    buttonShow = false
    downOrderShow = false
  }
</script>

<style scoped lang="less">
  @import "../../../../../../../themes/orderModule/orderLess";
  .orderStatistics{
    height: 100%;
    overflow: scroll;
    color: #555;
    .select{
      font-weight: bold;
      font-size: 12px;
      display: flex;
      align-items: center;
      span{
        color: @bg-color;
      }
    }
    .order-sum {
      height: 46px;
      line-height: 46px;
      border: 1px solid #f0f0f0;
      border-top: 3px solid @bg-color;
      overflow: hidden;
      .order-sum-1, .order-sum-2 {
        width: 45%;
        padding-left: 5%;
        float: left;
        border-left: 1px solid #f0f0f0;
        margin-left: -1px;
        .order-sum-money {
          font-weight: 900;
          margin: 0 5px;
          .order-sum-money-detail {
            font-size: 18px;
            font-weight: 900;
          }
          .small{
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
