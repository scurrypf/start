<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: `/main/${ this.$route.params.userName }` }">{{ $t('msg.home')}}</el-breadcrumb-item>
                <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <el-table :data="tableData" border style="width: 1200px" height="408">
            <el-table-column fixed prop="username" label="用户名" width="300"></el-table-column>
            <el-table-column prop="sex" label="性别" width="300"></el-table-column>
            <el-table-column prop="pass" label="密码" width="300"></el-table-column>
            <el-table-column label="操作">    
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="medium">编辑</el-button>
                    <el-button type="text" size="medium" @click="deleteUser(scope.row)" >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
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
            username: '',
            sex: '',
            pass: '',
        }
    },
    methods:{
        getadd() {
            this.dialogFormVisible = true;
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
</style>