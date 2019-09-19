/**
 * @param {Function} fn 延时调用函数
 * @param {Number} delay 延迟多长时间
 * @param {Number} atleast 至少多长时间触发一次
 * @return {Function} 延迟执行的方法
 */
// throttle 节流函数
export default function throttle (fn, delay, atleast) {
  let timer = null
  let previous = null
  return function () {
    let now = +new Date()
    if (!previous) previous = now
    if (atleast && now - previous > atleast) {
      fn()
      previous = now
      clearTimeout(timer)
    } else {
      clearTimeout(timer)
      timer = setTimeout(function () {
        fn()
        previous = null
      }, delay)
    }
  }
}
