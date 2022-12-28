<template>
    <div>
        <div>Welcome To My Website!!!</div>
        <!-- <div>{{ info || 'NO DATA' }}</div> -->
        <!-- <div v-if="info">{{ info }}</div>
        <div v-else>NO DATA</div> -->
        <div>{{ Info }}</div>
        <el-input v-model="localInfo" />
    </div>
</template>

<script>

export default {
    name:'FirstComponent',
    props:{
        info:String,
    },
    data:function(){
        return {
            localInfo:'',
        }
    },
    computed:{
        Info :function(){
            return this.info ? this.info : 'NO DATA';
        }
    },
    watch:{
        info:{
            handler:function(newValue,oldValue){
                console.log('info变化情况',oldValue,newValue);
                this.localInfo=newValue;
            },
            immediate:true
        }
    },
    beforeCreate(){
        console.log('beforeCreate');
    },

    created(){
        console.log('created');
    },

    beforeMount(){
        console.log('beforeMount');
    },

    mounted(){
        console.log('mounted');
    },

    beforeDestroy(){
        console.log('beforeDestroy');
    },

    destroyed(){
        console.log('destroyed');
    }
}
</script>

<style lang="scss" scoped>
div{
    font-family: 'Courier New', Courier, monospace;
    font-size: 35px;
    font-weight: bold;
    background: -webkit-linear-gradient(315deg,#5018ab7a 25%,#ff6467);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>