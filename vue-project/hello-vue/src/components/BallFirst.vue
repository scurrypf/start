<template>
    <div>
        <!-- <BallSecond :ball="firstBall" @second-ball="getSecond"></BallSecond> -->
        <BallSecond :val="toSecond" @sentTOfirst="getSecond1"></BallSecond>
    </div>
</template>

<script>
import BallSecond from './BallSecond.vue';

export default{
    name:'BallFirst',
    components:{
        BallSecond,
    },
    data:function(){
        return {
            //firstBall:0,
            toSecond:10000,
        }
    },
    methods:{
        // getSecond(v){
        //     this.firstBall=v+1;
        //     console.log('firstTosecond',this.firstBall);
        // }
        getSecond1(value){
            this.toSecond=value;
            console.log(this.toSecond,value);
        }
    }
    
}
</script>