import moment from 'moment'
export default (val) => {
  var satrtTime = ''
  var endTime = ''
  if (val === '今日') {
    satrtTime = moment()
    endTime = moment()
  } else if (val === '昨日') {
    satrtTime = moment().subtract(1, 'day')
    endTime = moment().subtract(1, 'day')
  } else if (val === '本周') {
    let date1 = new Date()
    let weeks = date1.getDay()
    switch (weeks) {
    case 1:
      satrtTime = moment()
      break
    case 2:
      satrtTime = moment().subtract(1, 'day')
      break
    case 3:
      satrtTime = moment().subtract(2, 'day')
      break
    case 4:
      satrtTime = moment().subtract(3, 'day')
      break
    case 5:
      satrtTime = moment().subtract(4, 'day')
      break
    case 6:
      satrtTime = moment().subtract(5, 'day')
      break
    case 0:
      satrtTime = moment().subtract(6, 'day')
      break
    }
    endTime = moment()
  } else if (val === '上周') {
    let date1 = new Date()
    let weeks = date1.getDay()
    switch (weeks) {
    case 1:
      endTime = moment().subtract(1, 'day') // 上周的星期天的日期
      break
    case 2:
      endTime = moment().subtract(2, 'day') // 上周的星期天的日期
      break
    case 3:
      endTime = moment().subtract(3, 'day') // 上周的星期天的日期
      break
    case 4:
      endTime = moment().subtract(4, 'day') // 上周的星期天的日期
      break
    case 5:
      endTime = moment().subtract(5, 'day') // 上周的星期天的日期
      break
    case 6:
      endTime = moment().subtract(6, 'day') // 上周的星期天的日期
      break
    case 0:
      endTime = moment().subtract(7, 'day') // 上周的星期天的日期
      break
    }
    satrtTime = moment(endTime).subtract(6, 'day') // 上周星期一的日期
  } else if (val === '本月') {
    satrtTime = moment().format('YYYY-MM') + '-01'
    endTime = moment().format('YYYY-MM-DD')
  } else if (val === '上月') {
    let lastMonths = moment().subtract(1, 'months')
    satrtTime = moment(lastMonths).format('YYYY-MM') + '-01'
    let toDay = parseFloat(moment(lastMonths).format('D'))
    let yuemo = moment().subtract(toDay, 'day')
    endTime = moment(yuemo).format('YYYY-MM-DD')
  } else if (val === '近7天') {
    satrtTime = moment().subtract(6, 'day')
    endTime = moment()
  } else if (val === '去年') {
    satrtTime = (parseInt(moment().format('YYYY')) - 1) + '-01-01'
    let s = moment().format('YYYY') + '-01-01' // 今年年初日期
    let y = moment(s).subtract(1, 'day') // 去年的年末日期
    endTime = moment(y).format('YYYY-MM-DD')
  } else if (val === '本年') {
    satrtTime = moment().format('YYYY') + '-01-01' // 今年年初日期
    endTime = moment().format('YYYY-MM-DD')
  }
  if (val.indexOf('月') !== 1 || val === '近7天') {
    return [moment(satrtTime).format('YYYY-MM-DD'), moment(endTime).format('YYYY-MM-DD')]
  } else if (satrtTime && endTime) {
    return [satrtTime, endTime]
  }
}
