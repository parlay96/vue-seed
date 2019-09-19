<template>
  <div>
    <el-date-picker
      v-model="value4"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
    @Component()
  export default class datePicker extends Vue {
      value4= [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
  }
</script>

<style scoped>

</style>
