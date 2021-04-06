<template>
  <div class="boxPage">
    <div class="head-search">
      <el-date-picker
        v-model="dateVal"
        type="monthrange"
        range-separator="至"
        :clearable="false"
        @change="handleDateChange"
        start-placeholder="开始月份"
        end-placeholder="结束月份"/>
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
  // 月活
  export default class mauLine extends Vue {
    @homeModule.Action('yuehuoLine') yuehuoLine
    dateVal = []
    created () {
      let date = cycleDate('近6个月')
      if (date && date.length) {
        const startTime = this.$moment(date[0]).format('YYYY-MM-DD')
        const endTime = this.$moment(date[1]).format('YYYY-MM-DD')
        this.dateVal = [startTime, endTime]
      }
    }
    mounted () {
      this.getData()
      this.drawChart(this.$refs.kehuLine)
    }
    // 时间值变化时触发
    handleDateChange () {
      this.getData()
    }
    getData () {
      this.yuehuoLine({start_time: this.dateVal[0], end_time: this.dateVal[1]}).then(data => {
        if (data.code === 0) {
          let legendData = []
          let seriesData = []
          for (let key in data.data.list) {
            seriesData.push({
              name: data.data.desc[key],
              type: 'line',
              data: data.data.list[key]
            })
            legendData.push(data.data.desc[key])
          }
          this.drawChart(this.$refs.kehuLine, data.data.name, legendData, seriesData)
        }
      })
    }
    drawChart (el, xdata, legendData, seriesData) {
      let myChart = this.$echarts.getInstanceByDom(el)
      if (!myChart) {
        myChart = this.$echarts.init(el)
      }
      let option = {
        title: {
          text: '月活统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legendData
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
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xdata
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
