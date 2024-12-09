<template>
  <div class="token-info auction-data">
    <div class="token-info__div  flex-box">
      <div class="token-name" style="flex:1;text-align: left">
        <p>{{$t('exchangeContent.symbolInfo.coindesc')}}</p>
        <div class="symbolInfo flex-box">
          <img :src="icon">
          <span class="nametitle">{{ bigCoin }}</span>
        </div>
      </div>
      <div class="token-price"  style="flex:1;text-align: right">
        <div class="data-item ">
          <div class="data-tit">{{$t('exchangeContent.symbolInfo.newPrice')}}{{$t('colon')}}</div>
          <div class="data-num upcolor" v-if="percent_24h!='--' && percent_24h>0">{{newPrice}}</div>
          <div class="data-num downcolor" v-else-if="percent_24h!='--' && percent_24h<0">{{newPrice}}</div>
          <div class="data-num" v-else-if="percent_24h!='--' && percent_24h==0">{{newPrice}}</div>
          <div class="data-num" v-else>{{newPrice}}</div>
      </div>
      </div>
      <!-- <div class="token-change" style="flex:1;text-align: center">
        <p>change</p>
        <div class="">
          <span>0.122</span>
        </div>
      </div> -->
    </div>
    <div class="auction-data" style="flex: 1">
      <!-- <div class="data-item flex-box">
          <div class="data-tit">{{$t('exchangeContent.symbolInfo.newPrice')}}{{$t('colon')}}</div>
          <div class="data-num upcolor" v-if="percent_24h!='--' && percent_24h>0">{{newPrice}}</div>
          <div class="data-num downcolor" v-else-if="percent_24h!='--' && percent_24h<0">{{newPrice}}</div>
          <div class="data-num" v-else-if="percent_24h!='--' && percent_24h==0">{{newPrice}}</div>
          <div class="data-num" v-else>{{newPrice}}</div>

      </div> -->
      <!-- <div class="data-item flex-box">
          <div class="data-tit">{{$t('exchangeContent.symbolInfo.lastPrice')}}{{$t('colon')}}</div>
          <div class="data-num">{{priceLasthour}}</div>
      </div>
      <div class="data-item flex-box">
          <div class="data-tit">{{$t('exchangeContent.symbolInfo.lastVolumn')}}{{$t('colon')}}</div>
          <div class="data-num">{{volumnLasthour}}</div>
      </div> -->
      <div class="data-item flex-box">
          <div class="data-tit">{{$t('exchangeContent.symbolInfo.percent_24h')}}{{$t('colon')}}</div>
          <div class="data-num upcolor" v-if="percent_24h!='--' && percent_24h>0">+{{percent_24h}}%</div>
          <div class="data-num downcolor" v-else-if="percent_24h!='--' && percent_24h<0">{{percent_24h}}%</div>
          <div class="data-num" v-else-if="percent_24h!='--' && percent_24h==0">{{percent_24h}}%</div>
          <div class="data-num" v-else>{{percent_24h}}</div>
      </div>
      <div class="data-item flex-box">
          <div class="data-tit">{{$t('exchangeContent.symbolInfo.volumn_24h')}}{{$t('colon')}}</div>
          <div class="data-num">{{volumn_24h}}</div>
      </div>
      <div class="data-item flex-box">
          <div class="data-tit">{{$t('exchangeContent.symbolInfo.amount_24h')}}{{$t('colon')}}</div>
          <div class="data-num">{{amount_24h}}</div>
      </div>
      <div class="data-item flex-box">
          <div class="data-tit">{{$t('exchangeContent.symbolInfo.maxprice_24h')}}{{$t('colon')}}</div>
          <div class="data-num">{{maxprice_24h}}</div>
      </div>
      <div class="data-item flex-box">
          <div class="data-tit">{{$t('exchangeContent.symbolInfo.minprice_24h')}}{{$t('colon')}}</div>
          <div class="data-num">{{minprice_24h}}</div>
      </div>
    </div>
    <div class="info"><span class="nametitle">{{bigCoin}}</span><span class="desctitle">{{$t('exchangeContent.symbolInfo.coindesc')}}</span></div>
    <div class="auction-data">
      <!-- <div class="data-item flex-box">
        <div class="data-tit">{{$t('exchangeContent.symbolInfo.symbolCode')}}{{$t('colon')}}</div>
        <div class="data-info">{{tabCoin}}</div>
      </div> -->
      <!-- <div class="data-item flex-box">
        <div class="data-tit">{{$t('exchangeContent.symbolInfo.maxSupply')}}{{$t('colon')}}</div>
        <div class="data-info">{{symbolInfo.maxsupply}}</div>
      </div>
      <div class="data-item flex-box">
        <div class="data-tit">{{$t('exchangeContent.symbolInfo.supply')}}{{$t('colon')}}</div>
        <div class="data-info">{{symbolInfo.supply}}</div>
      </div> -->
      <div class="data-item flex-box">
        <div class="data-tit">{{$t('exchangeContent.symbolInfo.website')}}{{$t('colon')}}</div>
        <div class="data-info"><a :href="symbolInfo.website">{{symbolInfo.website}}</a></div>
      </div>
      <div class="data-item flex-box">
        <div class="data-tit">{{$t('exchangeContent.symbolInfo.scan')}}{{$t('colon')}}</div>
        <div class="data-info">
          <a href="https://www.iostscan.com/">
            <img  src="/static/img/scan.svg" alt="scan"  width="40px">
          </a>
        </div>
      </div>
      <div class="data-item flex-box">
        <div class="data-tit">{{$t('exchangeContent.symbolInfo.twitter')}}{{$t('colon')}}</div>
        <div class="data-info">
          <a href="https://www.iostscan.com/">
            <img src="/static/img/twitter.svg" alt="twitter" width="25px">
          </a>
        </div>
      </div>
      <div class="data-item flex-box">
        <div class="data-tit">{{$t('exchangeContent.symbolInfo.telegram')}}{{$t('colon')}}</div>
        <div class="data-info">
          <a href="https://www.iostscan.com/">
            <img  src="/static/img/telegram.svg" alt="telegram" width="25px">
          </a>
        </div>
      </div>

      <!-- <div class="data-item flex-box" style="width:100%;padding-left:20px;padding-right:20px;">
        <div class="data-info">{{symbolInfo.desc}}</div>
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
      props: {
        icon:{
          type:String
        },
        bigCoin:{
          type:String
        },
        percent_24h:{
          type:[String,Number]
        },
        newPrice:{
          type:[String,Number]
        },
        priceLasthour:{
          type:[String,Number]
        },
        volumnLasthour:{
          type:[String,Number]
        },
        volumn_24h:{
          type:[String,Number]
        },
        amount_24h:{
          type:[String,Number]
        },
        maxprice_24h:{
          type:[String,Number]
        },
        minprice_24h:{
          type:[String,Number]
        },
        tabCoin:{
          type:[String,Number]
        },
        symbolInfo:{
          type:Object
        }
      },
      data(){
        return {

        }
      },
      methods:{

      },
      computed: {

      },
  }
</script>

<style scoped>
  .token-info{
    padding: 10px;
    margin-top: -15px;
  }
  .token-info__div{
    background: #2C3138;
    border-radius: 5px;
    padding: 5px;
  }
  .token-name img{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 0;
    margin-right: 5px;
  }
  .token-info__div p{
    color:#b9b3b3;
    margin-bottom: 10px;
  }
  .token-info__div span{
    color:#FFF;
    font-size: 16px;
  }
  .page-exchange .auction-data .data-item{
    width: 100%;
    justify-content: space-between;
  }
  .data-num, .data-info{
    /* flex:1; */
    text-align: right;
    font-size: 12px;
    position: relative;
  }
  .data-tit{
    font-size: 12px;
  }
  .info,.nametitle{
    font-size: 14px !important;
    color: #FFA015;
  }
  .data-info img{
    display: inline-block;
    /* width: 50px; */
    /* position: absolute; */
    /* right: 0;
    top: 0; */
  }
</style>

