
<template>
    <div>
        {{title}}
        <son v-bind:message="msg"></son>        
    </div>    
</template>

<script>    
    import son from './son';
    export default {
        data(){
            return {
                msg:"hello children",
                title:"123"
            }
        },
        created(){
            this.title="123asdf234";
        },
        methods:{
            
        },
        components:{
            son
        }
    }
</script>
