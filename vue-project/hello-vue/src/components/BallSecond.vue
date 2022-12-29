<template>
    <div>

    </div>
</template>

<script>
export default{
    name:'BallSecond',
    props:{
        ball:Number,
    },
    watch:{
        ball:{
            handler: function(newValue){
                console.log('休息2s')
                setTimeout(()=>{
                    console.log('secondTofirst',newValue+1);
                    this.$emit('second-ball',newValue+1); 
                },2000)
            },
            immediate:true
        }
    }
}
</script>