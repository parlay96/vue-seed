<template>
  <div class="card-box homeIndex" ref="cardBox">
    <div>系统模板
      <el-divider>1223131</el-divider>
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
