<template>
  <div class="realpop-box">
    <div class="realpop-con">
      <div class="pop-tit">{{$t('exchangeContent.tradeDetail')}}</div>
      <div class="deal-info flex-box">
        <div class="info-item">
          <div class="item-tit">{{$t('exchangeContent.list.direction')}}</div>
          <div class="item-numb">{{info.direction==1?$t('exchangeContent.buy'):$t('exchangeContent.sell')}}</div>
        </div>
        <div class="info-item">
          <div class="item-tit">{{$t('exchangeContent.list.finishPrice')}}</div>
          <div class="item-numb">{{info.price}} <span>IOST</span></div>
        </div>
        <div class="info-item">
          <div class="item-tit">{{$t('exchangeContent.list.finishVolumn')}}</div>
          <div class="item-numb">{{info.num|transNum}} <span>{{coin.toUpperCase()}}</span></div>
        </div>
        <div class="info-item">
          <div class="item-tit">{{$t('exchangeContent.list.finishTime')}}</div>
          <div class="item-numb">{{info.tradetime|formatTime2}}</div>
        </div>
      </div>
      <div class="deal-people flex-box">
        <div class="people-item buyer">
          <div class="people-tit">{{$t('exchangeContent.buyUser')}}</div>
          <div class="people-li">{{$t('account')}}{{$t('colon')}}<a @click="openUser(info.buy.user)"><span>{{info.buy.user}}</span></a></div>
          <div class="people-li">{{$t('exchangeContent.calVolumn')}}{{$t('colon')}}{{info.buy.amount}}</div>
          <div class="people-li">{{$t('exchangeContent.list.fee')}}{{$t('colon')}}{{info.buy.fee}}</div>
          <div class="people-li">{{$t('exchangeContent.list.orderHash')}}{{$t('colon')}}<a @click="openHash(info.buy.tradehx)"><span>{{info.buy.tradehx}}</span></a></div>
          <div class="people-li">{{$t('exchangeContent.list.finishHash')}}{{$t('colon')}}<a @click="openHash(info.buy.finishhx)"><span>{{info.buy.finishhx}}</span></a></div>
        </div>
        <div class="people-item seller">
          <div class="people-tit">{{$t('exchangeContent.sellUser')}}</div>
          <div class="people-li">{{$t('account')}}{{$t('colon')}}<a @click="openUser(info.sell.user)"><span>{{info.sell.user}}</span></a></div>
          <div class="people-li">{{$t('exchangeContent.calVolumn')}}{{$t('colon')}}{{info.sell.amount}}</div>
          <div class="people-li">{{$t('exchangeContent.list.fee')}}{{$t('colon')}}{{info.sell.fee}}</div>
          <div class="people-li">{{$t('exchangeContent.list.orderHash')}}{{$t('colon')}}<a @click="openHash(info.sell.tradehx)"><span>{{info.sell.tradehx}}</span></a></div>
          <div class="people-li">{{$t('exchangeContent.list.finishHash')}}{{$t('colon')}}<a @click="openHash(info.sell.finishhx)"><span>{{info.sell.finishhx}}</span></a></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    'info':{
      type:[Array, Object],
      default:''
    },
    'coin':{
      type:String,
      default:'WIN'
    }
  },
  data(){
    return{}
  },
  computed: {},
  mounted() {},
  methods: {
    openHash (value) {
      window.open('https://www.iostabc.com/tx/' + value)
    },
    openUser(value){
      window.open('https://www.iostabc.com/account/' + value)
    }

  },
  watch: {
    info() {
      console.log(this.info);
    }
  }
}
</script>
<style lang="postcss">
.realpop-con {
  padding: 40px 20px 20px;
  .pop-tit {
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    margin-bottom: 20px;
  }
  .deal-info {
    justify-content: center;
    .info-item {
      flex: 1;
      text-align: center;
    }
    .item-tit {
      font-size: 16px;
      color: #dcca81;
      line-height: 24px;
    }
    .item-numb {
      line-height: 28px;
      font-size: 20px;
      font-weight: bold;
      height: 28px;
      span {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  .deal-people {
    margin-top: 34px;
    .people-item {
      background: #373451;
      border-radius: 8px;
      padding: 15px;
      font-size: 16px;
      line-height: 36px;
      width: 415px;
      margin-right: 20px;
      box-sizing: border-box;
      &.seller{
        margin: 0;
      }
      .people-tit {
        position: relative;
        font-weight: bold;
        padding-left: 16px;
        &::before{
          display: block;
          content:'';
          position: absolute;
          left: 0;
          top:50%;
          transform:translateY(-50%);
          height: 16px;
          width: 4px;
          border-radius:4px;
          background: #f5636f;
        }
      }
      .people-li{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        span{
          color: #cbba7b;
        }
      }
    }
  }
}
@media screen and (max-width: 635px){
  .realpop-box{
    padding: 20px 0;
    height: 100%;
  }
  .realpop-con{
    height: 100%;
    overflow-x: hidden;
    padding: 10px 15px;
    -webkit-overflow-scrolling : touch;

    &::-webkit-scrollbar {
      width: 6px;
      background: #2b2a35;
    }
    &::-webkit-scrollbar-track{
      border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius:6pxm;
      width: 6px;
      background: #8e7c52;
    }
    .pop-tit{
      margin-bottom: 15px;
    }
    .deal-info .info-item{
      margin-bottom: 10px;
    }
    .deal-people .people-item{
      font-size: 14px;
    }
  }
  .realpop-con .deal-info{
    display: block;
  }
  .realpop-con .deal-people{
    display: block;
  }
  .realpop-con .deal-people .people-item{
    width: 100%;
    margin:0;
    margin-bottom: 10px;
  }
}
</style>




// WEBPACK FOOTER //
// src/components/payout/realPop.vue