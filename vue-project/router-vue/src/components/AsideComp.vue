<template>
    <div>
    <div class="menu">
        <!-- #f5f6f7  #ffd04b -->
        <!-- <div style="height: 1000px;"></div> -->
        <el-menu background-color="#c6dff3" text-color="#fff" :default-active="navIndex" 
                active-text-color="#409EFF" @select="activeRouter">
            <el-menu-item index="1">
                <i class="el-icon-s-custom"></i>
                <span slot="title">{{ $t('msg.presonInfo') }}</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-sunny"></i>
                <span slot="title">{{ $t('msg.weatherInfo') }}</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-date"></i>
                <span slot="title">{{ $t('msg.calendar') }}</span>
            </el-menu-item>
            <!-- <el-menu-item index="3">
                <i class="el-icon-goods"></i>
                <span slot="title">{{ $t('msg.respon') }}</span>
            </el-menu-item> -->
            <!-- <el-menu-item index="4">
                <i class="el-icon-s-data"></i>
                <span slot="title">{{ $t('msg.table') }}</span>
            </el-menu-item> -->
            <el-menu-item index="7" v-if="isAdmin">
                <i class="el-icon-s-data"></i>
                <span slot="title">权限管理</span>
            </el-menu-item>
            <el-submenu index="8">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>球员管理</span>
                </template>
                <el-menu-item-group>
                    <template slot="title"></template>
                    <el-menu-item index="1-1">基本数据</el-menu-item>
                    <el-menu-item index="1-2">比赛数据</el-menu-item>
                    <el-menu-item index="1-3">球员薪水</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="9">
                <i class="el-icon-s-data"></i>
                <span slot="title">球员能力</span>
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
            isAdmin:false,
        } 
    },
    mounted(){
        this.indexMap.set('1',`/main/${this.$route.params.userName}/info`);
        this.indexMap.set('2',`/main/${this.$route.params.userName}/calendar`);
        // this.indexMap.set('3',`/main/${this.$route.params.userName}/study`);
        // this.indexMap.set('4',`/main/${this.$route.params.userName}/four`);
        // this.indexMap.set('5',`/main/${this.$route.params.userName}/five`);
        this.indexMap.set('6',`/main/${this.$route.params.userName}/weather`);
        this.indexMap.set('7',`/main/${this.$route.params.userName}/userdata`);
        this.indexMap.set('1-1',`/main/${this.$route.params.userName}/player`);
        this.indexMap.set('1-2',`/main/${this.$route.params.userName}/data`);
        this.indexMap.set('1-3',`/main/${this.$route.params.userName}/sales`);
        this.indexMap.set('9',`/main/${this.$route.params.userName}/chart`);
        if(this.$route.params.userName === 'admin'){
            this.isAdmin = true;
        }
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