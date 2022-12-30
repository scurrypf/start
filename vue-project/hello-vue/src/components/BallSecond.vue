<template>
    <div>
        <BallThird :val="second" @sentTOsecond="getThird"></BallThird>
    </div>
</template>

<script>
import BallThird from './BallThird.vue';
export default{
    name:'BallSecond',
    props:{
        ball:Number,
        val:Number,
        obj:{
            name:'sc',
            
        }
    },
    data:function(){
        return {
            second:0,
            toFirst:0,
        }
    },
    components:{
        BallThird,
    },
    methods:{
        getThird(value){
            this.toFirst=value;
            this.$emit('sentTOfirst',this.toFirst);
        }
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
        }
    }
}
</script>