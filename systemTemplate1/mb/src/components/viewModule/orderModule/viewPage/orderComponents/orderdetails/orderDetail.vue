<template>
  <div class="orderDetail">
    <div class="orderStatus">
      <div class="statusBox">
        订单号：<span class="orderNumber">DH-O-20190328-173645</span>   状态：<span class="orderNumber green">待订单审核</span>
      </div>
      <div class="statusBox box1">
        尊敬的客户，您的订单 正在订单审核，请您耐心等待
      </div>
    </div>
    <div class="mySteep">
      <publicSteep/>
    </div>
    <orderDetailTable/>
    <orderDetailAddMessage/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import publicSteep from '../../orderPublicComponents/publicSteep'
  import orderDetailTable from '../../orderPublicComponents/orderDetailTable'
  import orderDetailAddMessage from '../../orderPublicComponents/orderDetailAddMessage'
  @Component({components: {publicSteep, orderDetailTable, orderDetailAddMessage}})
  export default class orderDetail extends Vue {
  }
</script>

<style lang="less">
  @import "../../../../../../themes/orderModule/orderLess";
  .orderDetail{
    color: #555;
    font-size: 12px;
    .orderStatus{
      border: 1px solid @bg-color;
      margin-bottom: 20px;
      background: rgba(26,179,153,0.2);
      .statusBox{
        border-bottom: 1px solid @bg-color;
        padding: 10px;
        .orderNumber{
          font-weight: 700;
          &.green{
            color: @font-color;
          }
        }
        &.box1{
          border-bottom: none;
        }
      }
    }
    .mySteep{
      width: 80%;
      margin: 10px auto;
    }
  }

</style>
