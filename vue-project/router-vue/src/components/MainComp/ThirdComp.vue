<template>
    <div>
        <div class="bread" ref="top">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: `/main/${ this.$route.params.userName }` }">{{ $t('msg.home') }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $t('msg.respon') }}</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <div>
            <!-- <div class="lable">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="用户管理" name="first"></el-tab-pane>
                <el-tab-pane label="配置管理" name="second"></el-tab-pane>
                <el-tab-pane label="角色管理" name="third"></el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
            </el-tabs>
            </div> -->
            <div class="res-nav">
                <div class="inputSize">
                    <el-input :placeholder="$t('msg.pleaseRes')" size="small"></el-input>
                </div>
                <div class="buttonLeft">
                        <el-button size="small">{{$t('msg.inquire')}}</el-button>
                    </div>
                <div class="nav-button">
                    <el-button size="small">{{$t('msg.type')}}</el-button>
                    <el-button size="small">{{$t('msg.lang')}}</el-button>
                    <el-button size="small">{{$t('msg.sort')}}</el-button> 
                    <el-button size="small" type="success">{{$t('msg.new')}}</el-button> 
                </div> 
            </div>
            <!-- <el-divider></el-divider> -->
            <div class="main">
                <div class="main-first">
                    <div>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-guanjunjiangbei"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-dagu"></use>
                        </svg>
                    </div>
                </div>
                <div class="main-first">
                    {{ TokenData }}
                    <div>
                        <el-input :placeholder="$t('msg.pleaseInquire')" size="small" v-model="changeMsg"></el-input>
                    <div>
                        <el-button size="small" @click="getChange">{{$t('msg.inquire')}}</el-button>
                    </div>
                    </div>
                    vuex测试{{ $store.state.msg }}
                    <img v-for="(src,index) in imgUrls" :src="src" :key="index"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { state } from '@/store/index.js'
import { mapGetters } from 'vuex'
export default{
    name:'ThirdComp',
    data:function(){
        return {
            TokenData:state,
            changeMsg:'',
        }
    },
    computed:{
        ...mapGetters(['imgUrls'])
    },
    methods:{
        getChange(){
            this.$store.commit('changeMsg',{message:this.changeMsg})
        }
    }
}
</script>

<style lang="scss" scoped>
.bread{
    padding-top: 20px;
}
.res-nav{
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dcdfe6;
    .inputSize{
        width: 420px;
    }
    .nav-button{
        position: absolute;
        right: 50px;
    }
}
.el-divider--horizontal{
    margin-bottom: 0;
}
// .lable{
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
.buttonLeft{
    margin-left: 5px;
}
</style>