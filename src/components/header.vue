<template>
  <div class="header">
    <div class="header-content">
      <div class="left">
        <router-link class="logo" to="/">
          <img src="@/assets/images/logo/idex-logo.svg" alt="">
        </router-link>
        <div class="menu">




           <div class="menu-item"><router-link to="/Rule">{{$t('rule')}}</router-link></div>
          <!-- <div class="menu-item"><router-link to="/notice">{{$t('notice')}}</router-link></div> -->

          <!-- <div class="menu-item" @click="visible=false;nodeModal=true">{{$t('node')}}</div> -->

          <!--<div class="menu-item signal" @click="openSignal">
            <div class="signal-box flex-box">
              <div class="signal-img">
                <img src="@/assets/images/public/signal.png" alt="">
              </div>
              <div class="signal-txt">
                <span>108</span> ms
              </div>
            </div>
            <div class="signal-list" :class="{'show':isSignal}">
              <div class="signal-item flex-box b-line" @click="select(index)" :class="{ active:index==current}" v-for="(item,index) in signalList" :key="index">
                <div class="signal-name flex-1">{{item.name}}</div>
                <div class="signal-num" :class="{'peak-num': item.num>=500}">{{item.num}} ms</div>
              </div>
            </div>
          </div>-->
        </div>
      </div>
      <div class="right">
        <div class="menu">

          <Poptip trigger="hover" placement="bottom">
            <a href="https://telegram.me/iostdex" target="_blank"><Icon custom="iconfont icon-telegram" class="menu-info group"/></a>
            <div slot="content">
              <!-- <img src="/static/img/telegramGroup.png" class="group-pic"> -->
            </div>
          </Poptip>

          <!--<div class="menu-item" @click="visible=false"><router-link to="/notice">{{$t('notice')}}</router-link></div>-->

          <!--<div class="menu-item"><router-link to="/howToPlay">{{$t('howToPlay')}}</router-link></div>-->
        </div>
        <!--<div class="wap-signal" @click="openSignal">
          <img src="@/assets/images/public/signal.png" alt="">
          <div class="signal-list-wap" :class="{'show':isSignal}">
            <div class="signal-item flex-box b-line" @click="select(index)" :class="{ active:index==current}" v-for="(item,index) in signalList" :key="index">
              <div class="signal-name flex-1">{{item.name}}</div>
              <div class="signal-num" :class="{'peak-num': item.num>=500}">{{item.num}} ms</div>
            </div>
          </div>
        </div>-->
        <div class="account" :class="{'isLogin':$store.state.currentAccount}">
          <!-- <img src="@/assets/images/public/login_bg.png" alt="" class="account-bg">
          <img src="@/assets/images/public/login_bg_wap.png" alt="" class="account-bg-wap">
          <i-button type="primary" class="logBtn" @click="login()" v-if="!$store.state.currentAccount">{{$t('login')}}</i-button> -->
          <span @click="login()" v-if="!$store.state.currentAccount">{{$t('login')}}</span>
          <div v-if="$store.state.currentAccount">
            <router-link to="/my">
              <span>{{$store.state.currentAccount.name}}</span>
              <!-- <Icon type="ios-arrow-down"></Icon> -->
            </router-link>

          </div>


        </div>


        <!-- <Dropdown class="menu-item menu-language" style="margin-right: 12px">
        <a href="javascript:void(0);" class="lang-box">

          <div class="lang">
            {{$t('communityApp')}}
          </div>
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem><a href="/static/apk/iostdex_1_0_1.apk">Android</a></DropdownItem>
        </DropdownMenu>
      </Dropdown> -->
        <Dropdown class="menu-item menu-language" trigger="click" @on-click="changeLang">
          <a href="javascript:void(0);" class="lang-box">
            <!-- <span>{{$t('lang')}}</span> -->

            <div class="lang">
              <img src="@/assets/images/public/zh_cn.png" alt="" v-if="lang=='zh_cn'">
              <img src="@/assets/images/public/zh_hk.png" alt="" v-if="lang=='zh_hk'">
              <img src="@/assets/images/public/en_us.png" alt="" v-if="lang=='en_us'">
              <img src="@/assets/images/public/ko_kp.png" alt="" v-if="lang=='ko_kp'">
              <img src="@/assets/images/public/ru_ru.png" alt="" v-if="lang=='ru_ru'">
            </div>
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem v-for="item in languages" :name="item" v-bind:key="item">{{$t('languages.'+item)}}</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown class="mobile" trigger="custom" :visible="visible" placement="bottom-end">
          <a class="mobile-btn" href="javascript:void(0);" @click="handleToggle">
            <Icon type="ios-menu"></Icon>
          </a>
          <DropdownMenu slot="list">
            <div class="menu-mobile">


              <div class="menu-item" @click="visible=false"><router-link to="/Rule">{{$t('rule')}}</router-link></div>
              <div class="menu-item"><router-link to="/competition">{{$t('competition')}}</router-link></div>
              <!--<Divider></Divider>-->
