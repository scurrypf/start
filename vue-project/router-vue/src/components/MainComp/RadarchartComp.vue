<template>
    <div>
        <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: `/main/${this.$route.params.userName}` }">{{$t('msg.home')}}</el-breadcrumb-item>
                <el-breadcrumb-item>球员能力</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <div>
            <el-select v-model="name" placeholder="请选择球员" @change="setMyEchart">
                <el-option v-for="item in player" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <span>&emsp;</span>
            <el-select v-model="data" placeholder="请选择数据" @change="setMyEchart">
                <el-option v-for="item in playerdata" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <div class="add">注：未参加比赛的球员不进行能力统计</div>
        </div>
        <el-divider></el-divider>
        <div id="myechart" style="height:500px;width: 100%;" ref="myechart"></div>
    </div>
</template>

<script>
import * as echarts from "echarts";
import {http} from '../../utils/http'
export default{
    name:'RadarchartComp',
    data:function() {
        return {
            player:[{
                value:'Stephen Curry',
                label:'Stephen Curry'
            },{
                value:'Klay Thompson',
                label:'Klay Thompson'
            },{
                value:'Draymond Green',
                label:'Draymond Green'
            },{
                value:'Andrew Wiggins',
                label:'Andrew Wiggins'
            },{
                value:'Gary Payton II',
                label:'Gary Payton II'
            },{
                value:'Otto Porter',
                label:'Otto Porter'
            },{
                value:'Jordon Poole',
                label:'Jordon Poole'
            },{
                value:'Donte Divicenzo',
                label:'Donte Divicenzo'
            },{
                value:'Kevon Looney',
                label:'Kevon Looney'
            },{
                value:'Anthony Lamb',
                label:'Anthony Lamb'
            },{
                value:'Jonathan Kuminga',
                label:'Jonathan Kuminga'
            },{
                value:'JaMychal Green',
                label:'JaMychal Green'
            },{
                value:'Moses Moody',
                label:'Moses Moody'
            },
        ],
            playerdata:[{
                value:'基础数据',
                label:'基础数据'
            },{
                value:'高阶数据',
                label:'高阶数据'
            },
        ],
            name:'',
            data:'',
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
            arr:[],
            maxscore:'',
            maxbackboard:'',
            maxassist:'',
            maxstolen:'',
            maxblock:'',
            first:'',
            second:'',
            third:'',
            four:'',
            five:'',
            averscore:'',
            averbackboard:'',
            averassist:'',
            averstolen:'',
            averblock:'',
        }
    },
    mounted() {
        this.setMyEchart();
        this.getAll();
    },
    methods: {
        setMyEchart() {
            this.getAll();
            this.arr.forEach(ele=>{
                if(this.name === ele.name && this.data === '基础数据'){
                    this.name = ele.name;
                    // console.log(this.name)
                    this.score = ele.score; this.backboard = ele.backboard; this.assist = ele.assist;
                    this.stolen = ele.stolen;   this.block = ele.block;
                    this.averscore = 9.1; this.averbackboard = 3.5; this.averassist = 2,
                    this.averstolen = 0.6;    this.averblock = 0.4;
                    this.maxscore = '33.2'; this.maxbackboard = '13.4'; this.maxassist = '10.9',
                    this.maxstolen = '2.2';    this.maxblock = '2.3';
                    this.first = '得分'; this.second = '篮板'; this.third = '助攻',
                    this.four = '抢断';    this.five = '盖帽';
                }
                if(this.name === ele.name && this.data === '高阶数据'){
                    this.name = ele.name;
                    console.log(this.name)
                    this.score = ele.time;  this.backboard = ele.EPM + 6.5;   this.assist = ele.LEBRON + 3.8;
                    this.stolen = ele.RAPTOR + 7.9;   this.block = ele.BPM + 6.1;
                    this.averscore = 19.7; this.averbackboard = 6.3; this.averassist = 3.6,
                    this.averstolen = 7.5;    this.averblock = 5.9;
                    this.maxscore = '37.7'; this.maxbackboard = '15.2'; this.maxassist = '11.4',
                    this.maxstolen = '22.5';    this.maxblock = '19.5';
                    this.first = '时间'; this.second = 'EPM'; this.third = 'LEBRON',
                    this.four = 'RAPTOR';    this.five = 'BPM';
                }
            })
            // 通过ref获取到DOM节点
            const myChart = this.$refs.myechart;
            if (myChart) {
                const thisChart = echarts.init(myChart);  //利用原型调取Echarts的初始化方法
                const option = {
                    tooltip: {
                        confine: true,
                        enterable: true //鼠标是否可以移动到tooltip区域内
                    },
                    legend: {
                        // top : '96%', // 图例距离顶部边距
                        textStyle: {
                            coFlor: "#202124",
                            fontWeight: "bold",
                            fontSize: "14"
                        },
                        data: [this.name, "联盟平均"]
                    },

                    calculable: true,
                    color: ["#00CA90", "#4285F4"],
                    radar: {
                        name: {
                            textStyle: {
                                color: "#fff",
                                backgroundColor: "#999",
                                fontSize: "10",
                                borderRadius: 3,
                                padding: [3, 5]
                            }
                        },
                        indicator: [
                            { name: this.first, max: this.maxscore},
                            { name: this.second, max: this.maxbackboard },
                            { name: this.third, max: this.maxassist },
                            { name: this.four, max: this.maxstolen },
                            { name: this.five, max: this.maxblock },
                        ],
                        radius: 80
                    },
                    series: [
                        {
                            type: "radar",
                            data: [
                                {
                                    value: [
                                        this.score,
                                        this.backboard,
                                        this.assist,
                                        this.stolen,
                                        this.block,
                                    ],
                                    name: this.name
                                },
                                {
                                    value: [
                                        this.averscore,
                                        this.averbackboard,
                                        this.averassist,
                                        this.averstolen,
                                        this.averblock,
                                    ],
                                    name: "联盟平均"
                                }
                            ]
                        }
                    ]
                };
                thisChart.setOption(option);  //将编写好的配置项挂载到Echarts上
                window.addEventListener("resize", function () {
                    thisChart.resize();  //页面大小变化后Echarts也更改大小
                });
            }
        },
        async getAll(){
            const res = await http.get('/playerdata/queryall')
            this.arr = res.data.data;
        },
    }
}
</script>

<style lang="scss" scoped>
.bread{
    padding-top: 20px;
}
.add{
    padding-top: 10px;
    font-size: 12px;
    color: #c0c4cc;
}
</style>