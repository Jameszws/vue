
<template>
    <div>        
        <Toast :toastid="toast.toastId" 
            :content="toast.content" 
            :toastdisplay="toast.toastDisplay" 
            :hidesec="toast.hideSec" 
            :maskdisplay="toast.maskDisplay" 
            @on-hide="onHide" 
            @on-toastdisplay-change="onToastDisplayChange" />

        <input type="button" @click="showToast" value="显示弹出层" />
        <input type="button" @click="showToast2" value="显示弹出层2" />
    </div>
</template>

<script>    
    import Toast from '../common/toast/Toast.vue';
    export default {
        data(){
            return {
                toast:{
                    toastId:"ui-view-toast-1",
                    content:"这里是显示内容",  //默认值
                    hideSec:3000, //默认值
                    maskDisplay:true,   //显示遮罩层
                    toastDisplay:false  //默认值
                }
            }
        },
        methods:{
            onToastDisplayChange(val){
                this.toast.toastDisplay=val;//外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
            },
            onHide:function(){
                
            },
            showToast:function(){
                this.toast.content ="这里是显示内容";
                this.toast.toastDisplay =true;
            },
            showToast2:function(){
                this.toast.content ="qeqweqweqweqwe";
                this.toast.toastDisplay =true;
            }
        },
        components:{
            Toast
        }
    }

</script>