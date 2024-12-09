<template>
  <div class="notice">
    <div class="content">
      <div class="item" v-for="(item,index) in list" v-bind:key="index">
        <div class="title">{{item.title}} {{item.addTime|formatTime2}}</div>
        <div class="msg" v-html="formatMsg(item.body)"></div>
        <div class="msg">{{$t("competitionMsg.beginTime")}}{{item.startTime|formatTime2}}</div>
        <div class="msg">{{$t("competitionMsg.endTime")}}{{item.endTime|formatTime2}}</div>
        <div class="msg"><span class="detail" @click="showDetail(index)">{{$t("competitionMsg.viewDetail")}}>></span></div>
        <div class="msg" v-if="item.show==true">
            <div class="prize">{{$t("competitionMsg.totalPrize")}} {{item.totalPrize}} IOST</div>

            <div class="table">
              <div class="header">
                <div class="row">
                  <div class="item rank">{{$t("competitionMsg.rank")}}</div>
                  <div class="item bettor">{{$t("competitionMsg.account")}}</div>
                  <div class="item amount">{{$t("competitionMsg.amount")}}</div>
                  <div class="item bettor">{{$t("competitionMsg.prize")}}</div>

                </div>
              </div>
              <div class="body">
                <div class="row" v-for="(detail,index) in item.detailPrize"  v-bind:key="index">
                  <div class="item rank">{{detail.rank}}</div>
                  <div class="item bettor">{{detail.account}}</div>
                  <div class="item amount">{{detail.amount}} IOST</div>
                  <div class="item bettor">{{detail.prize}} IOST</div>

                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {return2Br} from '@/util/common.js'
export default {
  data(){
    return{
      msg:[{title:"1111",msg:"ddddd",time:"2018-8-8"}],
      list:[]
    }
  },
  created(){

    this.getCompetion();
  },
  methods: {
    async showDetail(index){
      //console.log(item)
      if(this.list[index].show)
        this.list[index].show=false;
      else
        this.list[index].show=true;

      if(this.list[index].show){
        //获取奖金池信息
          let result=await this.$store.dispatch("getCompetionDetail",this.list[index].id);
          console.log(result)
          if(result!=null&&result.hasOwnProperty("totalPrize")){
            this.list[index].totalPrize=result.totalPrize
            this.list[index].detailPrize=result.detail
          }

      }
      this.list.splice(index,1,this.list[index])
    },
    //获取交易大赛列表
    async getCompetion(){
      try{
        this.list=await this.$store.dispatch("getCompetion");
      }catch (e) {
        console.log(e)
        setTimeout(this.getCompetion,1000)
      }
    },
    formatMsg (msg) {
      return return2Br(msg)
    }
  }
}
</script>
<style lang="postcss" scoped>
@import '../../assets/css/variable.scss';
.detail{
  cursor: pointer;
}
.table {
  .rank{flex:none!important;width:60px;}
  max-width:600px;
  font-size: $defaultSize;
.header {
  padding: 0;
.row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
.item {
  flex: 1;
  padding-top:0px!important;
  font-size: 14px;
&.roll-under {
   flex: 2;
 }
}
}
}
.body {
.row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: $whiteColor;
  border-bottom: 1px solid #474650;
&:last-child{
   border: none;
 }
&.lose {
   background: rgba(238,51,65,0.2);
 }
.item {
  flex: 1;
  padding:0px;

&.roll-under {
   flex: 2;
 }
&.verify, &.hash {
span {
  color: $blueColor;
  cursor: pointer;
&:hover {
   text-decoration: underline;
 }
}
}
}
}
}
}
.notice {
  color: $whiteColor;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: $largeMargin;
  padding: $defaultPadding;
  .content {
    .item {
      background-color: $main2Color;
      padding: $normalPadding;
      font-size: $transitSize;
      margin-bottom: $normalMargin;
      border-radius: $smallRadius;
      .title {
        font-size: $titleSize;
        font-weight: bold;
        padding: $smallPadding 0;
        margin-bottom: $normalMargin;
      }
      .msg {
        line-height: 1.5;
        .prize{color:#fff!important;height:55px;line-height:55px;;}
      }
      .time {
        text-align: right;
      }
    }
  }
}
@media screen and (max-width:1200px) {
  .notice {
    max-width: 800px;
  }
  .table .amount{display:none}
}
</style>



// WEBPACK FOOTER //
// src/views/competition/index.vue