<template>
    <div>
    <div class="menu">
        <!-- #f5f6f7  #ffd04b -->
        <!-- <div style="height: 1000px;"></div> -->
        <el-menu background-color="#c6dff3" text-color="#fff" :default-active="navIndex" 
                active-text-color="#409EFF" @select="activeRouter">
            <el-menu-item index="1">
                <i class="el-icon-s-custom"></i>
                <span slot="title">个人信息</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-date"></i>
                <span slot="title">日历</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-goods"></i>
                <span slot="title">Respositities</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-s-data"></i>
                <span slot="title">Tables</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-document"></i>
                <span slot="title">Form</span>
            </el-menu-item>
        </el-menu>
    </div>
    <div class="aside-foot">copyRight@Tencent2002-2023</div>
</div>
</template>
<script>
export default{
    name:'AsideComp',
    data:function(){
        return{
            navIndex:'',
            indexMap:new Map(),
        } 
    },
    mounted(){
        this.indexMap.set('1',`/main/${this.$route.params.userName}/first`);
        this.indexMap.set('2',`/main/${this.$route.params.userName}/second`);
        this.indexMap.set('3',`/main/${this.$route.params.userName}/third`);
        this.indexMap.set('4',`/main/${this.$route.params.userName}/four`);
        this.indexMap.set('5',`/main/${this.$route.params.userName}/five`);
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
<style lang="scss" scoped>
.aside-foot{
    height: 61px;
    width: 300px;
    border-top:1px solid #f5f6f7;
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
}
.menu{
    margin-bottom: 61px;
}
</style>