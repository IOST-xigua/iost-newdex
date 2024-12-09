export default function algorithm (Vue, options) {
  Vue.prototype.randomStr = (digit = 8) => {
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
  Vue.prototype.random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  /* 唯一的方式加入数组
   * @origin      array   原数组
   * @items       array   要添加的数组
   * @keyname     string  唯一的关键词
   * @sortKeyname string  排序的关键词
   * @sortType    string  排序方式(asc升序=>小到大，desc降序=>大到小。默认:asc)
   */
  Vue.prototype.concat_unique = (origin, items, keyname, sortKeyname, sortType) => {
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
    arr.sort((a, b) => {
      if (sortKeyname === undefined) {
        return 1
      } else {
        if (sortType === undefined) {
          sortType = 'asc'
        }
      }
      return sortType === 'desc' ? (b[sortKeyname] - a[sortKeyname]) : (a[sortKeyname] - b[sortKeyname])
    })
    return arr
  }
  // 格式化时间
  Vue.prototype.formatTime = (value, format = 'Y-M-D h:m:s.ms') => {
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
  Vue.prototype.timeCountdown = (value, decimal = 'min') => {
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
  Vue.prototype.sleep = (delay) => {
    let now = new Date()
    let exitTime = now.getTime() + delay
    while (true) {
      now = new Date()
      if (now.getTime() > exitTime) {
        return true
      }
    }
  }
  // 清除所有定时器
  Vue.prototype.clearAllInterval = (timerArr) => {
    for (let i = 0; i <= timerArr.length; i++) {
      clearInterval(timerArr[i])
    }
    return timerArr.splice(0, timerArr.length)
  }
}



// WEBPACK FOOTER //
// ./src/util/algorithm.js