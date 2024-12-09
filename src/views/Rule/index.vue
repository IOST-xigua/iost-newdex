<template>
  <div class="WinIntro">
    <Anchor :show-ink="true" class="anchor">
      <AnchorLink :href="'#tutorial'+index" :title="item.title" v-for="(item,index) in $t('RuleMsg')" v-bind:key="index"/>
    </Anchor>
    <div class="content">
      <div class="tutorial" v-for="(item,index) in $t('RuleMsg')" :id="'tutorial'+index" v-bind:key="index">
        <div class="title">{{item.title}}</div>
        <Divider></Divider>
        <ul class="list">
          <li v-for="(it,idx) in item.list" v-bind:key="idx" v-html="it"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {Anchor, AnchorLink, Divider} from 'iview'
export default {
  components: {
    Anchor,
    AnchorLink,
    Divider
  }
}
</script>
<style lang="postcss" scoped>
@import '../../assets/css/variable.scss';
.WinIntro {
  color: $whiteColor;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: $largeMargin;
  padding: $defaultPadding;
  display: flex;
  align-items: flex-start;
  .anchor {
    max-width: 300px;
    width: 25%;
    margin-right: $bigMargin;
  }
  .content {
    flex: 1;
    .tutorial {
      background-color: rgba(36, 32, 41, 0.8);
      padding: $normalPadding;
      font-size: $transitSize;
      margin-bottom: $normalMargin;
      border-radius: $smallRadius;
      .title {
        font-size: $titleSize;
        font-weight: bold;
        padding: $smallPadding 0;
      }
      .ivu-divider {
        margin: $defaultMargin auto;
        background-color: $grayLighterColor;
      }
      .list {
        padding: $smallPadding 0;
      }
    }
  }
}
@media screen and (max-width:634px) {
  .WinIntro {
    .anchor {
      display: none;
    }
  }
}
@media screen and (max-width:1000px) {
  .WinIntro {
    max-width: 800px;
  }
}
</style>
<style lang="postcss">
.WinIntro {
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
          border-left: 3px solid #FFA015;
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
// src/views/Rule/index.vue