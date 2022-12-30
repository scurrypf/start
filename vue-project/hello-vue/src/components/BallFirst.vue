<template>
    <div>
        <!-- <BallSecond :ball="firstBall" @second-ball="getSecond"></BallSecond> -->
        <!-- <BallSecond :val="toSecond" @sentTOfirst="getSecond1" :way="getSecond1"></BallSecond> -->
        <BallSecond :jabuja="isJa" ref="erza"></BallSecond>
        <div>ahhhhhhh我是父亲<el-button @click="JA">儿子加一</el-button></div>
    </div>
</template>

<script>
import BallSecond from './BallSecond.vue';
//解构语法导入
import { EventBus,EventType } from '@/EventBus';
import { MittEvent,MittEventType } from '@/MittEvent';

export default{
    name:'BallFirst',
    components:{
        BallSecond,
    },
    data:function(){
        return {
            //firstBall:0,
            toSecond:10000,
            isJa:true,
        }
    },
    methods:{
        // getSecond(v){
        //     this.firstBall=v+1;
        //     console.log('firstTosecond',this.firstBall);
        // }
        getSecond1(value){
            this.toSecond=value-1;
            console.log(this.toSecond,value);
        },
        //父组件操作子组件
        JA(){
            //方法一：prop+watch
            //this.isJa=!this.isJa;
            //方法二：ref直接操作
            // this.$refs.erza.addOne();
            // console.log(this.$refs.erza.num);
            //方法三：事件总线
            //EventBus.$emit(EventType.Data_Type)
            //方法三-一
            MittEvent.emit(MittEventType.Data_Type);
        }
    }
    
}
</script>