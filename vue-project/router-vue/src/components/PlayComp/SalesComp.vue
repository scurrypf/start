<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: `/main/${this.$route.params.userName}` }">{{$t('msg.home')}}</el-breadcrumb-item>
                <el-breadcrumb-item>球员管理</el-breadcrumb-item>
                <el-breadcrumb-item>基本数据</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <!--   -->
        <el-table :data="playerData" border style="width: 1100px" height="439" stripe>
            <el-table-column prop="name" label="姓名" width="150"></el-table-column>
            <el-table-column prop="saletype" label="薪资类型" width="200"></el-table-column>
            <el-table-column prop="contract" label="合同" width="200"></el-table-column>
            <el-table-column prop="currentsale" label="当前薪资" width="200"></el-table-column>
            <el-table-column prop="nextsale" label="明年薪资" width="200"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="getUpdate(scope.row)" type="text" size="medium">编辑</el-button>
                    <el-dialog title="更新球员" :visible.sync="dialogFormVisible" :append-to-body="true">
                        <el-form>
                            <el-form-item label="姓名" label-width="100px">
                                {{name}}
                            </el-form-item>
                            <el-form-item label="薪资类型" label-width="100px">
                                <el-input v-model="saletype" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="合同" label-width="100px">
                                <el-input v-model="contract" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="当前薪资" label-width="100px">
                                <el-input v-model="currentsale" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="明年薪资" label-width="100px">
                                <el-input v-model="nextsale" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="updateSuc">确 定</el-button>
                        </div>
                    </el-dialog>
                    <span style="width: 20px;"></span>
                    <el-button type="text" size="meadium" @click="deletePlayer(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination style="text-align: center;" background @current-change="handleCurrentChange" :current-page="pagenum"
            layout="prev, pager, next" :total="totalData" :page-size="6"></el-pagination>
        <div>
            <el-button @click="getadd" icon="el-icon-plus" type="primary" class="add" plain>添加球员</el-button>
            <el-dialog title="添加球员" :visible.sync="dialogformVisible">
                <el-form>
                    <el-form-item label="姓名" label-width="100px">
                        <el-input v-model="names" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="薪资类型" label-width="100px">
                        <el-input v-model="saletypes" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="合同" label-width="100px">
                        <el-input v-model="contracts" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="当前薪资" label-width="100px">
                        <el-input v-model="currentsales" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="明年薪资" label-width="100px">
                        <el-input v-model="nextsales" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogformVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addSuc">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import { http } from '@/utils/http';

export default{
    name:'SalesComp',
    data:function(){
        return {
            playerData:[],
            pagenum:0,
            totalData:0,
            dialogFormVisible:false,
            dialogformVisible:false,
            name:'',
            saletype:'',
            contract:'',
            currentsale:'',
            nextsale:'',
            names:'',
            saletypes:'',
            contracts:'',
            currentsales:'',
            nextsales:'',
        }
    },
    methods:{
        async getPlayer(){
            let formdata = new FormData();
            formdata.append('start', 0)
            const res = await http.post('/playersale/select',formdata)
            console.log(res);
            this.playerData = res.data.data;
        },
        getadd(){
            this.dialogformVisible = true;
        },
        getUpdate(row){
            this.dialogFormVisible = true;
            console.log(row);
            this.name = row.name;
            this.saletype = row.saletype;
            this.contract = row.contract;
            this.currentsale = row.currentsale;
            this.nextsale = row.nextsale;
        },
        async addSuc() {
            this.dialogformVisible = false;
            let name = this.names, saletype = this.saletypes, contract = this.contracts, currentsale = this.currentsales;
            let nextsale = this.nextsales;
            let data = new FormData();
            data.append('name', name);
            data.append('saletype', saletype);
            data.append('contract', contract);
            data.append('currentsale', currentsale);
            data.append('nextsale', nextsale);
            const res = await http.post('/playersale/add', data);
            if(res.data.success){
                this.$message({
                    message: '添加球员成功',
                    type: 'success'
                });
                this.getPlayer();
                // location.reload();
            }
        },
        async deletePlayer(row){
            let name = row.name;
            let data = new FormData();
            data.append('name',name);
            const res = await http.post('/playersale/delete',data);
            if(res.data.success){
                this.$message({
                    message: '删除成功',
                    type: 'success'
                });
                this.getPlayer();
                location.reload();
            }
        },
        updateSuc(){
            this.dialogFormVisible = false;
            let name = this.name, saletype = this.saletype, contract = this.contract, currentsale = this.currentsale;
            let nextsale = this.nextsale;
            let data = new FormData();
            data.append('name', name);
            data.append('saletype', saletype);
            data.append('contract', contract);
            data.append('currentsale', currentsale);
            data.append('nextsale', nextsale);
            http.post('/playersale/update', data);
            this.getPlayer();
            location.reload();
        },
        async handleCurrentChange(newPage){
            this.pagenum = newPage;
            let formdata = new FormData();
            formdata.append('start',(newPage - 1)*6)
            const res = await http.post('/playersale/select',formdata)
            this.playerData = res.data.data;
        },
        async getAll(){
            const res = await http.get('/playersale/queryall')
            this.totalData = res.data.data.length;
        },
    },
    async mounted(){
        this.getPlayer();
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
    bottom: 70px;
}
</style>