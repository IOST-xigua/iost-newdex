<template>
  <div class="games">
    <a class="game-item" :href="'https://www.iostwin.io/'+(item.name==='arena'?'#/arena':'')"  v-for="item in games" v-bind:key="item.name">
      <!-- <div class="game-img"><img :src="item.img" alt=""></div>
      <p>{{$t(item.name)}}</p> -->
      <div class="tab-img tab-pc">
        <img :src="item.imgAct" alt="" v-if="item.name===$route.name">
        <img :src="item.img" alt="" v-else>
      </div>
      <div class="tab-img tab-wap">
        <img :src="item.imgWapAct" alt="" v-if="item.name===$route.name">
        <img :src="item.imgWap" alt="" v-else>
      </div>
      <div class="tab-tit">{{$t(item.name)}}</div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'games',
  data() {
    return{
      games: [{
        name: 'dice',
        url: '/dice',
        img: require('@/assets/images/auction/dice.png'),
        imgAct: require('@/assets/images/auction/dice_act.png'),
        imgWap:require('@/assets/images/auction/wap_dice.png'),
        imgWapAct:require('@/assets/images/auction/wap_dice_act.png')
      },
      {
        name: 'arena',
        url: '/arena',
        img: require('@/assets/images/auction/auction.png'),
        imgAct: require('@/assets/images/auction/auction_act.png'),
        imgWap:require('@/assets/images/auction/wap_auction.png'),
        imgWapAct:require('@/assets/images/auction/wap_auction_act.png')
      }
      // {name: 'slot', url: '/slot', img: require('@/assets/images/logo/slot_icon.png')},
      // {name: 'luckyNumber', url: '/luckyNumber', img: require('@/assets/images/logo/luckyNum_icon.png')},
      // {name: 'luckyWheel', url: '/luckyWheel', img: require('@/assets/images/logo/luckyWheel_icon.png')},
      ]
    }
  }
}
</script>


