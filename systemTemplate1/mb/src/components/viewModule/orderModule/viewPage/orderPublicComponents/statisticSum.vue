<template>
  <div class="sum-statistics">
    <div class="sum-item">
      <dl>
        <dt>
          发货单数
        </dt>
        <dd><span>{{ list.orderNumber }}</span></dd>
      </dl>
    </div>
    <div class="sum-item">
      <dl>
        <dt>
          发货商品数
        </dt>
        <dd><span>{{ list.goodsNumber }}</span></dd>
      </dl>
    </div>
    <div class="sum-item">
      <dl>
        <dt>
          发货金额
        </dt>
        <dd>￥<span>{{ list.priceNumber }}</span></dd>
      </dl>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
    @Component()
  export default class statisticSum extends Vue {
    @Prop({default: {
        orderNumber: 0,
        goodsNumber: 0,
        priceNumber: 100
      }})
     list
  }
</script>

<style scoped lang="less">
  .sum-statistics {
    color: #555;
    margin-top: 10px;
    border: 1px solid #f0f0f0;
    border-top: 3px solid #7fbbc5;
    height: 75px;
    .sum-item {
      float: left;
      margin-left: -1px;
      width: 33.3%;
      border-left: 1px solid #f0f0f0;
      height: 75px;
      dl {
        width: 50%;
        margin: 0 auto;
        padding-top: 15px;
        text-align: center;
        dt {
          line-height: 20px;
        }
        dd {
          line-height: 30px;
          span {
            font-size: 18px;
            font-weight: 700;
          }
        }
      }
    }
  }
</style>
