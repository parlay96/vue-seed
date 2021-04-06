<template>
  <div class="card-box homeIndex" ref="cardBox">
    <div>鱼泡运营系统
      <el-calendar v-model="value"/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  @Component()
  export default class homeIndex extends Vue {
    value = new Date()
  }
</script>

<style lang="less" scoped>
  .homeIndex {
  }
</style>
