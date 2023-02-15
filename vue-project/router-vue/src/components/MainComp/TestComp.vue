<template>
    <div>
        <div class="bread" ref="top">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: `/main/${ this.$route.params.userName }` }">{{ $t('msg.home') }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $t('msg.table') }}</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" :label="$t('msg.date')" width="150"></el-table-column>
            <el-table-column prop="name" :label="$t('msg.name')" width="120"></el-table-column>
            <el-table-column prop="country" :label="$t('msg.country')" width="120"></el-table-column>
            <el-table-column prop="province" :label="$t('msg.province')" width="120"></el-table-column>
            <el-table-column prop="city" :label="$t('msg.cityArea')" width="120"></el-table-column>
            <el-table-column prop="address" :label="$t('msg.address')" width="370"></el-table-column>
            <el-table-column prop="zip" :label="$t('msg.code')" width="120"></el-table-column>
            <el-table-column :label="$t('msg.operate')" width="120">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="medium">查看</el-button>
                    <el-button type="text" size="medium">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-divider></el-divider>
        <div>
          <el-button @click="getadd">添加数据</el-button>
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
import {http} from '@/utils/http'
export default{
    name:'FourComp',
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        dialogFormVisible:false,
        username:'',
        sex:'',
        pass:'',
        tableData: [{
          date: '2023-01-04',
          name: 'kokomi',
          country:'America',
          province: 'California',
          city: 'San Francisco',
          address: 'America California San Francisco Oakland',
          zip: 200333
        }, {
          date: '2023-01-03',
          name: 'zpf',
          country:'America',
          province: 'California',
          city: 'San Francisco',
          address: 'America California San Francisco Oakland',
          zip: 310266
        }, {
            date: '2023-01-05',
          name: 'stepthen',
          country:'America',
          province: 'California',
          city: 'San Francisco',
          address: 'America California San Francisco Oakland',
          zip: 223385
        }, {
            date: '2023-01-02',
          name: 'klay',
          country:'America',
          province: 'California',
          city: 'San Francisco',
          address: 'America California San Francisco Oakland',
          zip: 263690
        }]
      }
    },
    methods:{
      getadd(){
        this.dialogFormVisible = true;
      },
      addSuc(){
        this.dialogFormVisible = false;
        let username = this.username,sex = this.sex,pass = this.pass;
        let data = new FormData();
        data.append('username',username);
        data.append('sex',sex);
        data.append('pass',pass);
        http.post('/sql/adduser',data);
      }
    }
}
</script>
<style lang="scss" scoped>
.bread{
    padding-top: 20px;
}
</style>