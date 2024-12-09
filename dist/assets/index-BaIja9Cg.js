import{_ as o,a as r}from"./refresh-CmDT5W8Y.js";import{m as c,I as l,n as u}from"./index-C39VJ542.js";const m={components:{Games:o},data(){return{recordTab:"all",totalAmount:0,orders:[],gasUsedPercent:0,ramUsedPercent:0,balance:0,gasTip:"",ramTip:"",tokenList:[]}},async mounted(){},created(){this.getTokens()},computed:{...c({currentAccount:"getCurrentAccount"}),getTotalAmount(){return 0},Account(){return this.currentAccount?this.currentAccount.name:"Not Login"},getLang(){return this.$i18n.t("tv_lang")}},methods:{tabRecord(e){if(e=="all")this.getTokens();else if(this.tokenList.length>0){let t=[];for(let s=0;s<this.tokenList.length;s++)this.tokenList[s].hasOwnProperty("balance")&&this.tokenList[s].balance>0&&t.push(this.tokenList[s]);this.tokenList=t}this.recordTab=e},async getUserBalance(e){try{let t=await this.$store.dispatch("getSymbolBalance",{symbol:e});if(t!=null){for(let s=0;s<this.tokenList.length;s++)if(e==this.tokenList[s].symbol){this.tokenList[s].balance=parseFloat(t[e]);let a=0;for(let i=0;i<t[e+"_frozen"].length;i++)a+=parseFloat(t[e+"_frozen"][i].amount);let n=await this.$store.dispatch("getTradingAmount",{symbol:e});if(console.log(n),this.tokenList[s].tradingAmount=n.tradingAmount,this.tokenList[s].frozen=a,this.tokenList[s].price!=null){let i=a+this.tokenList[s].balance;this.tokenList[s].tradingAmount!=null&&(i+=parseFloat(this.tokenList[s].tradingAmount)),this.tokenList[s].amount=(parseFloat(this.tokenList[s].price)*i).toFixed(8),this.totalAmount+=parseFloat(this.tokenList[s].amount)}}}}catch(t){console.log(t);let s=this;setTimeout(function(){s.getUserBalance(e)},1e3)}},async getTokens(){try{this.totalAmount=0;let e=await this.$store.dispatch("getTokens");if(e!=null){if(e.unshift({digit:8,icon:l,name:"IOST",percent_24h:0,price:1,symbol:"iost"}),this.tokenList=e,this.currentAccount!=null)for(let t=0;t<this.tokenList.length;t++)this.tokenList[t].balance="",this.tokenList[t].frozen="",this.tokenList[t].trading="",this.tokenList[t].amount="",await this.getUserBalance(this.tokenList[t].symbol)}else throw"getToken err"}catch(e){console.log(e),setTimeout(this.getTokens,100)}}},watch:{currentAccount(){if(this.$store.state.currentAccount==null)this.gasUsedPercent=0,this.ramUsedPercent=0;else{if(this.$store.state.currentAccount.hasOwnProperty("gasInfo")&&this.$store.state.currentAccount.gasInfo.limit>0){let e=Math.round((this.$store.state.currentAccount.gasInfo.limit-this.$store.state.currentAccount.gasInfo.current_total)/this.$store.state.currentAccount.gasInfo.limit*100);this.gasTip="Total:"+this.$store.state.currentAccount.gasInfo.limit+" Used:"+(this.$store.state.currentAccount.gasInfo.limit-this.$store.state.currentAccount.gasInfo.current_total),e>100?this.gasUsedPercent=100:e<0?this.gasUsedPercent=0:this.gasUsedPercent=e}else this.gasUsedPercent=0;if(this.$store.state.currentAccount.hasOwnProperty("ramInfo")&&this.$store.state.currentAccount.ramInfo.total>0){let e=Math.round(this.$store.state.currentAccount.ramInfo.used/this.$store.state.currentAccount.ramInfo.total*100);this.ramTip="Total:"+this.$store.state.currentAccount.ramInfo.total+" Used:"+this.$store.state.currentAccount.ramInfo.used,e>100?this.ramUsedPercent=100:e<0?this.ramUsedPercent=0:this.ramUsedPercent=e}else this.ramUsedPercent=0;this.$store.state.currentAccount.hasOwnProperty("IOST")&&(this.balance=this.$store.state.currentAccount.IOST),this.$store.state.currentAccount.hasOwnProperty("WIN")&&(this.winBalance=this.$store.state.currentAccount.WIN)}}},beforeDestroy(){}};var d=function(){var t=this,s=t._self._c;return s("div",{staticClass:"userpage"},[s("div",{staticClass:"m-warp games-menu"},[s(o)],1),s("div",{staticClass:"userinfo flex-box m-warp"},[s("div",{staticClass:"flex-box row"},[s("div",[t._v(t._s(t.Account))])]),s("div",{staticClass:"flex-box row"},[s("div",[t._v(t._s(t.$t("my.totalAmount")))])]),s("div",{staticClass:"flex-box row"},[s("div",{staticClass:"totalamount"},[t._v(t._s(t.totalAmount.toFixed(8))+" IOST")])]),s("div",{staticClass:"flex-box row",attrs:{title:t.gasTip}},[s("div",[t._v("gas：")]),s("div",[t._v(t._s(t.gasUsedPercent)+"%")])]),s("div",{staticClass:"flex-box row",attrs:{title:t.ramTip}},[s("div",[t._v("ram：")]),s("div",[t._v(t._s(t.ramUsedPercent)+"%")])])]),s("div",{staticClass:"m-record"},[s("div",{staticClass:"record-box m-warp"},[s("div",{staticClass:"record-con"},[s("div",{staticClass:"record-tab show flex-box"},[s("div",{staticClass:"tab-item",class:{"tab-act":t.recordTab=="all"},on:{click:function(a){return t.tabRecord("all")}}},[t._v(t._s(t.$t("my.all")))]),s("div",{staticClass:"tab-item",class:{"tab-act":t.recordTab=="nozero"},on:{click:function(a){return t.tabRecord("nozero")}}},[t._v(t._s(t.$t("my.nozero")))]),s("div",{staticClass:"tab-item refresh",on:{click:function(a){return t.tabRecord("all")}}},[s("img",{attrs:{src:r,alt:""}})])]),s("div",{staticClass:"record-betting record-tab-item",class:{"record-scroll":t.$store.state.currentAccount}},[s("div",{staticClass:"record-head flex-box"},[s("div",{staticClass:"head-item item-coin"},[t._v(t._s(t.$t("exchangeContent.list.symbolType")))]),s("div",{staticClass:"head-item item-balance"},[t._v(t._s(t.$t("balance")))]),s("div",{staticClass:"head-item item-frozen"},[t._v(t._s(t.$t("my.frozen")))]),s("div",{staticClass:"head-item item-frozen"},[t._v(t._s(t.$t("my.tradingAmount")))]),s("div",{staticClass:"head-item item-price"},[t._v(t._s(t.$t("exchangeContent.price")))]),s("div",{staticClass:"head-item item-amount"},[t._v(t._s(t.$t("my.amount"))+"(IOST)")]),s("div",{staticClass:"head-item item-operate"},[t._v(t._s(t.$t("exchangeContent.list.operation")))])]),t.$store.state.currentAccount&&t.tokenList.length>0?s("div",{staticClass:"record-list"},t._l(t.tokenList,function(a,n){return s("div",{key:n,staticClass:"record-list-item flex-box"},[s("div",{staticClass:"list-item item-coin"},[s("img",{attrs:{src:a.icon,alt:""}}),s("span",{staticClass:"symbolname"},[t._v(t._s(a.symbol))])]),s("div",{staticClass:"list-item item-balance"},[t._v(t._s(a.balance))]),s("div",{staticClass:"list-item item-frozen"},[t._v(t._s(a.frozen))]),s("div",{staticClass:"list-item item-frozen"},[t._v(t._s(a.tradingAmount))]),s("div",{staticClass:"list-item item-price"},[t._v(t._s(a.price))]),s("div",{staticClass:"list-item item-amount"},[t._v(t._s(a.amount))]),s("div",{staticClass:"list-item item-operate"},[a.symbol!="iost"?s("router-link",{staticClass:"head-item item-hx",attrs:{to:"/symbol/"+a.symbol}},[t._v(t._s(t.$t("my.goTrade")))]):t._e()],1)])}),0):t._e(),t.tokenList.length==0&&t.$store.state.currentAccount?s("div",{staticClass:"noData"},[t._v(t._s(t.$t("nodata")))]):t._e()])])])])])},h=[],_=u(m,d,h,!1,null,null);const g=_.exports;export{g as default};