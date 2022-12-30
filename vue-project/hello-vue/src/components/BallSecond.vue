<template>
    <div>
        <BallThird :val="second" @sentTOsecond="getThird" :way="way"></BallThird>
        <div>ahhhhhhhhh我是儿子{{ num }}</div>
    </div>
</template>

<script>
import BallThird from './BallThird.vue';
import { EventBus,EventType } from '@/EventBus';
import { MittEvent,MittEventType } from '@/MittEvent';
export default{
    name:'BallSecond',
    props:{
        ball:Number,
        val:Number,
        way:Function,
        jabuja:Boolean,
    },
    data:function(){
        return {
            second:0,
            toFirst:0,
            num:0,
        }
    },
    components:{
        BallThird,
    },
    methods:{
        getThird(value){
            this.toFirst=value;
            this.$emit('sentTOfirst',this.toFirst);
        },
        addOne(){
            this.num++;
        },
    },
    watch:{
        // ball:{
        //     handler: function(newValue){
        //         console.log('休息2s')
        //         setTimeout(()=>{
        //             console.log('secondTofirst',newValue+1);
        //             this.$emit('second-ball',newValue+1); 
        //         },2000)
        //     },
        //     immediate:true
        // }
        val:{
            handler: function(newValue){
                this.second = newValue;
            },
            immediate:true
        },
        // jabuja:function(){
        //     this.num++;
        // }
    },
    mounted(){
        // EventBus.$on(EventType.Data_Type,()=>{
        //     this.addOne();
        // })
        MittEvent.on(MittEventType.Data_Type,()=>{
            this.addOne();
        })
    },
    destroyed(){
        // EventBus.$off(EventType.Data_Type,()=>{
        //     this.addOne();
        // })
        MittEvent.off(MittEventType.Data_Type,()=>{
            this.addOne();
        })
    }
}
</script>