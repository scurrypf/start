<template>
    <div>
        <el-menu mode="horizontal"  default-active="1" background-color="#75b1e3" text-color="#fff" active-text-color="#406dff" @select="changeComp">
          <el-menu-item index="1">{{ $t('msg.home') }}</el-menu-item>
          <el-menu-item index="3">{{ $t('msg.messages') }}</el-menu-item>
          <!-- <el-menu-item index="4"><a href="https://github.com/scurrypf" target="_blank">GitHub</a></el-menu-item>
          <el-menu-item index="5"><a href="https://www.yuque.com/scurry-9rjnt/hmh9vi?# " target="_blank">{{ $t('msg.yuQue') }}</a></el-menu-item> -->
          <el-menu-item index="6">{{ $t('msg.presonCenter') }}</el-menu-item>
          </el-menu>
          <div class="Internation">
            <el-select v-model="selecter" @change="langChange" :placeholder="$t('msg.pleaseLang')" size="small">
                <el-option v-for="(lang,index) in langArr" :value="lang.value" :label="lang.key" :key="index" ></el-option>
            </el-select>
          </div>
    </div> 
</template>

<script>
const map = new Map();
export default{
    name:'NavComp',
    data:function() {
        return {
            langArr:[{
                key:'中文站',
                value:'cn',
            },{
                key:'English State',
                value:'en',
            }],
            selecter:'',
        }
    },
    mounted(){
        //map.set('1',`main/${this.$route.params.userName}/default`)
        map.set('1',`default`)
    },
    methods:{
        changeComp(index){
            if(map.has(index) && map.get(index)!==this.$router.currentRoute.fullPath){
                this.$router.push({path:map.get(index)})
            }
        },
        langChange(v){
            this.$root.$i18n.locale = v;
        }
    }
}
</script>
<style lang="scss" scoped>
.Internation{
    width: 150px;
    position: absolute;
    top: 18px;
    right: 230px;
}
</style>