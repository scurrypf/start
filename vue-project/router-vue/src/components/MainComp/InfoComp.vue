<template>
    <div>
        <div class="bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: `/main/${ this.$route.params.userName }` }">{{ $t('msg.home') }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $t('msg.presonInfo') }}</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <el-descriptions title="个人信息" direction="vertical" :column="4" border>
            <el-descriptions-item :label="$t('msg.userName')">{{name}}</el-descriptions-item>
            <el-descriptions-item label="性别">{{sex}}</el-descriptions-item>
            <el-descriptions-item label="密码" :span="2">{{pass}}</el-descriptions-item>
            <el-descriptions-item label="职位">
                <el-tag size="small">{{post}}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="所属球队">Golden State Warrios</el-descriptions-item>
        </el-descriptions>
        <el-button @click="getupdate" icon="el-icon-plus" type="primary" class="add" plain>修改信息</el-button>
        <el-dialog title="更新用户" :visible.sync="dialogformVisible" boder="false">
            <el-form>
                <el-form-item label="用户名" label-width="120px" v-if="isAdmin">
                    <el-input v-model="username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户名:" label-width="120px" v-else>
                    {{name}}
                </el-form-item>
                <el-form-item label="性别" label-width="120px">
                    <el-radio v-model="sexy" label="男">男</el-radio>
                    <el-radio v-model="sexy" label="女">女</el-radio>
                </el-form-item>
                <el-form-item label="密码" label-width="120px">
                    <el-input v-model="password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogformVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateUser">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {http}from '../../utils/http'
export default{
    name:'FirstComp',
    data:function(){
        return {
            dialogformVisible:false,
            arr:[],
            Arr:[],
            name:'',
            sex:'',
            id:'',
            pass:'',
            post:'',
            username:'',
            sexy:'',
            password:'',
            isAdmin:true,
        }
    },
    methods:{
        getupdate(){
            this.dialogformVisible = true;
        },
        async getAll(){
            const res = await http.get('/queryall');
            const ans = await http.get('/admin/select')
            this.arr = res.data.data;
            this.Arr = ans.data.data;
            console.log(this.arr);
            this.arr.forEach(ele=>{
                if(ele.username == this.$route.params.userName){
                    this.id = ele.id;
                    this.name = ele.username;
                    this.pass = ele.pass;
                    this.post = ele.post;
                    this.sex = ele.sex;
                    this.username = ele.username;
                    this.password = ele.pass;
                    this.sexy = ele.sex;
                }
            })
            this.Arr.forEach(ele=>{
                if(ele.user == this.$route.params.userName){
                    this.name = ele.user;
                    this.pass = ele.pass;
                    this.post = ele.post;
                    this.sex = ele.sex;
                    this.username = ele.user
                    this.password = ele.pass;
                    this.sexy = ele.sex;
                }
            })
        },
        updateUser(){
            this.dialogformVisible = false;
            let username = this.username, sex = this.sexy, pass = this.password , id = this.id , post = this.post;
            if(username == 'admin'){
                let data = new FormData();
                data.append('user', username);
                data.append('sex', sex);
                data.append('pass', pass);
                http.post('/admin/update', data);
                this.getAll();
                location.reload();
            }
            let data = new FormData();
            data.append('username', username);
            data.append('sex', sex);
            data.append('pass', pass);
            data.append('id', id);
            data.append('post', post);
            http.post('/sql/update', data);
            this.getAll();
            location.reload();
        },
    },
    async mounted(){
        await this.getAll();
        if(this.$route.params.userName === 'admin'){
            this.isAdmin = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.bread{
    padding-top: 20px;
}
</style>