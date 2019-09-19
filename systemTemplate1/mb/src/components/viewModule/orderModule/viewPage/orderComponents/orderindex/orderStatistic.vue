<template>
  <div class="orderStatistics">
    <div v-if="tabType === 1">
      <orderStatisticDefult/>
    </div>
    <div v-else>
      <viewDetails/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { namespace } from 'vuex-class'
  import { Component } from 'vue-property-decorator'
  import orderStatisticDefult from './orderStatistics/orderStatisticDefult'
  import viewDetails from './orderStatistics/viewDetails'
  const orderModule = namespace('orderModule')
  @Component({components: {orderStatisticDefult, viewDetails}})
  export default class orderStatistics extends Vue {
    @orderModule.State('tabType') tabType
  }
</script>
<style scoped lang="less">
  .orderStatistics{
    color: #555;
    .contentDesc{
      font-size: 14px;
    }
  }
</style>
