<template>
  <div class="card-box guide addOrder">
    <myHeader :body-type="$route.query.type"/>
    <myBody :body-type="$route.query.type"/>
    <myFooter :body-type="$route.query.type"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import myHeader from './orderComponents/addOrder/addOrderHeader'
  import myBody from './orderComponents/addOrder/addOrderBody'
  import myFooter from './orderComponents/addOrder/addOrderFooter'
@Component({components: { myHeader, myBody, myFooter }})
  export default class addOrder extends Vue {
  }
</script>

<style lang="less" scoped>
  .addOrder{
    padding: 20px 20px 20px;
  }
</style>
