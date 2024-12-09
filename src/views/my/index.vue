<template>
  <div class="userpage">
    <div class="m-warp games-menu">
      <games></games>
    </div>
    <div class="userinfo flex-box m-warp">
        <div class="flex-box row">
            <div>{{Account}}</div>
        </div>
        <div class="flex-box row">
            <div>{{$t('my.totalAmount')}}</div>
        </div>
        <div class="flex-box row">
            <div class="totalamount">{{totalAmount.toFixed(2)}} IOST</div>
        </div>
        <!-- <div class="flex-box row" :title="gasTip">
            <div>gas：</div><div>{{gasUsedPercent}}%</div>

        </div>
        <div class="flex-box row" :title="ramTip">
            <div>ram：</div><div >{{ramUsedPercent}}%</div>

        </div> -->


    </div>



    <!-- 记录 -->
    <div class="m-record">
      <div class="record-box m-warp">
        <div class="record-con">
          <div class="record-tab show flex-box">
            <div class="tab-item" :class="{'tab-act':recordTab == 'all'}" @click="tabRecord('all')">{{$t('my.all')}}</div>
            <div class="tab-item" :class="{'tab-act':recordTab == 'nozero'}" @click="tabRecord('nozero')">{{$t('my.nozero')}}</div>
              <div class="tab-item refresh" @click="tabRecord('all')"><img  src="/static/img/refresh.svg" alt=""></div>
          </div>
          <!-- 当前委托 -->
          <div class="record-betting record-tab-item" :class="{'record-scroll':$store.state.currentAccount}" >
            <div class="record-head flex-box">
              <div class="head-item item-coin">{{$t('exchangeContent.list.symbolType')}}</div>
              <div class="head-item item-balance">{{$t('balance')}}</div>
              <div class="head-item item-frozen">{{$t('my.frozen')}}</div>
                <div class="head-item item-frozen">{{$t('my.tradingAmount')}}</div>
                <div class="head-item item-price">{{$t('exchangeContent.price')}}</div>
              <div class="head-item item-amount">{{$t('my.amount')}}(IOST)</div>
              <div class="head-item item-operate">{{$t('exchangeContent.list.operation')}}</div>

            </div>
            <div class="record-list" v-if="$store.state.currentAccount && tokenList.length>0">
              <div class="record-list-item flex-box" v-for="(item,index) in tokenList" :key="index">
                <div class="list-item item-coin"><img
                                                      :src="item.icon" alt=""><span class="symbolname">{{item.symbol}}</span></div>
                  <div class="list-item item-balance">{{item.balance}}</div>
                  <div class="list-item item-frozen">{{item.frozen}}</div>
                  <div class="list-item item-frozen">{{item.tradingAmount}}</div>
                <div class="list-item item-price">{{item.price}}</div>
                  <div class="list-item item-amount">{{item.amount}}</div>
                <div class="list-item item-operate">

                    <router-link :to="'/symbol/'+item.symbol"  v-if="item.symbol!='iost'" class="head-item item-hx">{{$t('my.goTrade')}}</router-link>
                </div>
              </div>
            </div>
            <div class="noData" v-if="tokenList.length==0 && $store.state.currentAccount">{{$t('nodata')}}</div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Games from '@/components/games.vue';

import {clearAllInterval} from '@/util/common.js'
import {mapGetters} from 'vuex'

