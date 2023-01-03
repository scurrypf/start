<template>
    <div>
        <el-menu text-color="#000" :default-active="navIndex" active-text-color="#75b1e3" @select="activeRouter">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">个人信息</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">日历</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">Respositities</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default{
    name:'AsideComp',
    data:function(){
        return{
            navIndex:'1',
            indexMap:new Map(),
        } 
    },
    mounted(){
        this.indexMap.set('1',`/main/${this.$route.params.userName}/first`);
        this.indexMap.set('2',`/main/${this.$route.params.userName}/second`);
    },
    methods:{
        activeRouter(index){
            if(this.indexMap.has(index)){
                if(this.indexMap.get(index)!==this.$router.currentRoute.fullPath)
                this.$router.push({path:this.indexMap.get(index)})
            }
        }
    }
}
</script>