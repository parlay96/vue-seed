<template>
  <div class="paymentRecord">
    <div class="recordStatus">
      <div class="statusBox">
        订单号：<span class="orderNumber">DH-O-20190328-173645</span>
      </div>
      <div class="statusBox">
        订单金额：<span class="orderNumber">￥198.00</span> <span style="margin-left: 20px">待确认付款：</span><span class="orderNumber">￥198.00</span>
      </div>
    </div>
    <paymentRecordTable/>
    <returnPaymentTable/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import paymentRecordTable from '../../orderPublicComponents/paymentRecordTable'
  import returnPaymentTable from '../../orderPublicComponents/returnPaymentTable'
  @Component({components: {paymentRecordTable, returnPaymentTable}})
  export default class paymentRecord extends Vue {
  }
</script>

<style scoped lang="less">
  @import "../../../../../../themes/orderModule/orderLess";
  .paymentRecord{
    color: #555;
    .recordStatus{
      border: 1px solid @bg-color;
      margin-bottom: 20px;
      background: rgba(26,179,153,0.2);
      padding: 20px;
      .statusBox{
        margin-bottom: 10px;
      }
      .orderNumber{
        font-weight: 700;
        &.green{
          color: @font-color;
        }
      }
    }
  }
</style>
