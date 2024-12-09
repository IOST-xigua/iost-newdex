<template>
  <div class="notice">
    <div class="content">
      <div class="item" v-for="(item,index) in data" :key="index">
        <div class="title">{{item.title}}</div>
        <div class="msg">{{item.msg}}</div>
        <div class="time">{{item.time}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import {return2Br} from '@/util/common.js'
export default {
  data(){
    return{
      data: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const result = await fetch('/static/data/notice.json').then(response => response.json())
      this.data = Object.values(result)
    },
    formatMsg (msg) {
      return return2Br(msg)
    }
  }
}
</script>
