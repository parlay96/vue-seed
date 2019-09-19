<template>
  <div class="shipmentsRecord">
    <div class="recordDesc">
      <div class="statusBox">
        订单号：<span class="orderNumber">DH-O-20190328-173645</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  // import orderTable from '../../orderPublicComponents/orderSheetTable'
  @Component()
  export default class shipmentsRecord extends Vue {
  }
</script>

<style scoped lang="less">
  @import "../../../../../../themes/orderModule/orderLess";
.shipmentsRecord{
  .recordDesc{
    color: #555;
    border: 1px solid @bg-color;
    margin-bottom: 20px;
    background: rgba(26,179,153,0.2);
    padding: 10px;
    .orderNumber{
      font-weight: 700;
      &.green{
        color: @font-color;
      }
    }
  }
}
</style>
