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
        <el-table :data="playerData" border style="width: 1200px" height="439" stripe>
            <el-table-column fixed prop="id" label="ID" width="50"></el-table-column>
            <el-table-column prop="name" label="姓名" width="150"></el-table-column>
            <el-table-column prop="number" label="号码" width="100"></el-table-column>
            <el-table-column prop="height" label="身高/cm" width="200"></el-table-column>
            <el-table-column prop="weight" label="体重/kg" width="200"></el-table-column>
            <el-table-column prop="reach" label="臂展/cm" width="200"></el-table-column>
            <el-table-column prop="play" label="位置" width="150"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="getUpdate(scope.row)" type="text" size="medium">编辑</el-button>
                    <el-dialog title="更新球员" :visible.sync="dialogFormVisible" :append-to-body="true">
                        <el-form>
                            <el-form-item label="ID" label-width="120px">
                                {{ id }}
                            </el-form-item>
                            <el-form-item label="姓名" label-width="100px">
                                <el-input v-model="name" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="号码" label-width="100px">
                                <el-input v-model="number" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="身高/cm" label-width="100px">
                                <el-input v-model="height" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="体重/kg" label-width="100px">
                                <el-input v-model="weight" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="臂展/cm" label-width="100px">
                                <el-input v-model="reach" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="位置" label-width="100px">
                                <el-input v-model="play" autocomplete="off"></el-input>
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
                    <el-form-item label="号码" label-width="100px">
                        <el-input v-model="numbers" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="身高/cm" label-width="100px">
                        <el-input v-model="heights" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="体重/kg" label-width="100px">
                        <el-input v-model="weights" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="臂展/cm" label-width="100px">
                        <el-input v-model="reachs" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="位置" label-width="100px">
                        <el-input v-model="plays" autocomplete="off"></el-input>
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
            number:'',
            height:'',
            weight:'',
            reach:'',
            play:'',
            names:'',
            numbers:'',
            heights:'',
            weights:'',
            reachs:'',
            plays:'',
            id:'',
        }
    },
    methods:{
        async getPlayer(){
            let formdata = new FormData();
            formdata.append('start', 0)
            const res = await http.post('/player/select',formdata)
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
            this.number = row.number;
            this.height = row.height;
            this.weight = row.weight;
            this.id = row.id;
            this.reach = row.reach;
            this.play = row.play;
        },
        async addSuc() {
            this.dialogformVisible = false;
            let name = this.names, number = this.numbers, height = this.heights , weight = this.weights;
            let reach = this.reachs, play = this.plays;
            let data = new FormData();
            data.append('name', name);
            data.append('number', number);
            data.append('height', height);
            data.append('weight', weight);
            data.append('reach', reach);
            data.append('play', play);
            const res = await http.post('/player/add', data);
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
            let id = row.id;
            let data = new FormData();
            data.append('id',id);
            const res = await http.post('/player/delete',data);
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
            let name = this.name, number = this.number, height = this.height , weight = this.weight;
            let reach = this.reach, play = this.play , id = this.id;
            let data = new FormData();
            data.append('name', name);
            data.append('number', number);
            data.append('height', height);
            data.append('weight', weight);
            data.append('reach', reach);
            data.append('play', play);
            data.append('id',id)
            http.post('/player/update', data);
            this.getPlayer();
            location.reload();
        },
        async handleCurrentChange(newPage){
            this.pagenum = newPage;
            let formdata = new FormData();
            formdata.append('start',(newPage - 1)*6)
            const res = await http.post('/player/select',formdata)
            this.playerData = res.data.data;
        },
        async getAll(){
            const res = await http.get('/player/queryall')
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