<!--              <div class="menu-item cpu-net" v-if="$store.state.currentAccount">-->
<!--                <i-circle :percent="gasUsedPercent" :size="circle.size" :trail-width="circle.trailWidth" :stroke-width="circle.strokeWidth" :stroke-color="gasColor">-->
<!--                  <p class="percent">{{gasUsedPercent}}%</p>-->
<!--                  <p class="unit">GAS</p>-->
<!--                </i-circle>-->
<!--                <i-circle :percent="ramUsedPercent" :size="circle.size" :trail-width="circle.trailWidth" :stroke-width="circle.strokeWidth" :stroke-color="ramColor">-->
<!--                  <p class="percent">{{ramUsedPercent}}%</p>-->
<!--                  <p class="unit">RAM</p>-->
<!--                </i-circle>-->
<!--              </div>-->
              <Dropdown class="menu-item">
                <a href="javascript:void(0);">
                  <!-- <span>{{$t('lang')}}</span> -->

                  <div class="lang">
                    {{$t('communityApp')}}
                    <Icon type="ios-arrow-forward"></Icon>
                  </div>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem><a href="/static/apk/iostdex_1_0_1.apk">Android</a></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown class="menu-item" trigger="click" @on-click="changeLang" placement="right-start">
                <a href="javascript:void(0);">
                  <span>{{$t('lang')}}</span>
                  <Icon type="ios-arrow-forward"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem v-for="(item,index) in $t('languages')" :name="index" v-bind:key="index">{{item}}</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <!--<div class="menu-item" @click="visible=false"><router-link to="/howToPlay">{{$t('howToPlay')}}</router-link></div>-->
              <div class="menu-item flex-box">

                <Poptip placement="bottom-start">
                  <a href="https://telegram.me/iostdex"><Icon custom="icon iconfont icon-telegram" class="menu-info group"/></a>
                  <div slot="content">
                    <!-- <img src="/static/img/telegramGroup.png" class="group-pic"> -->
                  </div>
                </Poptip>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>

  </div>
</template>
<script>
import {Dropdown, DropdownMenu, DropdownItem, Circle, Divider, Drawer, Poptip} from 'iview'
import {mapGetters} from 'vuex'


