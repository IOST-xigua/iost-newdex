function return2Br (str) {
  return str.replace(/\r?\n/g, '<br />')
}

function randomStr (digit = 8) {
  // digit-长度
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let str = ''
  let idx
  for (let i = 0; i < digit; i++) {
    idx = Math.round(Math.random() * (arr.length - 1))
    str += arr[idx]
  }
  return str
}
function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// 自定义乘法
function mul (a, b) {
  let c = 0
  let d = a.toString()
  let e = b.toString()
  try {
    c += d.split('.')[1].length
  } catch (f) {}
  try {
    c += e.split('.')[1].length
  } catch (f) {}
  return parseFloat(d.replace('.', '')) * parseFloat(e.replace('.', '')) / Math.pow(10, c)
}
// 自定义加法
function add (a, b) {
  let c
  let d
  let e
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  e = Math.pow(10, Math.max(c, d))
  return (mul(a, e) + mul(b, e)) / e
}
// 自定义减法
function sub (a, b) {
  let c
  let d
  let e
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  e = Math.pow(10, Math.max(c, d))
  return (mul(a, e) - mul(b, e)) / e
}
// 自定义除法
function div (a, b) {
  let c
  let d
  let e = 0
  let f = 0
  try {
    e = a.toString().split('.')[1].length
  } catch (g) {}
  try {
    f = b.toString().split('.')[1].length
  } catch (g) {}
  c = parseFloat(a.toString().replace('.', ''))
  d = parseFloat(b.toString().replace('.', ''))
  return mul(c / d, Math.pow(10, f - e))
}
/* 唯一的方式加入数组
 * @origin      array   原数组
 * @items       array   要添加的数组
 * @keyname     string  唯一的关键词
 * @sortKeyname string  排序的关键词
 * @sortType    string  排序方式(asc升序=>小到大，desc降序=>大到小。默认:asc)
 */
function concat_unique (origin, items, keyname, sortKeyname, sortType) {
  let arr = [] // 建立新的数组
  let hash = {} // 用于比对的k->v对象
  try {
    for (let k in origin) {
      let item = origin[k]
      if (!hash[item[keyname]] && item[keyname]) {
        arr.push(item)
      }
      hash[item[keyname]] = item
    }
    for (let k in items) {
      let item = items[k]
      if (!hash[item[keyname]] && item[keyname]) {
        arr.push(item)
      }
    }
  } catch (e) {
    console.log(e)
  }
  arr = ObjArrSort(arr, sortKeyname, sortType)
  return arr
}
/* 唯一的方式加入数组
 * @origin      array   原数组
 * @keyname     string  排序的关键词
 * @type        string  排序方式(asc升序=>小到大，desc降序=>大到小。默认:asc)
 */
function ObjArrSort (origin, keyname, type = 'asc') {
  origin.sort((a, b) => {
    if (keyname === undefined) {
      return 1
    } else {
      if (type === undefined) {
        type = 'asc'
      }
    }
    return type === 'desc' ? (b[keyname] - a[keyname]) : (a[keyname] - b[keyname])
  })
  return origin
}
// 格式化时间
function formatTime (value, format = 'Y-M-D h:m:s.ms') {
  // value是整数，否则要parseInt转换
  let time = new Date(parseInt(value))
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

  return format.replace(/Y/g, Y).replace(/M/g, M).replace(/D/g, D).replace(/h/g, h).replace(/m/g, m).replace(/s/g, s).replace(/ms/g, ms)
}
// 倒计时
function timeCountdown (value, decimal = 'min') {
  if (value < 0) {
    return decimal === 'min' ? '00:00' : '00:00:00'
  }
  let time = Math.floor(value / 1000)
  let s = time % 60
  let m
  let h
  if (decimal === 'min') {
    m = Math.floor(time / 60)
    return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s)
  } else {
    m = Math.floor(time / 60) % 60
    h = Math.floor(time / (60 * 60))
    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s)
  }
}
// js睡眠
function sleep (delay) {
  let now = new Date()
  let exitTime = now.getTime() + delay
  while (true) {
    now = new Date()
    if (now.getTime() > exitTime) {
      return true
    }
  }
}

function clearAllInterval (timerArr) {
  for (let i = 0; i <= timerArr.length; i++) {
    clearInterval(timerArr[i])
  }
  return timerArr.splice(0, timerArr.length)
}

export {return2Br, randomStr, random, mul, add, sub, div, concat_unique, ObjArrSort, formatTime, timeCountdown, sleep, clearAllInterval}



// WEBPACK FOOTER //
// ./src/util/common.js