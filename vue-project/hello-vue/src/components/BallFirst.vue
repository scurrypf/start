<template>
    <div>
        <!-- <BallSecond :ball="firstBall" @second-ball="getSecond"></BallSecond> -->
        <!-- <BallSecond :val="toSecond" @sentTOfirst="getSecond1" :way="getSecond1"></BallSecond> -->
        <!-- <BallSecond :jabuja="isJa" ref="erza" :user="user"></BallSecond>
        <div>ahhhhhhh我是父亲<el-button @click="JA">儿子加一</el-button></div> -->
        <ball-second :msg="msg" color="green"></ball-second>
        <ball-second msg="这是父组件传的第二个值" color="red"></ball-second>
        <BallSecond>
            <h1>这是匿名插槽</h1>
        </BallSecond>
        <BallSecond>
            <template v-slot:slottt>
                <div style="color:aqua">
                    <h1>这是具名插槽</h1>
                </div>
                
            </template>
        </BallSecond>
        <div>一秒增加一次
            <el-button @click="Throttle">
                click me
            </el-button>
        </div>
        <div>{{ throttle }}</div>
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
            inject:{
                text:'依赖注入呀',
            },
            user:{},
            msg:'这是父组件传的第一个值',
            throttle:0,
            isAdd:true,
        }
    },
    provide:function(){
        return {
           injectVal:this.inject,
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
        },
        // Throttle(fun,time = 1000) {
        //     let timer;
        //     return function(...args){
        //         if(timer === null){
        //             fun.apply(this,args);
        //             setTimeout(()=>{
        //                 timer = null;
        //             },time)
        //         }
        //     }
        // }
        Throttle(){
            if (this.isAdd) {
                this.throttle++;
                this.isAdd = false;
                setTimeout(() => {
                    this.isAdd = true;
                }, 1000)
            }   
        }
    },
    mounted(){
        setTimeout(()=>{
            this.inject.text='依赖注入变化了?'
            console.log(this.inject.text)
            this.$set(this.user,'info',{name:'zpf'});
        },3000)
    }
    
}
</script>