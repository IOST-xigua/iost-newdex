<template>
  <div class="webpage">
      <div class="wrap">
        <div class="title">
          TRX->ITRX
        </div>
        <div class="bet-input-box flex-box">
          <div class="input-box flex-box">
            <div class="input">
              <input type="number" v-model="chainNum">
            </div>

          </div>
          <div class="times-box flex-box">
            <div class="times-item" :class="{'active':timesAct=='0.5'}" @click="setDeposit('0.5')">1/2</div>
            <div class="times-item" :class="{'active':timesAct=='2'}" @click="setDeposit('2')">2x</div>
            <div class="times-item" :class="{'active':timesAct=='max'}" @click="setDeposit('max')">Max</div>
          </div>
        </div>
        <div class="balance">我的余额 {{chainBalance}}</div>
        <div class="bet-input-box flex-box">
          <div class="input-box flex-box">
            <div class="input">
              <input  v-model="iostAccount" placeholder="IOST账号">
            </div>

          </div>

        </div>
        <div class="operate-btn" :class="{'disabled':chainAccount==''}">兑换</div>
      </div>
      <div class="wrap">
        卖出
      </div>
  </div>
</template>
<script>

import {clearAllInterval} from '@/util/common.js'
export default {
  components: {

  },
  data(){
    return {
      chainNum:50,
      chainBalance:0,
      internal:[],
      timesAct:0.5,
      chainAccount:""

    }
  },
  computed: {
    iostAccount(){
      if(this.$store.state.currentAccount!=null)
        return this.$store.state.currentAccount.name
      else
        return ""
    }
  },
  async mounted(){
    this.internal.push(setInterval(this.getChainAccount,3000));
  },
  methods: {
    async setDeposit (type) {
      if(this.chainBalance==0)
        return;
      this.timesAct = type;
      if (type === 'max') {
            this.chainNum = parseFloat(this.chainBalance.toFixed(4))

      } else if (type === 'min') {
        this.chainNum = 50
      } else {
        this.chainNum= parseFloat(parseFloat(this.chainNum * parseFloat(type)).toFixed(4)) // 乘以倍数后的值


      }


    },
    async getChainAccount() {
      let result = await this.$store.dispatch('getChainAccount', {symbol: "trx"});
      if(result.hasOwnProperty("account")){
        this.chainAccount=result.account;
        this.chainBalance=result.balance;
      }
      //console.log(result)
      //return result;
    },
  }
  ,
  watch:{
    chainNum(){

      if(this.chainNum>this.chainBalance)
        this.chainNum=parseFloat(this.chainBalance).toFixed(4)
      if(this.chainNum<50)
        this.chainNum=50
    },
  },
  beforeDestroy () {
    //清除所有定时器
    if (this.internal.length > 0) {
      this.internal = clearAllInterval(this.internal)
    }

  }

}
</script>
<style lang="postcss" scoped>
@import '../../assets/css/variable.scss';
.webpage {
  color: $whiteColor;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: $largeMargin;
  padding: $defaultPadding;
  display: flex;
  align-items: flex-start;

  .wrap {
    flex: 1;

      padding: $normalPadding;
      font-size: $transitSize;
      margin-bottom: $normalMargin;
      border-radius: $smallRadius;
    background-color: $grayDarkColor;

.operate-btn {
  margin:0 auto;
  height: 48px;
  line-height: 42px;
  width: 210px;
  text-align: center;
  background: #67c269;
  border-radius: 5px;
  border: 3px solid #85ce87;
  font-size: 18px;
  font-weight: bold;
  margin-top: 25px;
  cursor: pointer;
&.disabled{
  background:gray;
   border: 3px solid gray;
   cursor: no-drop;
 }
}
  .balance{text-align: center}
.times-box{
.times-item {
  font-size: 16px;
  cursor: pointer;
  width: 82px;
  height: 42px;
  line-height: 42px;
  color: #807ba4;
  text-align: center;
  background: linear-gradient(to bottom, #4b466e, #423e5f);
  margin-left: 5px;
  border-radius: 4px;
&.active{
   background: linear-gradient(to bottom, #575ba4, #4e518b);
   color: #a19cc7;
 }
}
}
.bet-input-box {
  background: linear-gradient(to bottom, rgba(50,45,71,0.7), rgba(56,53,83,0.7));
  height: 52px;
  border-radius: 4px;
  padding: 5px 5px 5px 12px;
  margin: 15px 18px 14px;
}
.input-box {
  flex: 1;
  color: #fff;
  padding-right: 10px;

.input {
  flex: 1;
input {
  background: none;
  border: none;
  height: 42px;
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 22px;
}
}
.coin {
  font-size: 22px;
}
}

  &:nth-child(1){
    margin-right:5px;
  }
&:nth-child(2){
   margin-left:5px;
 }

  }
}
@media screen and (max-width:634px) {
  .webpage {

    }

}
@media screen and (max-width:1000px) {
  .webpage {
    max-width: 800px;
  }
}
</style>
<style lang="postcss">
.webpage {
  .ivu-anchor-wrapper {
    border-radius: 4px;
    background-color: rgba(36, 32, 41, 0.8);
    margin: 0;
    padding: 0;
    .ivu-anchor {
      padding: 10px 0;
      .ivu-anchor-ink {
        display: none;
      }
      .ivu-anchor-link {
        padding: 12px 0 12px 16px;
        &.ivu-anchor-link-active {
          border-left: 3px solid #29f294;
          padding-left: 13px;
          background-color: #161933;
        }
        .ivu-anchor-link-title {
          color: #fff;
          font-size: 18px;
        }
      }
    }
  }
}
</style>



// WEBPACK FOOTER //
// src/views/wrap/index.vue