<template>
    <div>
        <BallSecond :ball="firstBall" @second-ball="getSecond"></BallSecond>
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
            firstBall:0,
        }
    },
    methods:{
        getSecond(v){
            this.firstBall=v+1;
            console.log('firstTosecond',this.firstBall);
        }
    }
    
}
</script>