// import Vue from 'vue'
// import App from '@/App.vue'
// import router from '@/router'

// import '@/assets/css/main.css'

// Vue.config.productionTip = false
// Vue.config.devtools = true

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App),
// })

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import algorithm from '@/util/algorithm'
import store from '@/store'
import VueSocketio from 'vue-socket.io'
import axios from '@/axios/index.js'
import api from '@/config/api.js'
import VueClipboard from 'vue-clipboard2'
import i18n from '@/lang/i18n'
import {Modal, Message, Button, Input, Icon, DatePicker, Select, InputNumber, Option} from 'iview'
import '@/assets/js/vueFilter.js'
import 'iview/dist/styles/iview.css'
import '@/assets/css/main.css'
// import '@/assets/iconfont/iconfont.css'
// import '@/assets/css/cssReset.css'
// import '@/assets/css/common.css'
// import '@/assets/css/iviewReset.scss'

axios.install(Vue)

Vue.component('Modal', Modal)
Vue.component('Message', Message)
Vue.component('i-button', Button)
Vue.component('i-input', Input)
Vue.component('Icon', Icon)
Vue.component('DatePicker', DatePicker)
Vue.component('i-select', Select)
Vue.component('i-option', Option)
Vue.component('InputNumber', InputNumber)

Vue.prototype.$Message = Message
Vue.prototype.$Modal = Modal

Vue.config.productionTip = false

Vue.use(algorithm)
Vue.use(VueClipboard)
// 切换路由取消之前发起的请求
router.beforeEach((to, from, next) => {

  if(to.name!=null&&(to.name=="dice"||to.name=="arena")){
    let tourl="https://www.iostwin.io/"

    if(to.path!=null)
      tourl=tourl+"#"+to.path
      location.href=tourl;
  }
  while (axios.cancelTokens.length > 0) {
    let cancel = axios.cancelTokens.pop()
    cancel()
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {App},
  template: '<App/>'
})



// WEBPACK FOOTER //
// ./src/main.js