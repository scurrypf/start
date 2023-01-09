<template>
    <!-- vue框架的事件监听 -->
    <div class="default" ref="default" @scroll="setButton">
        <div class="bread" ref="top">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: `/main/${ this.$route.params.userName }` }">{{ $t('msg.home') }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $t('msg.calendar') }}</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <!-- <div style="height:10000px"></div> -->
        <el-date-picker v-model="value1" type="daterange" range-separator="至" :start-placeholder="$t('msg.startDate')" 
                        :end-placeholder="$t('msg.endDate')">
        </el-date-picker>
        <el-calendar v-model="value"></el-calendar>
        <div class="toTop" @click="Totop" v-show="hasButton">
            <i class="el-icon-caret-top"></i>
        </div>
    </div>
</template>

<script>
export default{
    name:'SecondComp',
    data:function(){
        return {
            value:new Date(),
            value1:'',
            hasButton:false,
        }
    },
    //原生的事件监听,监听之后要在destroyed中销毁
    // mounted(){
    //     this.$refs.default.addEventListener('scroll',this.setButton);
    // },
    // destroyed(){
    //     this.$refs.default.removeEventListener('scroll',this.setButton);
    // },
    computed:{
        imgArr:function(){
            return this.$store
        }
    },
    methods:{
        Totop(){
            this.$refs.top.scrollIntoView(true, {
                behavior: 'smooth'
            });
        },
        setButton(){
            if(this.$refs.default.scrollTop>0){
                this.hasButton = true;
            }else{
                this.hasButton = false;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.bread{
    padding-top: 20px;
}
.toTop{
    position: fixed;
    bottom: 70px;
    right: 80px;
    background-color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #409eff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgb(0 0 0 / 12%);
    cursor: pointer;
    z-index: 5;
}
.default{
    height: 100%;
    overflow-y: auto;
}
</style>