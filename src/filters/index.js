let formartDate = (str) => {
  console.log(str)
  //传入为空直接返回
  if (!str) {
    return ''
  }
  let date = new Date(str)
  let time = new Date().getTime() - date.getTime() //当前的时间-传入的时间(单位为毫秒)
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if ((time / 1000 < 60)) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt((time / 3600000)) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt((time / 86400000)) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt((time / 2592000000)) + '月前'
  } else {
    return parseInt((time / 31536000000)) + '年前'
  }
}
export {formartDate}
