<template>
    <div class="page-exchange">

        <!-- <div class="auction-data flex-box m-warp">
            <div class="symbolInfo  flex-box ">
                <img :src="icon">
                <div class="info"><span class="nametitle">{{bigCoin}}</span><span class="desctitle" @click="showDesc()">{{$t('exchangeContent.symbolInfo.coindesc')}}</span></div>
            </div>
            <div class="auction-data flex-box" style="flex: 1">
                <div class="data-item flex-box">
                    <div class="data-tit">{{$t('exchangeContent.symbolInfo.newPrice')}}{{$t('colon')}}</div>
                    <div class="data-num upcolor" v-if="percent_24h!='--' && percent_24h>0">{{newPrice}}</div>
                    <div class="data-num downcolor" v-else-if="percent_24h!='--' && percent_24h<0">{{newPrice}}</div>
                    <div class="data-num" v-else-if="percent_24h!='--' && percent_24h==0">{{newPrice}}</div>
                    <div class="data-num" v-else>{{newPrice}}</div>

                </div>
                <div class="data-item flex-box">
                    <div class="data-tit">{{$t('exchangeContent.symbolInfo.lastPrice')}}{{$t('colon')}}</div>
                    <div class="data-num">{{priceLasthour}}</div>
                </div>
                <div class="data-item flex-box">
                    <div class="data-tit">{{$t('exchangeContent.symbolInfo.lastVolumn')}}{{$t('colon')}}</div>
                    <div class="data-num">{{volumnLasthour}}</div>
                </div>
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
        </div>
        <div class="auction-data flex-box m-warp"   v-if="infoShow==1">
            <div class="data-item flex-box">
                <div class="data-tit">{{$t('exchangeContent.symbolInfo.symbolCode')}}{{$t('colon')}}</div>

                <div class="data-info">{{tabCoin}}</div>

            </div>
            <div class="data-item flex-box">
                <div class="data-tit">{{$t('exchangeContent.symbolInfo.maxSupply')}}{{$t('colon')}}</div>

                <div class="data-info">{{symbolInfo.maxsupply}}</div>

            </div>
            <div class="data-item flex-box">
                <div class="data-tit">{{$t('exchangeContent.symbolInfo.supply')}}{{$t('colon')}}</div>

                <div class="data-info">{{symbolInfo.supply}}</div>

            </div>
            <div class="data-item flex-box">
                <div class="data-tit">{{$t('exchangeContent.symbolInfo.website')}}{{$t('colon')}}</div>

                <div class="data-info"><a :href="symbolInfo.website">{{symbolInfo.website}}</a></div>

            </div>

            <div class="data-item flex-box" style="width:100%;padding-left:20px;padding-right:20px;">


                <div class="data-info">{{symbolInfo.desc}}</div>

            </div>
        </div> -->
        <div class="realtime-box flex-box m-warp">
            <div class="real-item-ff">
                <div id="real-top-item-2" class="real-item real-sell real-new">
                    <div class="real-item-tit">{{$t('exchangeContent.tokens')}}</div>
                    <!-- <div class="real-con">
                        <div class="real-head flex-box">
                            <div class="real-head-item" style="flex:1;text-align: right">
                                {{$t('exchangeContent.tokens')}}
                            </div>
                            <div class="real-head-item real-num" style="flex:2;text-align: right"> {{$t('exchangeContent.price')}}({{this.$store.state.coreSymbol}})</div>
                            <div class="real-head-item real-amount" style="flex:1;text-align: right">{{$t('exchangeContent.percent')}}</div>
                        </div>
                        <div class="real-list">
                            <div v-if="tokenList.length>0">
                                <div class="list-token flex-box" :class="{'active':tabCoin==item.symbol}" v-for="(item,index) in tokenList" :key="index"
                                     @click="changeSymbols(item.symbol)">
                                    <div class="item"><img width="20px" height="20px" style="margin-top:8px;margin-left: 8px;border-radius:15px"
                                                           :src="item.icon" alt=""></div>
                                    <div class="item" style=" color:#fff;margin-left: 8px;width:40px">{{item.name}}
                                    </div>
                                    <div class="item real-num"
                                         :class="{'buy-item':item.percent_24h!=null && item.percent_24h>0,'sell-item':item.percent_24h!=null && item.percent_24h<0}">
                                        {{transNum(item.price)}}
                                    </div>
                                    <div class="item real-amount"
                                         :class="{'buy-item':item.percent_24h!=null && item.percent_24h>0,'sell-item':item.percent_24h!=null && item.percent_24h<0}">
                                        {{item.percent_24h == null ? '--' : item.percent_24h+'%'}}
                                    </div>
                                </div>
                            </div>
                            <div class="noData" v-else>{{$t('nodata')}}</div>
                        </div>
                    </div> -->

                   <TokenInfo 
                   :icon="icon" 
                   :bigCoin="bigCoin" 
                   :percent_24h="percent_24h" 
                   :newPrice="newPrice"
                   :priceLasthour="priceLasthour"
                   :volumnLasthour="volumnLasthour"
                   :volumn_24h="volumn_24h"
                   :amount_24h="amount_24h"
                   :maxprice_24h="maxprice_24h"
                   :minprice_24h="minprice_24h"
                   :tabCoin="tabCoin"
                   :symbolInfo="symbolInfo"
                   />
                </div>
                <div class="real-item real-sell real-new">
                    <div class="real-item-tit">{{$t('exchangeContent.newList')}}</div>
                    <div class="real-con">
                        <div class="real-head flex-box">
                            <div class="real-head-item real-price">
                                {{$t('exchangeContent.price')}}({{this.$store.state.coreSymbol}})
                            </div>
                            <div class="real-head-item real-num">{{$t('exchangeContent.volumn')}}</div>
                            <div class="real-head-item real-amount">{{$t('exchangeContent.time')}}</div>
                        </div>
                        <div class="real-list">
                            <div v-if="hisList.length>0">
                                <div class="list-token flex-box" v-for="(item,index) in hisList" :key="index"
                                     @click="openPop(item.id)" style="line-height: 20px;height: 20px">
                                    <div class="item real-price" :class="{'buy-item':item.buy==1}">{{item.price}}</div>
                                    <div class="item real-num">{{item.num|transNum}}</div>
                                    <div class="item real-amount">{{item.tradetime|formatTime("h:m:s")}}</div>
                                </div>
                            </div>
                            <div class="noData" v-else>{{$t('nodata')}}</div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="flex-box" style="flex-direction: column;min-height: 966px">
                <div style="width: 100%;height: 100%;border-radius: 8px;background: #000;">
                    <div id="tv_chart_container" class="chart" data-theme="dark" style="background: #000; "></div>
                </div>
                <div class="exchange-operate flex-box">
                    <div class="operate-item">
                        <div class="operate-tit flex-box">
                            <div class="tit-con flex-1">{{$t('exchangeContent.buy')}} {{bigCoin}}</div>
                            <div class="balance-box">{{$t('exchangeContent.balance')}}{{$t('colon')}}{{parseFloat(iostBalance).toFixed(2)}} {{$store.state.coreSymbol}}</div>
                        </div>
                        <div class="operate-con">
                            <div class="operate-inputBox flex-box">
                                <div class="inpit-name">{{$t('exchangeContent.buyPrice')}}</div>
                                <div class="input-box flex-box">
                                    <InputNumber  :min="0" v-model="buyPrice" :step="0.1" @on-blur="bullPricefn" @on-focus="focusBuyprice()"></InputNumber>
                                    <div class="input-coin">IOST</div>
                                </div>
                            </div>
                            <div class="operate-inputBox flex-box">
                                <div class="inpit-name">{{$t('exchangeContent.buyVolumn')}}</div>
                                <div class="input-box flex-box">
                                    <input type="number" name="buyNumb" v-model="buyNumb" v-enter-number2 v-on:blur="buyNumfn" v-on:focus="focusBuynum()">
                                    <div class="input-coin">{{bigCoin}}</div>
                                </div>
                            </div>
                            <div class="operate-inputBox flex-box">
                                <div class="inpit-name">{{$t('exchangeContent.tradeAmount')}}</div>
                                <div class="input-box flex-box">
                                    <input type="number" name="buyTotal" v-model="buyTotal" v-enter-number2 v-on:blur="buyTotalfn" v-on:focus="focusBuytal()">
                                    <div class="input-coin">IOST</div>
                                </div>
                            </div>
                            <div class="flex-box buy-percent">
                                <div class="percent"  :class="{'active':buyPercent==25 || buyPercent==50 || buyPercent==75 || buyPercent==100}"  @click="setBuyPercent(25)">
                                  <p class="line"></p>
                                  <span> 25%</span>
                                </div>
                                <div class="percent" :class="{'active':buyPercent==50 || buyPercent==75 || buyPercent==100}"  @click="setBuyPercent(50)">
                                    <p class="line"></p>
                                    <span>50%</span>
                                </div>
                                <div class="percent" :class="{'active':buyPercent==75 || buyPercent==100}"  @click="setBuyPercent(75)">
                                    <p class="line"></p>
                                    <span>75%</span> 
                                </div>
                                <div class="percent" :class="{'active':buyPercent==100}"  @click="setBuyPercent(100)">
                                    <p class="line"></p>
                                    <span>100%</span>
                                </div>
                            </div>
                            <div class="operate-btn disabled" v-if="!$store.state.currentAccount">{{$t('exchangeContent.loginToTrade')}}</div>
                            <div class="operate-btn" @click="buyConfirm()" v-else>{{$t('exchangeContent.buy')}}</div>
                        </div>
                    </div>
                    <div class="operate-item operate-sell">
                        <div class="operate-tit flex-box">
                            <div class="tit-con flex-1">{{$t('exchangeContent.sell')}} {{bigCoin}}</div>
                            <div class="balance-box">{{$t('exchangeContent.balance')}}{{$t('colon')}}{{parseFloat(symbolBalance).toFixed(2)}} {{bigCoin}}</div>
                        </div>
                        <div class="operate-con">
                            <div class="operate-inputBox flex-box">
                                <div class="inpit-name">{{$t('exchangeContent.sellPrice')}}</div>
                                <div class="input-box flex-box">
                                    <InputNumber :min="0" v-model="sellPrice" :step="0.1" @on-blur="sellPricefn" @on-focus="focusSellprice()"></InputNumber>
                                    <div class="input-coin">IOST</div>
                                </div>
                            </div>
                            <div class="operate-inputBox flex-box">
                                <div class="inpit-name">{{$t('exchangeContent.sellVolumn')}}</div>
                                <div class="input-box flex-box">
                                    <input type="number" name="sellNumb" v-model="sellNumb" v-enter-number2 v-on:blur="sellNumfn" v-on:focus="focusSellnum()">
                                    <div class="input-coin">{{bigCoin}}</div>
                                </div>
                            </div>
                            <div class="operate-inputBox flex-box">
                                <div class="inpit-name">{{$t('exchangeContent.tradeAmount')}}</div>
                                <div class="input-box flex-box">
                                    <input type="number" name="sellTotal" v-model="sellTotal" v-enter-number2 v-on:blur="sellTotalfn" v-on:focus="focusSelltal()">
                                    <div class="input-coin">IOST</div>
                                </div>
                            </div>
                            <div class="flex-box sell-percent">
                                <div class="percent"  :class="{'active':sellPercent==25 || sellPercent==50 ||sellPercent==75 ||sellPercent==100}"  @click="setSellPercent(25)">
                                    <p class="line"></p>
                                    <span>25%</span>
                                </div>
                                <div class="percent" :class="{'active':sellPercent==50 || sellPercent==75 ||sellPercent==100 }"  @click="setSellPercent(50)">
                                    <p class="line"></p>
                                    <span> 50%</span>
                                </div>
                                <div class="percent" :class="{'active':sellPercent==75 || sellPercent==100 }"  @click="setSellPercent(75)">
                                    <p class="line"></p>
                                    <span>75%</span>
                                </div>
                                <div class="percent" :class="{'active':sellPercent==100}"  @click="setSellPercent(100)">
                                    <p class="line"></p>
                                    <span>100%</span>
                                </div>
                            </div>

                            <div class="operate-btn disabled" v-if="!$store.state.currentAccount">{{$t('exchangeContent.loginToTrade')}}</div>

                            <div class="operate-btn" @click="sellConfirm()" v-else>{{$t('exchangeContent.sell')}}</div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="real-item-ff real-item-ff-right">
                <div id="real-top-item" class="real-item real-sell">
                    <div class="real-item-tit">{{$t('exchangeContent.sell')}}</div>
                    <div class="real-con">
                        <div class="real-head flex-box">
                            <div class="real-head-item real-price">{{$t('exchangeContent.price')}}</div>
                            <div class="real-head-item real-num">{{$t('exchangeContent.volumn')}}</div>
                            <div class="real-head-item real-amount">{{$t('exchangeContent.amount')}}</div>
                        </div>
                        <div class="real-list">
                            <div v-if="sellList.length>0">
                                <div class="list flex-box" v-for="(item,index) in sellList" :key="index"
                                     @click="buySelect(item.price,item.balance,item.amount)">
                                    <div class="item real-price">{{item.price|transNum}}</div>
                                    <div class="item real-num">{{item.balance|transNum}}</div>
                                    <div class="item real-amount">{{item.amount|transNum}}</div>
                                    <!-- <div class="list-bg" :style="'width:'+item.percentile+'%'"></div> -->
                                </div>
                            </div>
                            <div class="noData" v-else>{{$t('nodata')}}</div>
                        </div>
                    </div>
                </div>
                <div class="real-item">
                    <div class="real-item-tit">{{$t('exchangeContent.buy')}}</div>
                    <div class="real-con">
                        <div class="real-head flex-box">
                            <div class="real-head-item real-price">{{$t('exchangeContent.price')}}</div>
                            <div class="real-head-item real-num">{{$t('exchangeContent.volumn')}}</div>
                            <div class="real-head-item real-amount">{{$t('exchangeContent.amount')}}</div>
                        </div>
                        <div class="real-list">
                            <div v-if="buyList.length>0">
                                <div class="list flex-box" v-for="(item,index) in buyList" :key="index"
                                     @click="sellSelect(item.price,item.balance,item.amount)">
                                    <div class="item real-price buy-item" >{{item.price|transNum}}</div>
                                    <div class="item real-num">{{item.balance|transNum}}</div>
                                    <div class="item real-amount">{{item.amount|transNum}}</div>
                                    <!-- <div class="list-bg" :style="'width:'+item.percentile+'%'"></div> -->
                                </div>
                            </div>
                            <div class="noData" v-else>{{$t('nodata')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 记录 -->
        <div class="m-record">
            <div class="record-box m-warp">
                <div class="record-con">
                    <div class="record-tab show flex-box">
                        <div class="tab-item" :class="{'tab-act':recordTab == 'now'}" @click="tabRecord('now')">{{$t('exchangeContent.list.myOrders')}}</div>
                        <div class="tab-item" :class="{'tab-act':recordTab == 'old'}" @click="tabRecord('old')">{{$t('exchangeContent.list.hisOrders')}}</div>
                        <div class="tab-item refresh" @click="tabRecord(recordTab)"><img  src="/static/img/refresh.svg" alt=""></div>
                    </div>
                    <!-- 当前委托 -->
                    <div class="record-betting record-tab-item" :class="{'record-scroll':$store.state.currentAccount}" v-if="recordTab == 'now'">
                        <div class="query-box flex-box">
                            <div class="query-item">
                                <div>
                                    {{$t('exchangeContent.list.orderTime')}}
                                </div>
                                <div class="querytitle"><DatePicker v-model="querytime" format="yyyy-MM-dd" type="daterange"></DatePicker></div>
                            </div>
                            <div class="query-item">
                                <div class="querytitle">{{$t('exchangeContent.list.direction')}}</div>
                                <div class="querytitle">
                                    <i-select v-model="direction" :placeholder="$t('select.placeholder')">
                                        <i-option value="">{{$t('all')}}</i-option>
                                        <i-option value="1">{{$t('exchangeContent.buy')}}</i-option>
                                        <i-option value="0">{{$t('exchangeContent.sell')}}</i-option>
                                    </i-select >
                                </div>

                                <div class="querytitle">{{$t('exchangeContent.list.status')}}</div>
                                <div class="querytitle">
                                    <i-select  v-model="status" :placeholder="$t('select.placeholder')">
                                        <i-option value="">{{$t('all')}}</i-option>
                                        <i-option value="-1">{{$t('exchangeContent.list.statusf1')}}</i-option>
                                        <i-option value="0">{{$t('exchangeContent.list.status0')}}</i-option>
                                        <i-option value="1">{{$t('exchangeContent.list.status1')}}</i-option>
                                        <i-option value="2">{{$t('exchangeContent.list.status2')}}</i-option>
                                        <i-option value="3">{{$t('exchangeContent.list.status3')}}</i-option>
                                    </i-select >
                                </div>
                            </div>
                            <div class="operate-btn"  @click="getOrders()">{{$t('exchangeContent.list.query')}}</div>

                        </div>
                        <div class="record-head flex-box">
                            <div class="head-item item-coin">{{$t('exchangeContent.list.symbolType')}}</div>
                            <div class="head-item item-type">{{$t('exchangeContent.list.direction')}}</div>
                            <div class="head-item item-time">{{$t('exchangeContent.list.orderTime')}}</div>
                            <div class="head-item item-price">{{$t('exchangeContent.list.orderPrice')}}({{this.$store.state.coreSymbol}})</div>
                            <div class="head-item item-numb">{{$t('exchangeContent.list.orderVolumn')}}</div>
                            <div class="head-item item-price">{{$t('exchangeContent.list.finishPrice')}}({{this.$store.state.coreSymbol}})</div>
                            <div class="head-item item-num">{{$t('exchangeContent.list.finishVolumn')}}({{this.bigCoin}})</div>
                            <div class="head-item item-amount">{{$t('exchangeContent.list.finishAmount')}}({{this.$store.state.coreSymbol}})</div>
                            <div class="head-item item-status">{{$t('exchangeContent.list.status')}}</div>
                            <div class="head-item item-operate">{{$t('exchangeContent.list.operation')}}</div>
                            <div class="head-item item-hx">{{$t('exchangeContent.list.orderHash')}}</div>
                        </div>
                        <div class="record-list" v-if="$store.state.currentAccount && orders.length>0">
                            <div class="record-list-item flex-box" v-for="(item,index) in orders" :key="index">
                                <div class="list-item item-coin">{{tabCoin}}</div>
                                <div class="list-item item-type buy-item" v-if="item.buy==1">{{$t('exchangeContent.buy')}}</div>
                                <div class="list-item item-type sell-item" v-if="item.buy==0">{{$t('exchangeContent.sell')}}</div>
                                <div class="list-item item-time">{{item.time|formatTime2}}</div>
                                <div class="list-item item-price">{{item.price|float8}}</div>
                                <div class="list-item item-numb">{{item.totalNum|float8}}</div>
                                <div class="list-item item-price">{{getAvgPrice(item.finishAmount,item.finishNum)}}</div>
                                <div class="list-item item-num">{{item.finishNum|float8}}</div>
                                <div class="list-item item-amount">{{item.finishAmount|float8}}</div>
                                <div class="list-item item-status" v-if="item.status==-1">{{$t('exchangeContent.list.statusf1')}}</div>
                                <div class="list-item item-status" v-if="item.status==0">{{$t('exchangeContent.list.status0')}}</div>
                                <div class="list-item item-status" v-if="item.status==1">{{$t('exchangeContent.list.status1')}}</div>
                                <div class="list-item item-status" v-if="item.status==2">{{$t('exchangeContent.list.status2')}}</div>
                                <div class="list-item item-status" v-if="item.status==3">{{$t('exchangeContent.list.status3')}}</div>
                                <div class="list-item item-operate">
                                    <div class="operate-btn" v-if="item.status==-1||item.status==0||item.status==1" @click="cancelOrder(tabCoin,item.id)">{{$t('exchangeContent.list.status3')}}</div>
                                </div>
                                <a :href="'https://www.iostabc.com/tx/'+item.tradeHx" class="head-item item-hx" target='_blank'>{{$t('exchangeContent.list.query')}}</a>
                            </div>

                        </div>
                        <div class="noData" v-if="orders.length==0 && $store.state.currentAccount">{{$t('nodata')}}</div>
                        <div class="no-login" v-if="!$store.state.currentAccount">{{$t('exchangeContent.loginToSee')}}</div>
                    </div>
                    <!-- 历史委托 -->
                    <div class="record-betting record-tab-item record-old" :class="{'record-scroll':$store.state.currentAccount}" v-if="recordTab == 'old'">
                        <div class="record-head flex-box">
                            <div class="head-item item-coin">{{$t('exchangeContent.list.symbolType')}}</div>
                            <div class="head-item item-type">{{$t('exchangeContent.list.direction')}}</div>
                            <div class="head-item item-time">{{$t('exchangeContent.list.finishTime')}}</div>
                            <div class="head-item item-price">{{$t('exchangeContent.list.finishPrice')}}({{this.$store.state.coreSymbol}})</div>
                            <div class="head-item item-num">{{$t('exchangeContent.list.finishVolumn')}}({{this.bigCoin}})</div>
                            <div class="head-item item-amount">{{$t('exchangeContent.list.finishAmount')}}({{this.$store.state.coreSymbol}})</div>
                            <div class="head-item item-user">{{$t('exchangeContent.list.toUser')}}</div>
                            <div class="head-item item-fee">{{$t('exchangeContent.list.fee')}}</div>
                            <div class="head-item item-hx">{{$t('exchangeContent.list.finishHash')}}</div>
                        </div>
                        <div class="record-list" v-if="$store.state.currentAccount && his.length>0">
                            <div class="record-list-item flex-box" v-for="(item,index) in his" :key="index">
                                <div class="list-item item-coin">{{item.symbol}}</div>
                                <div class="list-item item-type buy-item" v-if="item.buy==1">{{$t('exchangeContent.buy')}}</div>
                                <div class="list-item item-type sell-item" v-if="item.buy==0">{{$t('exchangeContent.sell')}}</div>
                                <div class="list-item item-time">{{item.finishTime|formatTime2}}</div>
                                <div class="list-item item-price">{{item.price|float8}}</div>
                                <div class="list-item item-num">{{item.finishNum|float8}}</div>
                                <div class="list-item item-amount">{{item.finishAmount|float8}}</div>
                                <div class="list-item item-user">{{item.toUser}}</div>
                                <div class="head-item item-fee">{{item.fee}} {{item.feesymbol}}</div>
                                <a :href="'https://www.iostabc.com/tx/'+item.tradeHx" class="head-item item-hx" target='_blank'>{{$t('exchangeContent.list.query')}}</a>
                            </div>
                        </div>

                        <div class="noData" v-if="his.length==0 && $store.state.currentAccount">{{$t('nodata')}}</div>
                        <div class="no-login" v-if="!$store.state.currentAccount">{{$t('exchangeContent.loginToSee')}}</div>
                    </div>
                    <div class="page" v-if="maxPage>1">
                        <span>{{showTotalRecords()}}</span>
                        <span v-if="maxPage>1" :class="{'link':currentPage>1}" @click="setPage(1)">{{$t('page.first')}}</span>
                        <span v-if="maxPage>1" :class="{'link':currentPage>1}" @click="setPage(currentPage-1)">{{$t('page.preview')}}</span>
                        <span v-if="maxPage>1" :class="{'link':currentPage!=i}" v-for="i in maxPage" @click="setPage(i)">{{i}}</span>
                        <span v-if="maxPage>1" :class="{'link':currentPage<maxPage} "  @click="setPage(currentPage+1)">{{$t('page.next')}}</span>
                        <span v-if="maxPage>1" :class="{'link':currentPage<maxPage} "  @click="setPage(maxPage)">{{$t('page.last')}}</span>
                    </div>
                </div>
            </div>
        </div>
        <Modal v-model="realModal" :mask-closable="false" width="894" footer-hide class="payout-modal header-modal">
            <realPop :info="realInfo" :coin="tabCoin" v-if="realModal"></realPop>
        </Modal>
    </div>
</template>
<script>
    import Games from '@/components/games.vue';
    import socketio from "socket.io-client";
    import api from "@/config/api.js";
    import {clearAllInterval} from '@/util/common.js'
    import realPop from '@/components/payout/realPop.vue'
    import TokenInfo from './TokenInfo.vue';

    const TradingView = window.TradingView

    export default {
        components: {
            Games,
            realPop,
            TokenInfo
        },

        data() {
            return {
                realInfo:[],
                realModal: false,
                volumnLasthour:'--',//上一小时成交数量
                priceLasthour: '--',//上一小时成交价格
                percent_24h:'--',//24小时涨跌幅
                amount_24h:'--',//24小时成交额
                maxprice_24h:'--',//24小时最高价
                minprice_24h:'--',//24小时最低价
                volumn_24h:'--',//24小时成交数量
                newPrice: '--',
                icon:localStorage.getItem('symbolICON')==null?'/static/img/logo/PPC.png':localStorage.getItem('symbolICON'),
                digit: localStorage.getItem('symbolDigit')==null?8:localStorage.getItem('symbolDigit') ,

                buyList:[],
                sellList:[],
                hisList:[],
                tokenList:[],
                recordTab: 'now', //记录切换
                buyID: '',
                buyPrice: parseFloat(0).toFixed(8),
                buyNumb: parseFloat(0).toFixed(8),
                buyTotal: parseFloat(0).toFixed(8),
                sellID: '',
                sellPrice: parseFloat(0).toFixed(8),
                sellNumb: parseFloat(0).toFixed(8),
                sellTotal: parseFloat(0).toFixed(8),
                socket: null,
                globalSocket:null,
                connect: 0,
                orders:[],
                his:[],
                coin: this.$store.state.coreSymbol,
                tabCoin: localStorage.getItem("symbolName")==null?'hello_iost':localStorage.getItem("symbol"), //支付类型
                bigCoin: (localStorage.getItem("symbolName")==null?'HELLO_IOST':localStorage.getItem("symbolName")),
                lastCoin:'',
                isFocusBuy: '',
                isFocusSell: '',
                iostBalance: 0,
                symbolBalance: 0,
                getWinInfo:'',
                internal:[],
                symbolInfo:{},
                widget:null,
                buyPercent:0,
                sellPercent:0,
                setDefaultPrice:0,
                infoShow:0,
                pageSize:20,//每页显示记录数
                maxPage:1,//最大页数
                currentPage:1,//当前页
                totalRecords:0, //总记录条数
                direction:"",
                status:"",
                querytime:[],
                firstLoadOrder:false
            }
        },
        async mounted(){
            if(this.tokenList.length==0)
            await this.getTokens();
            let istart=location.href.indexOf("/symbol/")

            if(istart>0){
                let symbol=location.href.substr(istart+8).replace(/[\/|\\]+/,'')
                //console.log(location.href,istart,this.tokenList,symbol)
                for(let i = 0;i<this.tokenList.length;i++){

                    if(this.tokenList[i].symbol == symbol){

                        this.tabCoin=symbol
                        //console.log("created",this.tabCoin)
                        break
                    }
                }
            }
            this.createTv();
            // if(this.$i18n.t('tv_lang') == "zh"){
            //     this.$Message.info({
            //         duration: 120,
            //         closable: true,
            //         content: "您好，IOSTDex 不向来自中国用户提供服务。<br/> <br/>我们无意诱使任何人违反任何地方或国家法律。玩家的唯一责任是参考其管辖范围内的法律，以确定行为的合法性。",
            //     })
            // }
            //console.log("mounted",this.tabCoin)
            this.init(this.tabCoin);
        },
        created(){
            this.internal.push(setInterval(this.getTokens,3000));
            this.internal.push(setInterval(this.getBalances,3000));
            // this.globalSocket = socketio(api.globalSocket);
            // this.globalSocket.on('PubMessage', (result) => {
            //     //console.log(result)
            //     if (result.hasOwnProperty('price')) {
            //         if (!isNaN(parseFloat(result.price))) {
            //             this.$store.state.betPrice = parseFloat(result.price)
            //         }
            //     }
            // })
            //console.log(location.href)
        },
        computed: {
            getLang(){
                return this.$i18n.t('tv_lang');
            }
        },
        methods: {

            showTotalRecords(){
                let msg= this.$i18n.t('page.totalRecords').replace(/-\+totalRecords\+-/g, this.totalRecords);
                //console.log(msg)
                return msg;
            },
            showDesc(){
                if(this.infoShow==1)
                    this.infoShow=0
                else
                    this.infoShow=1
            },
            resetData(){
                this.symbolBalance=0;
                this.buyPrice=0;
                this.sellPrice=0;
                this.buyNumb=0;
                this.sellNumb=0;
                this.buyTotal=0;
                this.sellTotal=0;
                this.buyPercent=0;
                this.sellPercent=0;
                this.setDefaultPrice=0
                this.symbolInfo={}
                this.orders=[]
                this.hisList=[]
            },
            setSellPercent(percent){
                this.sellPercent=percent;
                this.sellNumb=(this.symbolBalance*percent/100).toFixed(8)
                this.isFocusSell = 'numb'
            },
            setBuyPercent(percent){
                this.buyPercent=percent;
                this.buyTotal=(this.iostBalance*percent/100).toFixed(8)
                this.isFocusBuy = 'total'
            },
            createTv(){
                const this_vue = this
                this_vue.widget = new TradingView.widget({
                    debug: false,
                    fullscreen: false,
                    autosize:true,
                    datafeed : new Datafeeds.UDFCompatibleDatafeed(api.chart ,10000),
                    timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,
                    symbol: this.tabCoin,
                    interval:localStorage.getItem('chart_resolution')||'15',
                    theme: 'Dark',
                    container_id: "tv_chart_container",
                    library_path: "/charting_library/",
                    // custom_css_url:"/static/css/white.css",
                    locale: 'en',
                    drawings_access:{type:'black',tools: [{name:"Regression Trend"}]},
                    loading_screen:{backgroundColor:"#000"},
                    overrides:{
                        "volumePaneSize":"medium",

                        "mainSeriesProperties.showCountdown": true,

                        "paneProperties.legendProperties.showLegend":false
                    },
                    disabled_features: [
                        "header_symbol_search",
                        "header_settings",
                        "header_chart_type",
                        "volume_force_overlay","symbol_search_hot_key",
                        "header_resolutions", "left_toolbar",
                        "header_undo_redo", "header_screenshot",
                        "header_compare", "compare_symbol",
                        "border_around_the_chart",
                        "header_saveload",
                        "control_bar", "timeframes_toolbar",
                        "go_to_date",
                        "adaptive_logo",
                        "display_market_status",
                        "legend_context_menu",
                        "use_localstorage_for_settings",
                        'widget_logo',
                        'adaptive_logo'
                    ],
                    // toolbar_bg:"#ffffff",
                    enabled_features:["hide_left_toolbar_by_default", "move_logo_to_main_pane","hide_last_na_study_output"],
                });
                let resolutionBtn={}
                this_vue.widget.onChartReady(function(){
                    this_vue.widget.chart().createStudy('Moving Average',false,true,[5,"close",0],null,{'Plot.color':'#965fc4'});
                    this_vue.widget.chart().createStudy('Moving Average',false,true,[10,"close",0],null,{'Plot.color':'#84aad5'});
                    this_vue.widget.chart().createStudy('Moving Average',false,true,[30,"close",0],null,{'Plot.color':'#55b263'});
                    this_vue.widget.chart().createStudy('Moving Average',false,true,[60,"close",0],null,{'Plot.color':'#b7248a'});
                    var btnList = ['1m','5m','15m','30m','1h','4h','1D','1W','1M'];
                    var resolutionList = {'1m':'1', '5m':'5', '15m':'15', '30m':'30', '1h':'60', '4h':'240', '1D':'D', '1W':'W', '1M':'M'}
                    btnList.forEach(function(title){
                        resolutionBtn['btn'+resolutionList[title]] = this_vue.widget.createButton()
                            .attr('title', title)
                            .on('click', function (e) {
                                clearSelected()
                                localStorage.setItem('chart_resolution',resolutionList[title])
                                let cls= e.target.parentNode.parentNode.classList;
                                if((cls[0]+"").startsWith("group"))
                                    cls = e.target.parentNode.classList;
                                cls.add("selected")
                                this_vue.widget.chart().resetData()
                                this_vue.widget.chart().setResolution(resolutionList[title], function onReadyCallback() {});
                                if(resolutionList[title] == 1 ||resolutionList[title] == 5 ){
                                    this_vue.widget.chart().setChartType(3);
                                }else{
                                    this_vue.widget.chart().setChartType(1);
                                }
                            })
                            .append('<span>'+title+'</span>');
                    })
                    let actBtn = localStorage.getItem('chart_resolution')||'15'
                    resolutionBtn['btn'+actBtn][0].parentNode.classList.add('selected')
                })
                function clearSelected(){
                    for(var k in resolutionBtn){
                        resolutionBtn[k][0].parentNode.classList.remove('selected')
                    }
                }
            },
            getAvgPrice(amount,num){
                if(num==null||num==0||num==""||num=="null")
                    return "--"
                else
                    return this.transNum((amount/num).toFixed(8))
            },
            transNum(num){
                if(num==null){
                    return "--"
                }else
                    return num;
            },
            init(coin){



                this.changeSymbols(coin);




            },
            //点击切换币种后执行
            changeSymbols(Symbols){
                //console.log(Symbols,this.lastCoin)
                if(this.lastCoin==Symbols)
                    return
                this.lastCoin=Symbols

                this.resetData();
                this.tabCoin = Symbols;

                this.getOrders();

                let tokens = this.tokenList;
                for(let i = 0;i<tokens.length;i++){
                    if(tokens[i].symbol == Symbols){
                        localStorage.setItem('symbol',Symbols)
                        localStorage.setItem('symbolName',tokens[i].name)
                        localStorage.setItem('symbolICON', tokens[i].icon);
                        localStorage.setItem('symbolDigit', tokens[i].digit);

                        this.icon = tokens[i].icon;

                        this.bigCoin = tokens[i].name
                        this.digit = tokens[i].digit
                        break;
                    }
                }
                try {
                    this.widget.chart().resetData();
                    this.widget.chart().setSymbol(Symbols, function () {})
                }catch (e) {
                    console.warn(e);
                }
                if(this.socket!=null) {
                    this.socket.close();
                    this.socket=null;
                }

                this.initSocket()

            },
            // initSocket(){
            //     //this.getOrders()

            //     this.socket = socketio(api.globalSocket+'trade_'+ this.tabCoin);
            //     console.log(api.globalSocket+'trade_'+ this.tabCoin)
            //     this.TradeMessage();
            // },
            initSocket() {
              
                this.socket = socketio(api.globalSocket + 'trade_' + this.tabCoin);
                // this.socket = io(api.globalSocket + 'trade_' + this.tabCoin, {transports: ['websocket']});
                console.log('socketio---',api.globalSocket+'trade_'+ this.tabCoin)
                console.log('socketio---000',this.socket)
                socketio.connect()
                this.socket.on('connect', () => {
                    console.log('Socket connected:', this.socket.id);
                    this.TradeMessage();  // Start listening to the trade messages after successful connection
                });

                this.socket.on('connect_error', (err) => {
                    console.error('Socket connection error:', err);
                });
            },
            async getBalances(){
                //console.log(this.bigCoin)
                if(this.tabCoin!=this.$store.state.defaultSymbol) {
                    await this.$store.dispatch('getSymbolBalance', {symbol: this.tabCoin});
                }
                if (this.$store.state.currentAccount!=null&&this.$store.state.currentAccount.hasOwnProperty(this.tabCoin)) {
                    this.symbolBalance = this.$store.state.currentAccount[this.tabCoin];
                    //console.log(this.symbolBalance )
                }else
                    this.symbolBalance="0"
                if (this.$store.state.currentAccount!=null&&this.$store.state.currentAccount.hasOwnProperty("IOST")) {
                    this.iostBalance = this.$store.state.currentAccount.IOST;

                }else
                    this.iostBalance="0"

            },
            TradeMessage() {
                this.volumnLasthour = '--'
                this.priceLasthour = '--'
                this.newPrice = '--'
                this.percent_24h='--'
                this.amount_24h='--'
                this.maxprice_24h='--'//24小时最高价
                this.minprice_24h='--'//24小时最低价
                this.volumn_24h='--'//24小时成交数量
                this.buyList=[]
                this.sellList=[]
                this.hisList=[]
                console.log('socketio---TradeMessage',this.socket)
                this.socket.on('TradeMessage', (result) => {
                    //this.symbolBalance = this.$store.state.currentAccount[this.bigCoin];

                    // console.log("TradeMessage");
                    // console.log(result);
                    for(var key in result){
                        this.symbolInfo[key]=result[key];
                    }
                    //={desc:result.desc?result.desc:'',website:result.website?result.website:'',maxsupply:result.maxsupply?result.maxsupply:'',supply:result.supply?result.supply:''}
                    if (result.volumn_lasthour) {
                        this.volumnLasthour = parseFloat(result.volumn_lasthour).toFixed(8) +" " +this.bigCoin;
                    }else{

                    }
                    if (result.price_lasthour) {
                        this.priceLasthour = parseFloat(result.price_lasthour).toFixed(8)+" " + this.$store.state.coreSymbol
                    }

                    //新增加
                    if (result.percent_24h) {

                        this.percent_24h = result.percent_24h
                    }
                    if (result.amount_24h) {
                        this.amount_24h = parseFloat(result.amount_24h).toFixed(8)+" " + this.$store.state.coreSymbol
                    }
                    if (result.maxprice_24h) {
                        this.maxprice_24h = parseFloat(result.maxprice_24h).toFixed(8)+" " + this.$store.state.coreSymbol
                    }
                    if (result.minprice_24h) {
                        this.minprice_24h = parseFloat(result.minprice_24h).toFixed(8)+" " + this.$store.state.coreSymbol
                    }
                    if (result.volumn_24h) {
                        this.volumn_24h = parseFloat(result.volumn_24h).toFixed(8)+" " + this.bigCoin
                    }
                    //新增结束

                    if (result.price) {
                        this.newPrice = parseFloat(result.price).toFixed(8)+" " + this.$store.state.coreSymbol;
                        if(this.setDefaultPrice==0){
                            this.sellPrice=parseFloat(result.price).toFixed(8);

                            this.buyPrice=parseFloat(result.price).toFixed(8);
                            this.setDefaultPrice=1
                        }
                    }else{

                    }
                    if (result.hasOwnProperty('buy')) {
                        this.buyList = result.buy;
                        // console.log(this.buyList);
                    }
                    if (result.hasOwnProperty('sell')) {

                        this.sellList = result.sell.sort(function(a,b){return b.price-a.price});
                        // console.log(this.sellList);
                    }
                    if (result.hasOwnProperty('his')) {
                        console.log(...result.his.sort(function(a,b){return b.id-a.id}))
                        result.his.sort(function(a,b){return a.id-b.id})
                        
                        for(let i=0;i<result.his.length;i++){
                            //将result排序。


                            //console.log(this.hisList,result.his[i],this.hisList.indexOf(result.his[i]))
                            if(JSON.stringify(this.hisList).indexOf(JSON.stringify(result.his[i]))==-1){

                                this.hisList.unshift(result.his[i]);
                            }
                        }
                        //this.hisList = result.his;
                    }
                })
            },

            /**
             * 撤单
             */
            async cancelOrder(symbol,id) {
                await this.$store.dispatch('cancelOrder', {symbol: symbol,id:id}).then((result) => {
                    this.$Modal.remove()
                    this.$Message.success({
                        duration: 3,
                        closable: true,
                        content:this.$i18n.t('exchangeContent.info.success.cancel')
                    })
                }).catch((err) => {
                    this.$Modal.remove()
                    if (err.hasOwnProperty("code")&&err.code === 402) { // 拒绝签名
                        this.$Message.warning({
                            duration: 3,
                            closable: true,
                            content: this.$i18n.t('eosMsg.rejected')
                        })
                    } else {
                        //let error = JSON.parse(err).error
                        if (err.hasOwnProperty('details') && err.details.length > 0) {
                            this.$Message.warning({
                                duration: 3,
                                closable: true,
                                content: err.details[0].message
                            })
                        } else if (err.hasOwnProperty('what')) { // 其它信息
                            this.$Message.warning({
                                duration: 3,
                                closable: true,
                                content: err.what
                            })
                        } else {
                            this.$Message.warning({
                                duration: 3,
                                closable: true,
                                content:err
                            })
                        }
                    }
                })
            },
            //setPage设置页码
            setPage(iPage){

                this.currentPage=iPage;

                if(this.recordTab =="now")
                    this.getOrders()
                else
                    this.getHis()
            },
            /**
             * 记录切换
             * @param {String} tab
             */
            tabRecord(tab) {
                this.maxPage=1;
                this.currentPage=1;
                this.totalRecords=0;
                //重新加载数据。

                if(tab=="now")
                    this.getOrders()
                else
                    this.getHis()
                this.recordTab = tab;
            },
            /**
             * 点击卖出列表选择买入信息
             */
            buySelect(price,amount,balance) {

                this.buyPrice = parseFloat(price).toFixed(8);
                let numb = ((parseFloat(this.$store.state.currentAccount.IOST))/(parseFloat(price))).toFixed(8);

                if (numb<amount) {
                    this.buyNumb = numb;
                    this.buyTotal = (parseFloat(price) * parseFloat(numb)).toFixed(8);
                }else{
                    this.buyNumb = parseFloat(amount).toFixed(8);
                    this.buyTotal = (parseFloat(price) * parseFloat(amount)).toFixed(8);
                }
            },
            /**
             * 买入价失去焦点时
             */
            bullPricefn() {
                this.buyPrice = parseFloat(this.buyPrice).toFixed(8);
            },
            /**
             * 买入量失去焦点时
             */
            buyNumfn () {
                var regNum=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
                if (!regNum.test(parseFloat(this.buyNumb))) {
                    this.buyNumb = parseFloat(0).toFixed(8);
                }else if (parseFloat(this.buyNumb)<0) {
                    this.buyNumb = parseFloat(0).toFixed(8);
                }else {
                    this.buyNumb = parseFloat(this.buyNumb).toFixed(8);
                }
                if (this.buyPrice>0) {
                    let numb = ((parseFloat(this.$store.state.currentAccount.IOST))/(parseFloat(this.buyPrice))).toFixed(8);
                    if (parseFloat(this.buyNumb)>parseFloat(numb)) {
                        this.buyNumb = parseFloat(numb).toFixed(8);
                        this.buyTotal=(parseFloat(this.buyPrice)*this.buyNumb).toFixed(8)
                    }
                }

            },
            /**
             * 买入交易额失去焦点时
             */
            buyTotalfn() {
                var regNum=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
                if (!regNum.test(parseFloat(this.buyTotal))) {
                    this.buyTotal = parseFloat(0).toFixed(8);
                }else if (this.buyTotal == '') {
                    this.buyTotal = parseFloat(0).toFixed(8);
                }else {
                    this.buyTotal = parseFloat(this.buyTotal).toFixed(8);
                }
                let total = parseFloat(this.$store.state.currentAccount.IOST);
                if (parseFloat(this.buyTotal)>parseFloat(total)) {
                    this.buyTotal = parseFloat(total).toFixed(8);
                    this.buyNumb=(total/parseFloat(this.buyPrice)).toFixed(8);
                }
            },
            /**
             * 买入确认提交
             */
            async buyConfirm() {
                if(this.symbolInfo.paused&&this.symbolInfo.paused==1){
                    this.$Message.error("Suspend trading");
                    return

                }
                if (this.buyPrice == '' || this.buyPrice== NaN) {
                    this.$Message.error(this.$i18n.t("exchangeContent.info.error.emptyBuyPrice"));
                    return
                }
                if (this.buyNumb == '' || this.buyNumb== NaN||this.buyNumb==0) {
                    this.$Message.error(this.$i18n.t("exchangeContent.info.error.emptyBuyVolumn"));
                    return
                }
                if (this.buyTotal == '' || this.buyTotal== NaN) {
                    this.$Message.error(this.$i18n.t("exchangeContent.info.error.emptyAmount"));
                    return
                }
                if(this.buyTotal<1){
                    this.$Message.error(this.$i18n.t("exchangeContent.info.error.limitAmount"));
                    return
                }
                if(this.buyTotal>parseFloat(this.$store.state.currentAccount.IOST)){
                    let msg= this.$i18n.t('exchangeContent.info.error.balance').replace(/-\+symbol\+-/g, 'IOST')
                    this.$Message.error(msg);
                    return

                }
                await this.$store.dispatch('tradeCoins', {symbol:this.tabCoin,price:this.buyPrice.toString(),quantity:this.buyNumb.toString(),isbuy:"1"}).then((result) => {
                    this.$Modal.remove()
                    this.$Message.success({
                        duration: 3,
                        closable: true,
                        content: this.$i18n.t('exchangeContent.info.success.buy')
                    })
                }).catch((err) => {
                    this.$Modal.remove()
                    if (err.hasOwnProperty("code")&&err.code === 402) { // 拒绝签名
                        this.$Message.warning({
                            duration: 3,
                            closable: true,
                            content: this.$i18n.t('eosMsg.rejected')
                        })
                    } else {
                        //let error = JSON.parse(err).error
                        if (err.hasOwnProperty('details') && err.details.length > 0) {
                            this.$Message.warning({
                                duration: 3,
                                closable: true,
                                content: err.details[0].message
                            })
                        } else if (err.hasOwnProperty('what')) { // 其它信息
                            this.$Message.warning({
                                duration: 3,
                                closable: true,
                                content: err.what
                            })
                        } else {
                            this.$Message.warning({
                                duration: 3,
                                closable: true,
                                content:err
                            })
                        }
                    }
                })
            },
            focusBuyprice() {
                this.isFocusBuy = 'price';
            },
            focusBuynum() {
                this.isFocusBuy = 'numb';
            },
            focusBuytal() {
                this.isFocusBuy = 'total';
            },
            focusSellprice() {
                this.isFocusSell = 'price'
            },
            focusSellnum() {
                this.isFocusSell = 'numb'
            },
            focusSelltal() {
                this.isFocusSell = 'total';
            },
            /**
             * 点击买入列表选择卖出信息
             */
            sellSelect(price,amount,balance) {
                this.sellPrice = parseFloat(price).toFixed(8);
                if (this.$store.state.currentAccount[this.tabCoin]<amount) {
                    this.sellNumb = parseFloat(this.$store.state.currentAccount[this.tabCoin]).toFixed(8)
                }else{
                    this.sellNumb = parseFloat(amount).toFixed(8);
                }
                this.sellTotal = (parseFloat(price)*100000 * parseFloat(this.sellNumb)*100000 /10000000000).toFixed(8);
            },
            /**
             * 卖出价失去焦点触发
             */
            sellPricefn(){
                this.sellPrice = parseFloat(this.sellPrice).toFixed(8);
                //if (this.sellTotal>0) {
                //  this.sellNumb = ((parseFloat(this.sellTotal)*1000000)/(parseFloat(this.sellPrice)*1000000)).toFixed(8)
                //  return
                //}
                if (this.sellNumb>0) {
                    this.sellTotal = ((parseFloat(this.sellNumb)*1000000)*(parseFloat(this.sellPrice)*1000000)/1000000000000).toFixed(8)
                }

            },
            /**
             * 卖出量失去焦点时
             */
            sellNumfn() {
                var regNum=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
                if (!regNum.test(parseFloat(this.sellNumb))) {
                    this.sellNumb = parseFloat(0).toFixed(8);
                }else if (parseFloat(this.sellNumb)<0) {
                    this.sellNumb = parseFloat(0).toFixed(8);
                }else {
                    this.sellNumb = parseFloat(this.sellNumb).toFixed(8);
                }

                let numb = (parseFloat(this.$store.state.currentAccount[this.tabCoin])).toFixed(8);
                if (parseFloat(this.sellNumb)>parseFloat(numb)) {
                    this.sellNumb = parseFloat(numb).toFixed(8);

                }
                if (this.sellPrice>0) {
                    this.sellTotal = ((parseFloat(this.sellNumb)*1000000)*(parseFloat(this.sellPrice)*1000000)/1000000000000).toFixed(8)
                }
            },
            /**
             * 卖出交易额失去焦点时
             */
            sellTotalfn() {
                var regNum=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
                if (!regNum.test(parseFloat(this.sellTota))) {
                    this.sellTota = parseFloat(0).toFixed(8);
                }else if (this.sellTota == '') {
                    this.sellTota = parseFloat(0).toFixed(8);
                }else {
                    this.sellTota = parseFloat(this.sellTota).toFixed(8);
                }
                if (this.sellTotal>0) {
                    this.sellNumb = ((parseFloat(this.sellTotal)*1000000)/(parseFloat(this.sellPrice)*1000000)).toFixed(8)
                }
                let numb = (parseFloat(this.$store.state.currentAccount[this.tabCoin])).toFixed(8);
                if (parseFloat(this.sellNumb)>parseFloat(numb)) {
                    this.sellNumb = parseFloat(numb).toFixed(8);
                }
            },
            /**
             * 卖出确认提交
             */
            async sellConfirm() {
                if(this.symbolInfo.paused&&this.symbolInfo.paused==1){
                    this.$Message.error("Suspend trading");
                    return

                }
                if (this.sellPrice == '' || this.sellPrice== NaN) {
                    this.$Message.error(this.$i18n.t("exchangeContent.info.error.emptySellPrice"));
                    return
                }
                if (this.sellNumb == '' || this.sellNumb== NaN||this.sellNumb==0) {
                    this.$Message.error(this.$i18n.t("exchangeContent.info.error.emptySellVolumn"));
                    return
                }
                if (this.sellTotal == '' || this.sellTotal== NaN) {
                    this.$Message.error(this.$i18n.t("exchangeContent.info.error.emptyAmount"));
                    return
                }
                if(this.sellTotal<1){
                    this.$Message.error(this.$i18n.t("exchangeContent.info.error.limitAmount"));
                    return
                }
                if(parseFloat(this.sellNumb)>parseFloat(this.$store.state.currentAccount[this.tabCoin])){
                    let msg= this.$i18n.t('exchangeContent.info.error.balance').replace(/-\+symbol\+-/g, this.bigCoin.toUpperCase())
                    this.$Message.error(msg);
                    return
                }
                await this.$store.dispatch('tradeCoins', {symbol:this.tabCoin,price:this.sellPrice.toString(),quantity:this.sellNumb.toString(),isbuy:"0"}).then((result) => {
                    this.$Modal.remove()
                    this.$Message.success({
                        duration: 3,
                        closable: true,
                        content: this.$i18n.t('exchangeContent.info.success.sell')
                    })
                }).catch((err) => {
                    this.$Modal.remove()
                    if (err.hasOwnProperty("code")&&err.code === 402) { // 拒绝签名
                        this.$Message.warning({
                            duration: 3,
                            closable: true,
                            content: this.$i18n.t('eosMsg.rejected')
                        })
                    } else {
                        //let error = JSON.parse(err).error
                        if (err.hasOwnProperty('details') && err.details.length > 0) {
                            this.$Message.warning({
                                duration: 3,
                                closable: true,
                                content: err.details[0].message
                            })
                        } else if (err.hasOwnProperty('what')) { // 其它信息
                            this.$Message.warning({
                                duration: 3,
                                closable: true,
                                content: err.what
                            })
                        } else {
                            this.$Message.warning({
                                duration: 3,
                                closable: true,
                                content:err
                            })
                        }
                    }
                })
            },
            /**
             * 获取当前委托
             */
            async getOrders() {
                if (this.$store.state.currentAccount) {
                    this.$Message.loading("")
                    //this.orders=[]
                    let starttime=""
                    let endtime=""

                    if(this.querytime.length==2){
                        if(this.querytime[0]!="")
                         starttime=parseInt(new Date(this.querytime[0]).getTime()/1000)
                        if(this.querytime[1]!="")
                        endtime=parseInt(new Date(this.querytime[1]).getTime()/1000)
                    }

                    let queryobj={symbol: this.tabCoin,page:this.currentPage,direction:this.direction,status:this.status,starttime:starttime,endtime:endtime}
                    //console.log(queryobj)
                    await this.$store.dispatch('getOrders',queryobj).then((result) => {
                        if(result!=null) {
                            this.firstLoadOrder=true;
                            //for (var i=0;i<result.length;i++) {
                            this.orders = result["list"];
                            this.maxPage = result["maxPage"];
                            this.totalRecords = result["totalRecord"]
                            //console.log(this.orders,this.maxPage,this.totalRecords)
                        }
                        // }
                    });
                    this.$Message.destroy()
                }else{
                    if(this.firstLoadOrder==false)
                    setTimeout(await this.getOrders,1000)
                }

            },
            async getTokens(){
                await this.$store.dispatch('getTokens').then((result) => {
                    this.tokenList = result;
                });

            },
            /**
             * 获取历史成交
             */
            async getHis() {


                if (this.$store.state.currentAccount) {
                    this.$Message.loading("")
                    //this.orders=[]
                    await this.$store.dispatch('getHis',{symbol: this.tabCoin,page:this.currentPage}).then((result) => {
                        if(result!=null) {
                            //for (var i=0;i<result.length;i++) {
                            this.his = result["list"];
                            this.maxPage = result["maxPage"];
                            this.totalRecords = result["totalRecord"]
                        }
                        // }
                    });
                    this.$Message.destroy()


                }
            },

            /**
             * 打开交易明细
             */
            openPop(id) {
                console.log(id)
                const falg = true
                if (falg) return

                var forData = this.tabCoin + '/' + id;
                this.getDetail(forData);
            },
            getDetail(info) {
                this.$store.dispatch('getDetail', info).then((result) => {
                    console.log(result);
                    this.realInfo = result;
                    this.realModal = true;
                });
            }
        },
        watch: {
            getLang(val, oldVal){
                // if(val == "zh"){
                //     this.$Message.info({
                //         duration: 600,
                //         closable: true,
                //         content: "您好，IOSTDex 不向来自中国用户提供服务。<br/> <br/>我们无意诱使任何人违反任何地方或国家法律。玩家的唯一责任是参考其管辖范围内的法律，以确定行为的合法性。",
                //     })
                // }
                this.widget.remove()
                this.createTv();
            },
            buyPrice() {
                if (this.isFocusBuy == 'price') {
                    //if (this.buyTotal>0 && this.buyPrice>0) {
                    //  this.buyNumb = ((parseFloat(this.buyTotal)*1000000)/(parseFloat(this.buyPrice)*1000000)).toFixed(8);
                    //}
                    if (this.buyPrice>0 && this.buyNumb>0) {
                        this.buyTotal = ((parseFloat(this.buyNumb)*1000000)*(parseFloat(this.buyPrice)*1000000)/1000000000000).toFixed(8)
                    }
                }
            },
            buyNumb() {
                if (this.buyNumb<0) {
                    this.buyNumb = parseFloat(0).toFixed(8)
                }
                if (this.isFocusBuy == 'numb') {
                    if (this.buyPrice>0 && this.buyNumb>0) {
                        this.buyTotal = ((parseFloat(this.buyNumb)*1000000)*(parseFloat(this.buyPrice)*1000000)/1000000000000).toFixed(8);
                    }else{
                        this.buyTotal = parseFloat(0).toFixed(8)
                    }
                }

                this.buyNumb=parseFloat(this.buyNumb).toFixed(this.digit)
            },
            buyTotal() {
                if (this.buyTotal<0) {
                    this.buyTotal = parseFloat(0).toFixed(8)
                }
                if (this.isFocusBuy == 'total') {
                    if (this.buyPrice>0 && this.buyPrice>0) {
                        this.buyNumb = ((parseFloat(this.buyTotal)*1000000)/(parseFloat(this.buyPrice)*1000000)).toFixed(8);
                    }else{
                        this.buyNumb = parseFloat(0).toFixed(8)
                    }
                }

            },
            sellTotal() {
                if (this.sellTotal<0) {
                    this.sellTotal = parseFloat(0).toFixed(8)
                }
                if (this.isFocusSell == 'total') {
                    if (this.sellTotal>0 && this.sellPrice>0) {
                        this.sellNumb = ((parseFloat(this.sellTotal)*1000000)/(parseFloat(this.sellPrice)*1000000)).toFixed(8)
                    }else{
                        this.sellNumb = parseFloat(0).toFixed(8)
                    }
                }
                if(this.$store.state.hasOwnProperty("betPrice")&&!isNaN(this.$store.state.betPrice)&&this.$store.state.betPrice>0) {
                    let content = this.$i18n.t("exchangeContent.toGetWin");
                    let returnNum = (this.sellTotal * 0.002 / this.$store.state.betPrice).toFixed(8)
                    content = content
                        .replace(/-\+symbol\+-/g, this.$store.state.defaultSymbol)
                        .replace(/-\+symbolNum\+-/g, returnNum)
                    //console.log(content)
                    this.getWinInfo=content;
                }

            },
            sellPrice() {
                if (this.isFocusSell == 'price') {
                    //if (this.sellPrice>0 && this.sellTotal>0) {
                    //  this.sellNumb = ((parseFloat(this.sellTotal)*1000000)/(parseFloat(this.sellPrice)*1000000)).toFixed(8)
                    //}
                    if (this.sellPrice>0 && this.sellNumb>0) {
                        this.sellTotal = ((parseFloat(this.sellNumb)*1000000)*(parseFloat(this.sellPrice)*1000000)/1000000000000).toFixed(8);
                    }
                }
            },
            sellNumb() {
                if (this.sellNumb<0) {
                    this.sellNumb = parseFloat(0).toFixed(8)
                }
                if(parseFloat(this.sellNumb)>parseFloat(this.symbolBalance)){
                    this.sellNumb=this.symbolBalance
                }
                if (this.isFocusSell == 'numb') {
                    if (this.sellPrice>0 && this.sellNumb>0) {
                        this.sellTotal = ((parseFloat(this.sellNumb)*1000000)*(parseFloat(this.sellPrice)*1000000)/1000000000000).toFixed(8);
                    }else{
                        this.sellTotal = parseFloat(0).toFixed(8);
                    }
                }
                this.sellNumb=parseFloat(this.sellNumb).toFixed(this.digit)
            }
        }
        ,
        beforeDestroy () {
            //清除所有定时器
            if (this.internal.length > 0) {
                this.internal = clearAllInterval(this.internal)
            }

        }
    }

</script>