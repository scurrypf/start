<template>
    <div>
        这是爷爷传给我的{{ val }}
        <el-button @click="sendMoney">花了一元，告诉爷爷</el-button>
    </div>
</template>

<script>
export default{
    name:'BallThird',
    props:['val','way'],
    // data:function(){
    //     return {
    //         third:0,
    //     }
    // },
    methods:{
        sendMoney(){
            //this.third = this.val-1
            //this.$emit('sentTOsecond',this.val-1);
            this.way(this.val)
        }
    },
    // watch:{
    //     val:function(newValue){
    //         this.third = newValue;
    //     }
    // }
}

</script>