<template>
    <div>
        <el-menu mode="horizontal"  default-active="1" background-color="#75b1e3" text-color="#fff" active-text-color="#406dff" @select="changeComp">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
          <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">la</el-menu-item>
            <el-menu-item index="2-2">lala</el-menu-item>
            <el-menu-item index="2-3">lalala</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">lalala</template>
                <el-menu-item index="2-4-1">kokomi</el-menu-item>
                <el-menu-item index="2-4-2">xh</el-menu-item>
                <el-menu-item index="2-4-3">shg</el-menu-item>
          </el-submenu>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://github.com/scurrypf" target="_blank">GitHub</a></el-menu-item>
          <el-menu-item index="5"><a href="https://www.yuque.com/scurry-9rjnt/hmh9vi?# " target="_blank">语雀知识库</a></el-menu-item>
          <el-menu-item index="6">个人中心</el-menu-item>
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