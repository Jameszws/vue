/*
* 弹出提示语
* 	@param content 内容
*	@param hidesec 显示的时间（毫秒）
*	@param onhide 隐藏后回调函数
*   @param toastdisplay 是否显示弹出层
*   @param maskdisplay  遮罩层是否显示，默认是显示
*/
<template>
    <div class="ui-toast" v-show="toastdisplay" >
        <div class="ui-mask" v-show="maskdisplay"  :style="{height:getScrollHeight()+'px'}" @click="maskClickToHideToastHandler"></div>
        <div class="ui-layer" :id="toastid" :style="{marginLeft:layerMarginLeft,marginTop:layerMarginTop}">
            <div class="ui-layer-padding">
                {{content}}
            </div>
        </div>
    </div>
</template>

<script>

    import "./css/toast.css";
    let secTimer; //回调函数定时器

    export default {

        props:["toastid","toastdisplay","maskdisplay","content","hidesec"],

        data(){
            return {
                bakToastdisplay:this.toastdisplay,	//创建props属性中toastdisplay的副本
                layerMarginLeft:"0px",
                layerMarginTop:"0px"
            };
        },

        watch:{
            toastdisplay:function(val){
                this.bakToastdisplay=val; // 监听外部对props属性toastdisplay的变更，并同步到组件内的data属性bakToastdisplay中
            },
            bakToastdisplay:function(val){
                this.$emit("on-toastdisplay-change",val); //组件内对bakToastdisplay变更后向外部发送事件通知
            }
        },

        mounted(){	//组件加载完成
            if(!this.bakToastdisplay){
                return;
            }
            this.hidesec=this.hidesec?this.hidesec:3000;
            this.locationToast();
            this.setHideSec();
        },

        updated:function(){	//组件更新完成时执行
            if(!this.bakToastdisplay){
                return;
            }
            this.locationToast();
            this.setHideSec();
        },

        destroyed:function(){	//组件销毁，清空定时器
            clearTimeout(secTimer);
        },

        methods:{
            //文档的总高度
            getScrollHeight:function(){
                var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
                if(document.body){
                    bodyScrollHeight = document.body.scrollHeight;
                }
                if(document.documentElement){
                    documentScrollHeight = document.documentElement.scrollHeight;
                }
                scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
                return scrollHeight;
            },

            //定位弹出层
            locationToast:function(){
                var toastEl=document.getElementById(this.toastid);
                var height=toastEl.offsetHeight;
                var width=toastEl.offsetWidth;

                this.layerMarginTop = -(parseInt(height)/2)+"px";
                this.layerMarginLeft = -(parseInt(width)/2)+"px";
            },

            //设置显示多少毫秒
            setHideSec:function(){
                var _this=this;
                secTimer = setTimeout(function(){
                    if(!_this.bakToastdisplay){
                        return;
                    }
                    _this.bakToastdisplay = false;
                    _this.$emit("on-hide");
                },this.hidesec);
            },

            //隐藏 toast
            maskClickToHideToastHandler:function(){
                this.bakToastdisplay=false;
                clearTimeout(secTimer);
                this.$emit("on-hide");
            }
        }
    }
</script>
