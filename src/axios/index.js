import axios from 'axios'
import qs from 'qs'

axios.cancelTokens = []

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {

    // 在发送请求之前做某件事
    if (
        (config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete')&&config.url.indexOf("getContractStorage")==-1&&config.url.indexOf("getBatchContractStorage")==-1
    ) {
      // 序列化
      const name = Object.prototype.toString.call(config.data).match(/\[object (.*?)\]/)[1]

      if (name !== 'FormData') {
        config.data = qs.stringify(config.data)
      }
    }
    config.cancelToken = new axios.CancelToken(function (cancel) {
      axios.cancelTokens.push(cancel)
    })
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error.data.errmsg)
  }
)

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  // 对响应数据做些事
    // console.log(res)
    // 以前返回的是res.data。2019-4-9 曹 修改未return res
  return res
}, (err) => {
  // 返回 response 里的错误信息
  let errInfo
  if (axios.isCancel(err)) {
    errInfo = err.message
  } else {
    errInfo = err.data && err.data.errcode !== 0 ? err.data.errmsg : err.data
  }
  return Promise.reject(errInfo)
})

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, '$http', {value: axios})
  },
  cancelTokens: axios.cancelTokens,
  http: axios
}



// WEBPACK FOOTER //
// ./src/axios/index.js