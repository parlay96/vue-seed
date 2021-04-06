import moment from 'moment'

export default (val) => {
  let startTime = moment()
  let endTime = moment()
  if (val === '今日') {
    startTime = moment().startOf('day')
    endTime = moment().endOf('day')
  } else if (val === '昨日') {
    startTime = moment().subtract(1, 'day').startOf('day')
    endTime = moment().subtract(1, 'day').endOf('day')
  } else if (val === '本周') {
    startTime = moment().startOf('isoWeek')
    endTime = moment().endOf('day')
  } else if (val === '上周') {
    startTime = moment().subtract('1', 'week').startOf('isoWeek')
    endTime = moment().subtract('1', 'week').endOf('isoWeek')
  } else if (val === '本月') {
    startTime = moment().startOf('month')
    endTime = moment().endOf('day')
  } else if (val === '上月') {
    startTime = moment().subtract('1', 'month').startOf('month')
    endTime = moment().subtract('1', 'month').endOf('month')
  } else if (val === '近7天') {
    startTime = moment().subtract(7, 'day').startOf('day')
    endTime = moment().endOf('day')
  } else if (val === '近90天') {
    startTime = moment().subtract(90, 'day').startOf('day')
    endTime = moment().endOf('day')
  } else if (val === '去年') {
    startTime = moment().subtract(1, 'year').startOf('year')
    endTime = moment().subtract(1, 'year').endOf('year')
  } else if (val === '本年') {
    startTime = moment().startOf('year') // 今年年初日期
    endTime = moment().endOf('day')
  } else if (val === '最近30天' || val === '近30天') {
    startTime = moment().subtract(30, 'day').startOf('day')
    endTime = moment().endOf('day').endOf('day')
  } else if (val === '近3个月') {
    startTime = moment().subtract('3', 'month').startOf('month')
    endTime = moment().endOf('day').endOf('day')
  } else if (val === '近6个月') {
    startTime = moment().subtract('6', 'month').startOf('month')
    endTime = moment().endOf('day').endOf('day')
  } else if (val === '近14天') {
    startTime = moment().subtract(14, 'day').startOf('day')
    endTime = moment().endOf('day').endOf('day')
  }
  startTime = startTime.toDate()
  endTime = endTime.toDate()
  return [startTime, endTime]
}
