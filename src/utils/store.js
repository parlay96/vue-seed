/**
 * 存储localStorage
 */
export const setStore = (params) => {
  let {name, content, type} = params
  let ArrayBoolean = content.constructor === Array
  let objBoolean = content.constructor === Object
  let obj = {
    dataType: ArrayBoolean ? 'Array' : objBoolean ? 'Object' : '',
    content: content,
    type: type
  }
  if (type) window.sessionStorage.setItem(name, JSON.stringify(obj))
  else window.localStorage.setItem(name, JSON.stringify(obj))
}
/**
 * 获取localStorage
 */
export const getStore = (params) => {
  let {name, type} = params
  let obj = ''
  if (type === 'session') {
    obj = window.sessionStorage.getItem(name)
    if (obj === null) {
      return null
    } else {
      let data = JSON.parse(obj).content
      return data
    }
  } else {
    obj = window.localStorage.getItem(name)
    if (obj === null) {
      return null
    } else {
      let data = JSON.parse(obj).content
      return data
    }
  }
}
/**
 * 删除localStorage
 */
export const removeStore = params => {
  let {
    name
  } = params
  window.localStorage.removeItem(name)
  window.sessionStorage.removeItem(name)
}
