<template>
  <div class="boxPage">
    <div class="head-search">
      <el-date-picker
        v-model="dateVal"
        type="daterange"
        range-separator="至"
        :clearable="false"
        @change="handleDateChange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"/>
    </div>
    <div class="kehuLine" ref="kehuLine" width="300px"/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import {namespace} from 'vuex-class'
  import cycleDate from '../../../utils/cycleDate'
  const homeModule = namespace('homeModule')
  @Component()
  // 七日留存
  export default class sevenDays extends Vue {
    @homeModule.Action('retentionSeven') retentionSeven
    dateVal = []
    created () {
      let date = cycleDate('近7天')
      if (date && date.length) {
        const startTime = this.$moment(date[0]).format('YYYY-MM-DD')
        const endTime = this.$moment(date[1]).format('YYYY-MM-DD')
        this.dateVal = [startTime, endTime]
      }
    }
    mounted () {
      this.getData()
    }
    // 时间值变化时触发
    handleDateChange () {
      this.getData()
    }
    getData () {
      this.retentionSeven({start_time: this.dateVal[0], end_time: this.dateVal[1]}).then(data => {
        if (data.code === 0) {
          let seriesData = [{type: 'line', data: data.data.list}]
          this.drawChart(this.$refs.kehuLine, data.data.name, seriesData)
        }
      })
    }
    drawChart (el, xdata, seriesData) {
      let myChart = this.$echarts.getInstanceByDom(el)
      if (!myChart) {
        myChart = this.$echarts.init(el)
      }
      let option = {
        color: ['#91cc75'],
        title: {
          text: '七日留存'
        },
        xAxis: {
          type: 'category',
          nameLocation: 'start',
          boundaryGap: false,
          data: xdata
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        yAxis: {
          type: 'value'
        },
        series: seriesData
      }
      myChart.setOption(option)
    }
  }
</script>

<style scoped lang="less">
  .boxPage {
    width: 100%;height: 100%;
    .head-search {
      width: 100%;
    }
    .kehuLine {
      width: 85%;
      height:400px;
      margin: 0 auto;
      margin-top: 50px
    }
  }
</style>