export default {
  components: {

    'i-circle': Circle,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Divider,
    Drawer,
    Poptip
  },
  data () {
    return {
      nodeId: this.$store.state.nodeId,
      nodes: this.$store.state.nodes,
      visible: false, // 手机模式下菜单显示隐藏
      languages:['zh_cn','en_us'],
      lang: localStorage.getItem("language_id")==null?'zh_cn':localStorage.getItem("language_id"),
      userInfoTimer: null, // 用户信息定时器
      circle: {
        size: 36,
        strokeWidth: 8,
        trailWidth: 8
      },
      gasUsedPercent: 0, // gas已使用百分比
      ramUsedPercent: 0, // ram已使用百分比
      balance:0,
      winBalance:0,
      isOpenMenu: false,

    }
  },
  computed: {
    ...mapGetters({
      currentAccount: 'getCurrentAccount'
    }),
    gasColor () {
      if (this.gasUsedPercent >= 85) {
        return '#ee0060'
      } else if (this.gasUsedPercent >= 65) {
        return '#f1940f'
      } else {
        return '#29f294'
      }
    },
    ramColor () {
      if (this.ramUsedPercent >= 85) {
        return '#ee0060'
      } else if (this.ramUsedPercent >= 65) {
        return '#f1940f'
      } else {
        return '#29f294'
      }
    }
  },
  async mounted () {

  },
  methods: {

    changeParam (data) {
      for (var key in data) {
        if (key === 'url') {
          this.$router.push({path: data[key]})
        } else {
          this[key] = data[key]
        }
      }
    },
    comingSoon () {
      this.$Modal.warning({
        title: this.$i18n.t('comingSoon')
      })
    },
    handleToggle () {
      this.visible = !this.visible
    },
    async login () {
      try {
        await this.$store.dispatch('login')
      } catch (e) {
        this.$Message.warning({
          duration: 120,
          closable: true,
          content: this.$i18n.t('loginMsg.' + (e.type === undefined ? 'error' : e.type))
        })
        return
      }
      if (this.$store.state.currentAccount == null) {
        this.$Message.warning({
          duration: 3,
          closable: true,
          content: this.$i18n.t('loginMsg.error')
        })
      }
    },
    async logout () {
      await this.$store.dispatch('logout')
    },


    closeModal (keyModal) {
      if (this.hasOwnProperty(keyModal)) {
        this[keyModal] = false
      }
    },
    changeLang (key) {
      localStorage.setItem('language_id', key);
      this.$i18n.locale = key;
      this.lang = key;
    },
    changeMenu (name) {
      if (name === 'logout') {
        this.logout()
      }
    },
  },
  watch: {

    currentAccount () {
      if (this.$store.state.currentAccount == null) {
        this.gasUsedPercent = 0
        this.ramUsedPercent = 0
      } else {
        // gas使用百分比
        if (this.$store.state.currentAccount.hasOwnProperty('gasInfo') && this.$store.state.currentAccount.gasInfo.limit > 0) {
          let gasUsedPercent = Math.round((this.$store.state.currentAccount.gasInfo.limit-this.$store.state.currentAccount.gasInfo.current_total) / this.$store.state.currentAccount.gasInfo.limit * 100)
          if (gasUsedPercent > 100) {
            this.gasUsedPercent = 100
          } else if (gasUsedPercent < 0) {
            this.gasUsedPercent = 0
          } else {
            this.gasUsedPercent = gasUsedPercent
          }
        } else {
          this.gasUsedPercent = 0
        }

        // ram使用百分比
        if (this.$store.state.currentAccount.hasOwnProperty('ramInfo') && this.$store.state.currentAccount.ramInfo.total > 0) {
          let ramUsedPercent = Math.round(this.$store.state.currentAccount.ramInfo.used / this.$store.state.currentAccount.ramInfo.total * 100)
          if (ramUsedPercent > 100) {
            this.ramUsedPercent = 100
          } else if (ramUsedPercent < 0) {
            this.ramUsedPercent = 0
          } else {
            this.ramUsedPercent = ramUsedPercent
          }
        } else {
          this.netUsedPercent = 0
        }
        //IOST以及WIN余额
        if(this.$store.state.currentAccount.hasOwnProperty('IOST') )
          this.balance=this.$store.state.currentAccount['IOST']
        if(this.$store.state.currentAccount.hasOwnProperty('WIN') )
          this.winBalance=this.$store.state.currentAccount['WIN']
      }
    }
  }
}
</script>
