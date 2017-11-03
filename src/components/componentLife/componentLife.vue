<template>
    <div>
        {{message}}
        <input  v-model="message"/>
          <test name="s"></test>
    </div>
</template>

<script>
    import test from './test';
    export default {
        data(){
            console.log("123")
            return {
                message:"234"
            }
        },

        beforeCreate(){     //组件实例刚被创建，组件属性计算之前，如 data 属性等
            console.log("beforeCreate");
        },

        created(){
            console.log("created====");
        },

        beforeMount(){
            console.log("beforeMount");
        },

        mounted(){
            console.log("mounted");
        },

        beforeUpdate(){
            console.log("beforeUpdate");
        },

        updated(){
            console.log("updated");
        },

        activated(){
            console.log("activated");
        },

        deactivated(){
            console.log("deactivated");
        },

        beforeDestroy(){    //组件销毁前调用
            console.log("beforeDestroy");
        },

        destroyed(){    //组件销毁
            console.log("destroyed");
        },

        components:{
            test
        }
    }
</script>