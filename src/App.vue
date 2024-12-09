<template>
  <div id="app" @click="openNav">
    <div class="maintenance" v-if="maintenance">{{$t('systemMaintaining')}}</div>
    <div class="app-active" v-if="!maintenance">
      <web-header></web-header>
      <div class="body">
        <!-- <div class="games">
          <router-link class="game-item" :class="{'active': item.name===$route.name}" :to="item.url" v-for="item in games" v-bind:key="item.name"> -->
            <!-- <div class="game-img"><img :src="item.img" alt=""></div>
            <p>{{$t(item.name)}}</p> -->
            <!-- <div class="tab-img tab-pc">
              <img :src="item.imgAct" alt="" v-if="item.name===$route.name">
              <img :src="item.img" alt="" v-else>
            </div>
            <div class="tab-img tab-wap">
              <img :src="item.imgWapAct" alt="" v-if="item.name===$route.name">
              <img :src="item.imgWap" alt="" v-else>
            </div>
            <div class="tab-tit">{{$t(item.name)}}</div>
          </router-link>
        </div> -->
        <router-view></router-view>
      </div>
    </div>
    <Modal v-model="showModal" :mask-closable="false" width="700" footer-hide class="payout-modal header-modal">
      <msgModal :msgInfo="msgInfo"  v-if="showModal"></msgModal>
    </Modal>
  </div>
</template>
<script>
import webHeader from './components/header.vue'
import webFooter from './components/footer.vue'
import msgModal from './components/msgModal.vue'
export default {
  name: 'App',
  components: {
    webHeader,
    webFooter,
    msgModal
  },
  data () {
    return {
      maintenance: window.maintenance, // 是否在维护中

      timer: null,
      isMenu: false,
      showModal:false,
      msgInfo:""
    }
  },
  computed: {

    getLang(){
      return this.$i18n.locale;
    },
    symbolTabsShow () {
      return this.$route.name === 'dice' || this.$route.name === 'slot' || this.$route.name === 'luckyNumber'
    }
  },
  watch:{
    getLang(val, oldVal){
      //console.log("ssss",val,oldVal)
      //  if(val == "zh_cn"){
      //    this.showWarning();
      // }
    }
  },
  async mounted () {
    if(this.getLang=="zh_cn")
      // this.showWarning();
    // 用户如果未登录，尝试登录
    if (this.$store.state.currentAccount == null) {
      await this.login()
    }
    // 获取用户信息
    this.timer = setInterval(() => {
      if (this.$store.state.currentAccount != null) {
        this.$store.dispatch('getAccount')
      }
    }, 5 * 1000)
  },
  methods: {
    showWarning(){
      this.msgInfo="您好，IOSTDex 不向来自中国用户提供服务。\r\n我们无意诱使任何人违反任何地方或国家法律。玩家的唯一责任是参考其管辖范围内的法律，以确定行为的合法性。";
      this.showModal=true;
    },
    async login () {
      try {
        await this.$store.dispatch('login')
      } catch (e) {
        this.$Message.warning({
          duration: 120,
          closable: true,
          content: this.$i18n.t('loginMsg.' + e.type)
        })
        return
      }
      // console.log('sssss', this.$store.state.currentAccount)
      if (this.$store.state.currentAccount == null) {
        this.$Message.warning({
          duration: 3,
          closable: true,
          content: this.$i18n.t('loginMsg.error')
        })
      }
    },
    setSymbol (symbol) {
      this.$store.commit('setSymbol', symbol)
    },
    /**
     * 控制语言弹窗显示隐藏（点击空白隐藏）
     */
    openNav(event) {
      var sp = document.getElementById('myPanel'),
        sp2 = document.getElementById('myPanel2');
      if (sp || sp2) {
        if (!sp.contains(event.target) && !sp2.contains(event.target)) {
          //这句是说如果我们点击到了id为myPanel以外的区域
          this.isMenu = false;
        } else {
          if (this.isMenu) {
            this.isMenu = false;
          } else {
            this.isMenu = true;
          }
        }
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

