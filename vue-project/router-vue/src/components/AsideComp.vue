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
const indexMap = new Map();
indexMap.set('1','/main/first');
indexMap.set('2','/main/second');
export default{
    name:'AsideComp',
    data:function(){
        return{
            navIndex:'1',
        } 
    },
    methods:{
        activeRouter(index){
            if(indexMap.has(index)){
                if(indexMap.get(index)!==this.$router.currentRoute.fullPath)
                this.$router.push({path:indexMap.get(index)})
            }
        }
    }
}
</script>