import Vue from 'vue'

Vue.filter('phonereplace', function (value) {
  // 手机号替换字符串
  if (value) {
    return value.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
  } else {
    return value
  }
})

Vue.filter('nameplaceholder', function (value) {
  // 姓名替换字符串
  if (value) {
    return value.replace(/(.).(.*)/, '$1*$2')
  } else {
    return value
  }
})

Vue.filter('idCardplaceholder', function (value) {
  // 身份证号替换字符串
  if (value) {
    return value.replace(/(\d{6})\d{8}(\d{4})/, '$1****$2')
  } else {
    return value
  }
})

// 格式化时间
Vue.filter('formatTime', function (value, format = 'h:m:s') {

  let timestamp = parseInt(value) / Math.pow(10, 13) >= 1 ? parseInt(value) : (parseInt(value) * 1000)
  if (isNaN(timestamp)) {
    return ''
  }
  let time = new Date(timestamp)

  let Y = time.getFullYear()
  let M = time.getMonth() + 1
  M = M < 10 ? '0' + M : M
  let D = time.getDate()
  D = D < 10 ? '0' + D : D
  let h = time.getHours()
  h = h < 10 ? '0' + h : h
  let m = time.getMinutes()
  m = m < 10 ? '0' + m : m
  let s = time.getSeconds()
  s = s < 10 ? '0' + s : s
  return format.replace(/M/g, M).replace(/D/g, D).replace(/h/g, h).replace(/m/g, m).replace(/s/g, s)
})
Vue.filter('formatTime2', function (value, format = 'Y-M-D h:m:s') {
  if(value.length==19) {
    value = parseInt(value / 1000000000)
  }
  let timestamp = parseInt(value) / Math.pow(10, 13) >= 1 ? parseInt(value) : (parseInt(value) * 1000)
  if (isNaN(timestamp)) {
    return ''
  }
  let time = new Date(timestamp)
  let Y = time.getFullYear()
  let M = time.getMonth() + 1
  M = M < 10 ? '0' + M : M
  let D = time.getDate()
  D = D < 10 ? '0' + D : D
  let h = time.getHours()
  h = h < 10 ? '0' + h : h
  let m = time.getMinutes()
  m = m < 10 ? '0' + m : m
  let s = time.getSeconds()
  s = s < 10 ? '0' + s : s
  let ms = time.getMilliseconds()
  ms = ms < 10 ? '00' + ms : (ms < 100 ? '0' + ms : ms)

  return format.replace(/Y/g, Y).replace(/M/g, M).replace(/D/g, D).replace(/h/g, h).replace(/m/g, m).replace(/s/g, s)
})
Vue.filter('formatTime3', function (value) {

  let timestamp = parseInt(value / 1000000000)-parseInt(new Date().getTime()/1000)
  if (timestamp != null && timestamp != '') {
    if (timestamp > 60 && timestamp < 60 * 60) {
      timestamp = parseInt(timestamp / 60.0) + '分钟' + parseInt((parseFloat(timestamp / 60.0) - parseInt(timestamp / 60.0)) * 60) + '秒'
    } else if (timestamp >= 60 * 60 && timestamp < 60 * 60 * 24) {
      timestamp = parseInt(timestamp / 3600.0) + '小时' + parseInt((parseFloat(timestamp / 3600.0) -
      parseInt(timestamp / 3600.0)) * 60) + '分钟' +
      parseInt((parseFloat((parseFloat(timestamp / 3600.0) - parseInt(timestamp / 3600.0)) * 60) -
      parseInt((parseFloat(timestamp / 3600.0) - parseInt(timestamp / 3600.0)) * 60)) * 60) + '秒'
    } else if (timestamp >= 60 * 60 * 24) {
      timestamp = parseInt(timestamp / 3600.0 / 24) + '天' +parseInt((parseFloat(timestamp / 3600.0 / 24) -
      parseInt(timestamp / 3600.0 / 24)) * 24) + '小时' + parseInt((parseFloat(timestamp / 3600.0) -
      parseInt(timestamp / 3600.0)) * 60) + '分钟' +
      parseInt((parseFloat((parseFloat(timestamp / 3600.0) - parseInt(timestamp / 3600.0)) * 60) -
      parseInt((parseFloat(timestamp / 3600.0) - parseInt(timestamp / 3600.0)) * 60)) * 60) + '秒'
    } else {
      timestamp = parseInt(timestamp) + '秒'
    }
  }
  return timestamp
})
Vue.filter('float4', function (value) {
  var val = 0
  if (!value) {
    val = 0
  } else {
    val = parseFloat(value)
  }
  return val.toFixed(4)
})
Vue.filter('transNum', function (value) {
  return transNum(value)
})
Vue.filter('getDateDiff', function (value) {
  let minute = 60
  let hour = minute * 60
  let day = hour * 24
  let month = day * 30
  let year = day * 365

  let nowTimestamp = new Date().valueOf()
  let dateTimeStamp = parseInt(value) / Math.pow(10, 13) >= 1 ? parseInt(value) : (parseInt(value) * 1000)
  let diffValue = (nowTimestamp - dateTimeStamp) / 1000
  if (isNaN(diffValue) || diffValue < 0) {
    return ''
  }
  let yearC = diffValue / year
  let monthC = diffValue / month
  let weekC = diffValue / (7 * day)
  let dayC = diffValue / day
  let hourC = diffValue / hour
  let minC = diffValue / minute
  let result
  if (yearC >= 1) {
    result = parseInt(monthC) + '年前'
  } else if (monthC >= 1) {
    result = parseInt(monthC) + '个月前'
  } else if (weekC >= 1) {
    result = parseInt(weekC) + '周前'
  } else if (dayC >= 1) {
    result = parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    result = parseInt(hourC) + '个小时前'
  } else if (minC >= 1) {
    result = parseInt(minC) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
})

Vue.filter('float8', function (value) {
  return value
})
Vue.directive('enterNumber2', {
  inserted: function (el) {
    el.addEventListener("keypress",function(e){
      e = e || window.event;
      let charcode = typeof e.charCode == 'number' ? e.charCode : e.keyCode;
      let re = /\d/;
      if(charcode == 46){
        if(el.value.includes('.')){
          e.preventDefault();
        }
        return;
      }else if(!re.test(String.fromCharCode(charcode)) && charcode > 9 && !e.ctrlKey){
        if(e.preventDefault){
          e.preventDefault();
        }else{
            e.returnValue = false;
        }
      }
    })
  }
})
Vue.directive('enterNumber', {
  inserted: function (el) {
    el.addEventListener("keypress",function(e){
      e = e || window.event;
      let charcode = typeof e.charCode == 'number' ? e.charCode : e.keyCode;
      let re = /\d/;
      if(!re.test(String.fromCharCode(charcode)) && charcode > 9 && !e.ctrlKey){
          if(e.preventDefault){
              e.preventDefault();
          }else{
              e.returnValue = false;
          }
      }
    })
  }
})

export default Vue;

// WEBPACK FOOTER //
// ./src/assets/js/vueFilter.js