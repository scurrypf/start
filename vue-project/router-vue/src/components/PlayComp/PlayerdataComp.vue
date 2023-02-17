<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: `/main/${this.$route.params.userName}` }">{{$t('msg.home')}}</el-breadcrumb-item>
                <el-breadcrumb-item>球员管理</el-breadcrumb-item>
                <el-breadcrumb-item>比赛数据</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <!--   -->
        <el-table :data="playerData" border height="439" stripe>
            <el-table-column prop="name" label="姓名" width="150"></el-table-column>
            <el-table-column prop="time" label="时间" width="100"></el-table-column>
            <el-table-column prop="score" label="得分" width="100"></el-table-column>
            <el-table-column prop="backboard" label="篮板" width="100"></el-table-column>
            <el-table-column prop="assist" label="助攻" width="100"></el-table-column>
            <el-table-column prop="stolen" label="抢断" width="100"></el-table-column>
            <el-table-column prop="block" label="盖帽" width="100"></el-table-column>
            <el-table-column prop="EPM" label="EPM" width="100"></el-table-column>
            <el-table-column prop="LEBRON" label="LEBRON" width="100"></el-table-column>
            <el-table-column prop="RAPTOR" label="RAPTOR" width="100"></el-table-column>
            <el-table-column prop="BPM" label="BPM" width="100"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="getUpdate(scope.row)" type="text" size="medium">编辑</el-button>
                    <el-dialog title="更新数据" :visible.sync="dialogFormVisible" :append-to-body="true">
                        <el-form>
                            <el-form-item label="姓名" label-width="100px">
                                {{name}}
                            </el-form-item>
                            <el-form-item label="时间" label-width="100px">
                                <el-input v-model="time" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="得分" label-width="100px">
                                <el-input v-model="score" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="篮板" label-width="100px">
                                <el-input v-model="backboard" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="助攻" label-width="100px">
                                <el-input v-model="assist" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="抢断" label-width="100px">
                                <el-input v-model="stolen" autocomplete="off" size="mini"></el-input>
                            </el-form-item>
                            <el-form-item label="盖帽" label-width="100px" size="mini">
                                <el-input v-model="block" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="EPM" label-width="100px" size="mini">
                                <el-input v-model="EPM" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="LEBRON" label-width="100px" size="mini">
                                <el-input v-model="LEBRON" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="RAPTOR" label-width="100px" size="mini">
                                <el-input v-model="RAPTOR" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="BPM" label-width="100px" size="mini">
                                <el-input v-model="BPM" autocomplete="off"></el-input>
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
                        <el-input v-model="names" autocomplete="off" size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="时间" label-width="100px">
                        <el-input v-model="times" autocomplete="off" size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="得分" label-width="100px">
                        <el-input v-model="scores" autocomplete="off" size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="篮板" label-width="100px">
                        <el-input v-model="backboards" autocomplete="off" size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="助攻" label-width="100px">
                        <el-input v-model="assists" autocomplete="off" size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="抢断" label-width="100px">
                        <el-input v-model="stolens" autocomplete="off" size="mini"></el-input>
                    </el-form-item>
                    <el-form-item label="盖帽" label-width="100px" size="mini">
                        <el-input v-model="blocks" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="EPM" label-width="100px" size="mini">
                        <el-input v-model="EPMS" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="LEBRON" label-width="100px" size="mini">
                        <el-input v-model="LEBRONS" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="RAPTOR" label-width="100px" size="mini">
                        <el-input v-model="RAPTORS" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="BPM" label-width="100px" size="mini">
                        <el-input v-model="BPMS" autocomplete="off"></el-input>
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
    name:'PlayerdataComp',
    data:function(){
        return {
            playerData:[],
            pagenum:0,
            totalData:0,
            dialogFormVisible:false,
            dialogformVisible:false,
            name:'',
            time:'',
            score:'',
            backboard:'',
            assist:'',
            stolen:'',
            block:'',
            EPM:'',
            LEBRON:'',
            RAPTOR:'',
            BPM:'',
            names:'',
            times:'',
            scores:'',
            backboards:'',
            assists:'',
            stolens:'',
            blocks:'',
            EPMS:'',
            LEBRONS:'',
            RAPTORS:'',
            BPMS:'',
        }
    },
    methods:{
        async getPlayer(){
            let formdata = new FormData();
            formdata.append('start', 0)
            const res = await http.post('/playerdata/select',formdata)
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
            this.time = row.time;
            this.score = row.score;
            this.backboard = row.backboard;
            this.assist = row.assist;
            this.stolen = row.stolen;
            this.block = row.block;
            this.EPM = row.EPM;
            this.LEBRON = row.LEBRON;
            this.RAPTOR = row.RAPTOR;
            this.BPM = row.BPM;
        },
        async addSuc() {
            this.dialogformVisible = false;
            let name = this.names, time = this.times, score = this.scores , backboard = this.backboards;
            let assist = this.assists, stolen = this.stolens ,block = this.blocks, EPM = this.EPMS, LEBRON = this.LEBRONS;
            let RAPTOR = this.RAPTORS, BPM = this.BPMS;
            let data = new FormData();
            data.append('name', name);
            data.append('time', time);
            data.append('score', score);
            data.append('backboard', backboard);
            data.append('assist', assist);
            data.append('stolen', stolen);
            data.append('block', block);
            data.append('EPM', EPM);
            data.append('LEBRON', LEBRON);
            data.append('RAPTOR', RAPTOR);
            data.append('BPM', BPM);
            const res = await http.post('/playerdata/add', data);
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
            const res = await http.post('/playerdata/delete',data);
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
            let name = this.name, time = this.time, score = this.score , backboard = this.backboard;
            let assist = this.assist, stolen = this.stolen ,block = this.block, EPM = this.EPM, LEBRON = this.LEBRON;
            let RAPTOR = this.RAPTOR, BPM = this.BPM;
            let data = new FormData();
            data.append('name', name);
            data.append('time', time);
            data.append('score', score);
            data.append('backboard', backboard);
            data.append('assist', assist);
            data.append('stolen', stolen);
            data.append('block', block);
            data.append('EPM', EPM);
            data.append('LEBRON', LEBRON);
            data.append('RAPTOR', RAPTOR);
            data.append('BPM', BPM);
            http.post('/playerdata/update', data);
            this.getPlayer();
            location.reload();
        },
        async handleCurrentChange(newPage){
            this.pagenum = newPage;
            let formdata = new FormData();
            formdata.append('start',(newPage - 1)*6)
            const res = await http.post('/playerdata/select',formdata)
            this.playerData = res.data.data;
        },
        async getAll(){
            const res = await http.get('/playerdata/queryall')
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
.el-form-item{
    margin-bottom: 5px;
}
</style>