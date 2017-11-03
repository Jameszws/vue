
<template>
    <div class="son-area">
        <button v-on:click="sendMsgToParent">向父组件传值</button>
    </div>
</template>
<style>
    .son-area{ height:200px;width:300px;border:1px solid red;margin-top:80px; }
</style>
<script>    
    export default {
        methods:{
            sendMsgToParent(){
                this.$emit("childevent","来自子组件的信息");
            }
        }
    }
</script>
