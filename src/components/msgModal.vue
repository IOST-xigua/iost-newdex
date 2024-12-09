<template>
    <div class="msg-box">
        <div class="content">
            {{msgInfo}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            'msgInfo':{
                type:String
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

    .content{
        max-height:600px;padding:40px;font-size:15px;line-height: 35px;
    }



</style>



// WEBPACK FOOTER //
// src/components/msgModal.vue