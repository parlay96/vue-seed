<template>
  <div class="orderStatistics">
    <orderStatisticSelect/>
    <orderStatisticTable/>
    <p class="contentDesc"> 统计说明：1.订货单通过财务审核后才计入统计  2.退货单通过收货确认后才计入统计  3.作废的订/退货单不计入统计</p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import orderStatisticSelect from '../../../orderPublicComponents/orderStatisticSelect'
  import orderStatisticTable from '../../../orderPublicComponents/orderStatisticTable'
  @Component({components: {orderStatisticSelect, orderStatisticTable}})
  export default class orderStatistics extends Vue {
  }
</script>
viewDetails
<style scoped lang="less">
  .orderStatistics{
    color: #555;
    .contentDesc{
      font-size: 14px;
    }
  }
</style>