import IOSTLOGO from '@/assets/images/logo/IOST.png'
export default {
  components: {
    Games
  },

  data() {
    return {
        recordTab:'all',
        totalAmount:0,
        orders:[],
        gasUsedPercent: 0, // gas已使用百分比
        ramUsedPercent: 0, // ram已使用百分比
        balance:0,
        gasTip:'',
        ramTip:'',
        tokenList:[]
    }
  },
    async mounted(){


  },
   created(){
       this.getTokens();
    //console.log(location.href)
  },
  computed: {
      ...mapGetters({
          currentAccount: 'getCurrentAccount'
      }),
      getTotalAmount(){
          return 0
      },
      Account(){
          if(this.currentAccount)
              return this.currentAccount.name;
          else
              return "Not Login"
      },
    getLang(){
      return this.$i18n.t('tv_lang');
    }
  },
  methods: {
      tabRecord(tab){
          if(tab=="all"){
              this.getTokens();
          }else{
                if(this.tokenList.length>0){
                    let newList=[]
                    for(let i=0;i<this.tokenList.length;i++){
                        if(this.tokenList[i].hasOwnProperty("balance")&&this.tokenList[i].balance>0){
                            //console.log(this.tokenList[i],!this.tokenList[i].hasOwnProperty("balance"),this.tokenList[i].balance=="",this.tokenList[i].balance==0)
                            newList.push(this.tokenList[i])
                        }
                    }
                    this.tokenList=newList;
                }
          }

          this.recordTab = tab;
      },
      async getUserBalance(token){
        try{
            let result=await this.$store.dispatch('getSymbolBalance',{symbol:token})

            if(result!=null){
                for(let i=0;i<this.tokenList.length;i++){
                    if(token==this.tokenList[i].symbol){
                        this.tokenList[i].balance=parseFloat(result[token]);
                        let frozenbalance=0;

                        for(let j=0;j<result[token+"_frozen"].length;j++){
                            frozenbalance+=parseFloat(result[token+"_frozen"][j].amount);
                        }
                        //通过API调用交易中的数量。
                        let tradingAmountData = await this.$store.dispatch('getTradingAmount',{symbol:token})
                        console.log(tradingAmountData)
                        this.tokenList[i].tradingAmount = tradingAmountData.tradingAmount
                        this.tokenList[i].frozen=frozenbalance;
                        //计算总价值。
                        if(this.tokenList[i].price!=null) {
                            let totalTokenNum =frozenbalance + this.tokenList[i].balance
                            if (this.tokenList[i].tradingAmount!=null){
                                totalTokenNum +=parseFloat(this.tokenList[i].tradingAmount)
                            }
                            this.tokenList[i].amount = (parseFloat(this.tokenList[i].price) * totalTokenNum).toFixed(8)
                            this.totalAmount += parseFloat(this.tokenList[i].amount)
                        }
                        //console.log(token,this.tokenList[i].price,frozenbalance,this.totalAmount)

                    }

                }
                //this.totalAmount=this.totalAmount.toFixed(8)
            }
            //for(let i=0;i<=)
            //console.log(this.currentAccount[token],this.currentAccount[token+"_frozen"])
        }catch (e) {
            console.log(e)
            let that=this
            setTimeout(function(){that.getUserBalance(token)},1000)
        }
      },
      async getTokens(){
          try {
              this.totalAmount=0
              let tokenList=await this.$store.dispatch('getTokens')
              if(tokenList!=null){

                  tokenList.unshift({digit: 8,
                  icon: IOSTLOGO,
                  name: "IOST",
                  percent_24h: 0,
                  price: 1,
                  symbol: "iost"})
                  this.tokenList=tokenList;
                  if(this.currentAccount!=null){
                      //获取用户的余额
                     for(let i=0;i<this.tokenList.length;i++){
                         this.tokenList[i]["balance"]="";
                         this.tokenList[i]["frozen"]="";
                         this.tokenList[i]["trading"]="";
                         this.tokenList[i]["amount"]="";
                         await this.getUserBalance(this.tokenList[i].symbol)
                     }
                  }

                  //console.log(tokenList)
              }else{
                  throw "getToken err"
              }
          }catch (e) {
              console.log(e)
              setTimeout(this.getTokens,100)
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
              //console.log(this.$store.state.currentAccount.gasInfo)
              if (this.$store.state.currentAccount.hasOwnProperty('gasInfo') && this.$store.state.currentAccount.gasInfo.limit > 0) {
                  let gasUsedPercent = Math.round((this.$store.state.currentAccount.gasInfo.limit-this.$store.state.currentAccount.gasInfo.current_total) / this.$store.state.currentAccount.gasInfo.limit * 100)
                  this.gasTip="Total:"+this.$store.state.currentAccount.gasInfo.limit+" "+"Used:"+(this.$store.state.currentAccount.gasInfo.limit-this.$store.state.currentAccount.gasInfo.current_total)
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
                  this.ramTip="Total:"+this.$store.state.currentAccount.ramInfo.total+" "+"Used:"+this.$store.state.currentAccount.ramInfo.used
                  if (ramUsedPercent > 100) {
                      this.ramUsedPercent = 100
                  } else if (ramUsedPercent < 0) {
                      this.ramUsedPercent = 0
                  } else {
                      this.ramUsedPercent = ramUsedPercent
                  }
              } else {
                  this.ramUsedPercent = 0
              }
              //IOST以及WIN余额
              if(this.$store.state.currentAccount.hasOwnProperty('IOST') )
                  this.balance=this.$store.state.currentAccount['IOST']
              if(this.$store.state.currentAccount.hasOwnProperty('WIN') )
                  this.winBalance=this.$store.state.currentAccount['WIN']
          }
      }
  }
    ,
    beforeDestroy () {
        //清除所有定时器
        // if (this.internal.length > 0) {
        //     this.internal = clearAllInterval(this.internal)
        // }

    }
}

</script>



// WEBPACK FOOTER //
// src/views/my/index.vue