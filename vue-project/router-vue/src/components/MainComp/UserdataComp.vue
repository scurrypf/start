<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: `/main/${ this.$route.params.userName }` }">{{ $t('msg.home')}}</el-breadcrumb-item>
                <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <!--   -->
        <el-table :data="tableData" border style="width: 1200px" height="374" class="tablestyle" stripe>
            <el-table-column fixed prop="id" label="ID" width="100"></el-table-column>
            <el-table-column prop="username" label="用户名" width="250"></el-table-column>
            <el-table-column prop="sex" label="性别" width="200"></el-table-column>
            <el-table-column prop="pass" label="密码" width="300"></el-table-column>
            <el-table-column prop="post" label="职位" width="200"></el-table-column>
            <el-table-column label="操作">    
                <template slot-scope="scope">
                    <el-button @click="getUpdate(scope.row)" type="text" size="medium">编辑</el-button>
                    <el-dialog title="更新用户" :visible.sync="dialogformVisible" :append-to-body="true" boder="false">
                        <el-form>
                            <el-form-item label="ID" label-width="120px">
                                {{ id }}
                            </el-form-item>
                            <el-form-item label="用户名" label-width="120px">
                                <el-input v-model="name" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="性别" label-width="120px">
                                <el-radio v-model="sexy" label="男">男</el-radio>
                                <el-radio v-model="sexy" label="女">女</el-radio>
                            </el-form-item>
                            <el-form-item label="密码" label-width="120px">
                                <el-input v-model="password" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="职位" label-width="120px">
                                <el-input v-model="post" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogformVisible = false">取 消</el-button>
                            <el-button type="primary" @click="updateUser">确 定</el-button>
                        </div>
                    </el-dialog>
                    <span style="width: 20px;"></span>
                    <el-button type="text" size="meadium" @click="deleteUser(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination style="text-align: center;" background @current-change="handleCurrentChange" :current-page="pagenum" layout="prev, pager, next"
            :total="totalData" :page-size="5"></el-pagination>
        <div>
          <el-button @click="getadd" icon="el-icon-plus" type="primary" class="add" plain>添加用户</el-button>
          <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
            <el-form>
              <el-form-item label="用户名" label-width="120px">
                <el-input v-model="username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" label-width="120px">
                <el-radio v-model="sex" label="男">男</el-radio>
                <el-radio v-model="sex" label="女">女</el-radio>
              </el-form-item>
              <el-form-item label="密码" label-width="120px">
                <el-input v-model="pass" autocomplete="off"></el-input>
              </el-form-item>
            <el-form-item label="职位" label-width="120px">
                <el-input v-model="posts" autocomplete="off"></el-input>
            </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="addSuc">确 定</el-button>
            </div>
          </el-dialog>
        </div>
    </div>
</template>

<script>
import { http} from "@/utils/http"
export default{
    name:'UserdataComp',
    data:function(){
        return {
            tableData:[], 
            dialogFormVisible: false,
            dialogformVisible:false,
            username:'',
            sex:'',
            pass:'',
            posts:'',
            name:'',
            sexy:'',
            password:'',
            post:'',
            id:'',
            totalData:0,
            pagenum:0,
        }
    },
    methods:{
        getadd() {
            this.dialogFormVisible = true;
        },
        getUpdate(row) {
            this.dialogformVisible = true;
            console.log(row);
            this.name = row.username;
            this.sexy = row.sex;
            this.password = row.pass;
            this.post = row.post;
            this.id = row.id;
        },
        async addSuc() {
            this.dialogFormVisible = false;
            let username = this.username, sex = this.sex, pass = this.pass , post = this.posts;
            let data = new FormData();
            data.append('username', username);
            data.append('sex', sex);
            data.append('pass', pass);
            data.append('post', post);
            const res = await http.post('/sql/adduser', data);
            if(res.data.success){
                this.$message({
                    message: '添加用户成功',
                    type: 'success'
                });
                this.getData();
                // location.reload();
            }
        },
        async deleteUser(row){
            let id = row.id;
            let data = new FormData();
            data.append('id',id);
            const res = await http.post('/sql/delete',data);
            if(res.data.success){
                this.$message({
                    message: '删除成功',
                    type: 'success'
                });
                this.getData();
                location.reload();
            }
        },
        updateUser(){
            this.dialogFormVisible = false;
            let username = this.name, sex = this.sexy, pass = this.password , id = this.id , post = this.post;
            let data = new FormData();
            data.append('username', username);
            data.append('sex', sex);
            data.append('pass', pass);
            data.append('id', id);
            data.append('post', post);
            http.post('/sql/update', data);
            this.getData();
            location.reload();
        },
        async getData(){
            let formdata = new FormData();
                formdata.append('start',0)
            const res = await http.post('/select',formdata)
            this.tableData = res.data.data;
        },
        async handleCurrentChange(newPage){
            this.pagenum = newPage;
            let formdata = new FormData();
            formdata.append('start',(newPage - 1)*5)
            const res = await http.post('/select',formdata)
            this.tableData = res.data.data;
        },
        async getAll(){
            const res = await http.get('/queryall')
            this.totalData = res.data.data.length;
        },
    },
    async mounted(){
        this.getData();
        this.getAll();
    }
}
</script>

<style lang="scss" scoped>
.bread{
    padding-top: 20px;
}
.add{
    position: fixed;
    bottom: 80px;
}
// .tablestyle{
//     height: 408px;
//     text-align: center;
// }
</style>