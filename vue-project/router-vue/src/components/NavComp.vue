<template>
    <div>
        <el-menu mode="horizontal"  default-active="1" background-color="#75b1e3" text-color="#fff" active-text-color="#406dff" @select="changeComp">
          <el-menu-item index="1">{{ $t('msg.home') }}</el-menu-item>
          <el-menu-item index="2">{{ $t('msg.work') }}</el-menu-item>
          <el-menu-item index="3">{{ $t('msg.messages') }}</el-menu-item>
          <el-menu-item index="4"><a href="https://github.com/scurrypf" target="_blank">GitHub</a></el-menu-item>
          <el-menu-item index="5"><a href="https://www.yuque.com/scurry-9rjnt/hmh9vi?# " target="_blank">{{ $t('msg.yuQue') }}</a></el-menu-item>
          <el-menu-item index="6">{{ $t('msg.presonCenter') }}</el-menu-item>
          </el-menu>
    </div> 
</template>

<script>
const map = new Map();
export default{
    name:'NavComp',
    mounted(){
        //map.set('1',`main/${this.$route.params.userName}/default`)
        map.set('1',`default`)
    },
    methods:{
        changeComp(index){
            if(map.has(index) && map.get(index)!==this.$router.currentRoute.fullPath){
                this.$router.push({path:map.get(index)})
            }
        }
    }
}
</script>