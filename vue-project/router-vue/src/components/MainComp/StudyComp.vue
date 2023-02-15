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
                    <!-- <div>
                        <el-input :placeholder="$t('msg.pleaseInquire')" size="small" v-model="changeMsg"></el-input>
                    <div>
                        <el-button size="small" @click="getChange">{{$t('msg.inquire')}}</el-button>
                    </div>
                    </div>
                    vuex测试{{ $store.state.msg }}
                    <img v-for="(src,index) in imgUrls" :src="src" :key="index"/>
                </div> -->
                <div>
                    <el-input :placeholder="$t('msg.pleaseInquire')" size="small" v-model="changeMsgs"></el-input>
                    <div>
                        <el-button size="small" @click="getChange">{{$t('msg.inquire')}}</el-button>
                    </div>
                    </div>
                    vuex测试{{ msgs }}
                    <img v-for="(src,index) in imgUrls" :src="src" :key="index"/>
                    <div>
                        <el-button @click="getInput" type="primary">选择单个文件</el-button>
                        <input ref="visable" class="input-size" type="file" @change="getImginfo($event)">
                        <el-button @click="uploadImg">上传文件</el-button>
                        <div>
                            <!-- <img v-show="imgUrl" :src="imgUrl" height="400" width="800" /> -->
                            <el-carousel v-show="urls.length !== 0">
                                <el-carousel-item v-for="url in urls" :key="url">
                                    <img :src="url" width="1232" height="300" />
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <el-divider></el-divider>
                        <el-button @click="getMultiinput" type="primary">选择多个文件</el-button>
                        <input multiple ref="visible" class="input-size" type="file" @change="getmultiImginfo($event)">
                        <el-button @click="uploadMultiImgTogether">上传文件</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { state } from '@/store/index.js'
import { http } from '@/utils/http'
import { mapGetters,mapState,mapMutations,mapActions } from 'vuex'
export default{
    name:'ThirdComp',
    data:function(){
        return {
            TokenData:state,
            changeMsgs:'',
            file:null,
            imgUrl:'',
            urls:[],
            fileList:[],
        }
    },
    computed:{
        //简便写法。将其解构出来，需要import导入时解构
        ...mapState(['msgs']),
        ...mapGetters(['imgUrls']),
        //通过store使用
        //imgUrls:function(){
        //     return this.$store.getters.imgUrls;
        // }
    },
    methods:{
        ...mapMutations(['changeMsg']),
        ...mapActions(['asyncUpdate']),
        getChange(){
            //this.changeMsg({message: this.changeMsgs});
            this.asyncUpdate({message: this.changeMsgs})
            //this.$store.commit('changeMsg',{message:this.changeMsgs})
            //this.$store.dispatch('asyncUpdate',{message:this.changeMsgs})
        },
        getmultiImginfo(){
            //this.fileList = event.target.files;
            Array.prototype.forEach.call(event.target.files,file => {
                this.fileList.push(file);
            })
            console.log(this.fileList);
        },
        getMultiinput(){
            this.$refs.visible.click();
        },
        getInput(){
            this.$refs.visable.click();
        },
        getImginfo(){
            this.file = event.target.files[0];
            console.log(this.file);
        },
        //上传单文件
        async uploadImg(){
            const formdata = new FormData();
            formdata.append('img',this.file);
            const result = await http.post('/uploadsingle',formdata);
            console.log(result);
            this.urls.push(result.data.data.imageUrl);
        },
        //多文件一次上传
        async uploadMultiImg(){
            const allData = new FormData();
            //Array-like Object 类数组对象的遍历，将Array的原型方法的this指向改为指向该对象
            this.fileList.forEach((file,index)=>{
                allData.append(`multip${index}`,file);
            })
            const result = await http.post('/uploadmulti',allData);
            console.log(result);
            this.urls = result.data.data.imageUrls;
        },
        //多文件序列化多次上传,通过for循环和await来控制只有当上一个文件请求发送成功并返回后
        //再发送下一次请求
        async uploadMultiImgSeq(){
            for(let i = 0 ; i < this.fileList.length ; i++){
                let singleData = new FormData();
                singleData.append('img',this.fileList[i]);
                let result = await http.post('/uploadsingle',singleData);
                console.log(result);
                this.urls.push(result.data.data.imageUrl);
            }
        },
        //多文件同时多次上传
        async uploadMultiImgTogether(){
            let asyncTask = [];
            this.fileList.forEach((file)=>{
                let togetherData = new FormData();
                togetherData.append('img',file);
                //这里不要加上await，因为我们需要的是所有请求的最后返回的时间节点
                //在不加await时，其赋值的便是一个promise异步任务，
                //我们只需使用Promise.all方法即可实现得到它们全部返回的结果
                //并且可以在最慢请求的时间点得到返回值
                let task = http.post('/uploadsingle',togetherData);//注：虽然这里没有await，但此时请求已经被执行
                asyncTask.push(task)
            })
            //这里不需要使用then，直接使用await即可
            //Promise.all(asyncTask).then(res => console.log(res));
            const result = await Promise.all(asyncTask);
            console.log(result);
            for(let data of result){
                this.urls.push(data.data.data.imageUrl)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.bread{
    padding-top: 20px;
}

.input-size{
    // height: 0;
    // width: 0;
    display: none;
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