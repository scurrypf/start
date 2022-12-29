<template>
    <div class="tmp">
        <!-- <div>Welcome To My Website!!!</div> -->
        <!-- <div>{{ info || 'NO DATA' }}</div> -->
        <!-- <div v-if="info">{{ info }}</div>
        <div v-else>NO DATA</div> -->
        <!-- <div>{{ Info }}</div>
        <div>watch改变info
        <el-input v-model="localInfo" />
        </div>
        <div>compute改变info值
        <el-input v-model="localCompute" />
        </div> -->
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
        },
        localCompute:{
            get:function(){
                return this.localCompute=this.info;
            },
            set:function(value){
                this.$emit('sendlocalcompute',value);
            }
        }
    },
    watch:{
        //通过watch来改变props的值——将info赋给localInfo
        info:{
            handler:function(newValue,oldValue){
                console.log('info变化情况',oldValue,newValue);
                this.localInfo=newValue;
            },
            immediate:true
        },
        //通过watch来改变props的值——将localInfo的newValue发送给父组件
        //然后父组件通过@send-localinfo接收，并改变info的值从而达成数据流的循环
        localInfo:function(newValue){
            this.$emit('send-localinfo',newValue);
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
.tmp{
    div{
    font-family: 'Courier New', Courier, monospace;
    font-size: 35px;
    font-weight: bold;
    background: -webkit-linear-gradient(315deg,#5018ab7a 25%,#ff6467);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
}
</style>