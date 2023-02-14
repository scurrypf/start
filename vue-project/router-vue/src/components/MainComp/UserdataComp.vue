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
        <el-table :data="tableData" border style="width: 1200px" height="373" class="tablestyle" stripe>
            <el-table-column fixed prop="username" label="用户名" width="350"></el-table-column>
            <el-table-column prop="sex" label="性别" width="350"></el-table-column>
            <el-table-column prop="pass" label="密码" width="350"></el-table-column>
            <el-table-column label="操作">    
                <template slot-scope="scope">
                    <el-button @click="getUpdate(scope.row)" type="text" size="medium">编辑</el-button>
                    <el-dialog title="更新用户" :visible.sync="dialogformVisible" :append-to-body="true" boder="false">
                        <el-form>
                            <el-form-item label="ID">
                                {{ id }}
                            </el-form-item>
                            <el-form-item label="用户名">
                                <el-input v-model="name" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="性别">
                                <el-radio v-model="sexy" label="男">男</el-radio>
                                <el-radio v-model="sexy" label="女">女</el-radio>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="password" autocomplete="off"></el-input>
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
        <el-pagination background layout="prev, pager, next" :total="20"></el-pagination>
        <div>
          <el-button @click="getadd" icon="el-icon-plus" type="primary" class="add" plain>添加用户</el-button>
          <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
            <el-form>
              <el-form-item label="用户名">
                <el-input v-model="username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio v-model="sex" label="男">男</el-radio>
                <el-radio v-model="sex" label="女">女</el-radio>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="pass" autocomplete="off"></el-input>
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
            name:'',
            sexy:'',
            password:'',
            id:'',
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
            this.id = row.id;
        },
        addSuc() {
            this.dialogFormVisible = false;
            let username = this.username, sex = this.sex, pass = this.pass;
            let data = new FormData();
            data.append('username', username);
            data.append('sex', sex);
            data.append('pass', pass);
            http.post('/sql/adduser', data);
            this.getData();
            location.reload();
        },
        deleteUser(row){
            let id = row.id;
            let data = new FormData();
            data.append('id',id);
            // console.log(row.id);
            http.post('/sql/delete',data);
            this.getData();
            location.reload();
        },
        updateUser(){
            this.dialogFormVisible = false;
            let username = this.name, sex = this.sexy, pass = this.password , id = this.id;
            let data = new FormData();
            data.append('username', username);
            data.append('sex', sex);
            data.append('pass', pass);
            data.append('id', id);
            http.post('/sql/update', data);
            this.getData();
            location.reload();
        },
        async getData(){
            const res = await http.get('/select')
            this.tableData = res.data.data;
        }
    },
    async mounted(){
        this.getData();
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