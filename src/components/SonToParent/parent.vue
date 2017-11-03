
<template>
    <!-- 父组件 -->
    <div class="parent">
        <div class="msgFromSon">{{msgFromChild}}</div>
        <!-- 子组件 -->
        <son v-on:childevent="showMsgFromChild"></son>
    </div>    
</template>

<style>
    .parent{width:100%;height:600px;border:1px solid blue;}
    .message{color:black;font-size:30px;font-weight:blod;}
    .msgFromSon{margin-top:50px;color:red}
</style>

<script>    
    import son from './son';
    export default {
        data(){
            return {                
                msgFromChild:"",//来自子组件的信息
            }
        },
        methods:{
            showMsgFromChild(data){
                this.msgFromChild = data;
            }
        },
        components:{
            son
        }
    }
</script>

