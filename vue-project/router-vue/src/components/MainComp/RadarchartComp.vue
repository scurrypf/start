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
            <el-select v-model="name" placeholder="请选择球员">
                <el-option v-for="item in player" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <!-- <span style="width: 20px;"></span> -->
            <el-select v-model="data" placeholder="请选择数据">
                <el-option v-for="item in playerdata" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-divider></el-divider>
        <div id="myechart" style="height:500px;width: 100%;" ref="myechart"></div>
    </div>
</template>

<script>
import * as echarts from "echarts";
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
                value:'Jordon Poole',
                label:'Jordon Poole'
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
            name:'Ste',
            data:'',
        }
    },
    mounted() {
        this.setMyEchart();
    },
    methods: {
        setMyEchart() {
            const myChart = this.$refs.myechart;  //通过ref获取到DOM节点
            if (myChart) {
                const thisChart = echarts.init(myChart);  //利用原型调取Echarts的初始化方法
                const option = {
                    tooltip: {
                        confine: true,
                        enterable: true //鼠标是否可以移动到tooltip区域内
                    },
                    legend: {
                        // top : '96%',                    // 图例距离顶部边距
                        textStyle: {
                            coFlor: "#202124",
                            fontWeight: "bold",
                            fontSize: "14"
                        },
                        data: [this.name, "班级平均"]
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
                            { name: "得分", max: 33.2 },
                            { name: "篮板", max: 13.4 },
                            { name: "助攻", max: 10.9 },
                            { name: "抢断", max: 2.2 },
                            { name: "盖帽", max: 2.3 }
                        ],
                        radius: 80
                    },
                    series: [
                        {
                            type: "radar",
                            data: [
                                {
                                    value: [
                                        29.6,6.4,6.3,1.0,0.3
                                    ],
                                    name: this.name
                                },
                                {
                                    value: [
                                        0.90, 0.85, 0.37, 0.85, 0.52
                                    ],
                                    name: "班级平均"
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
        }
    }
}
</script>

<style lang="scss" scoped>
.bread{
    padding-top: 20px;
}
</style>