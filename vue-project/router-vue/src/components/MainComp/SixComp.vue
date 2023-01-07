<template>
    <div>
        <div class="bread" ref="top">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: `/main/${ this.$route.params.userName }` }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>天气信息</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <div class="wea-top">
            <div class="top-first">
                <h2><span>¶</span>Weather Inquire 天气查询</h2>
            </div>
            <div class="top-sub">
                用于进行每日的天气查询
            </div>
        </div>
        <div class="wea-body">
            <div class="inputSize">
                    <el-input placeholder="请输入查询城市" size="small" v-model="city"></el-input>
                    <div class="buttonLeft">
                        <el-button size="small" @click="getWeather">查询</el-button>
                    </div>
            </div>
            <!-- style="width: 800px;" -->
            <el-table :data="tableData" stripe>
                <el-table-column prop="cityList" label="条目"></el-table-column>
                <el-table-column prop="attribute" label="城市属性"></el-table-column>
                <el-table-column prop="value" label="value">
                    <template v-slot:default="scope">
                            <img :src="src" v-if="scope.row.attribute === 'img'"/>
                            <div v-else>{{ scope.row.value }}</div>
                    </template>
                </el-table-column>
                        
            </el-table>
        </div>
    </div>
</template>

<script>
import {http} from '@/utils/http'
const keyMap = {
    city:'城市',
    cityid:'城市标识',
    citycode:'城市代码',
    date:'日期',
    weather:'天气',
    temp:'温度',
    temphigh:'最高温度',
    templow:'最低温度',    
    humidity:'湿度',
    pressure:'压力',
    windspeed:'风速',
    winddirect:'风直通',
    windpower:'风力发电',
    updatetime:'更新时间',
    img:'图片'
}
export default{
    name: "SixComp",
    data: function () {
        return {
            tableData: [],
            city: "",
            src:"",
        };
    },
    // mounted() {
    //     this.getWeather();
    // },
    methods: {
        async getWeather() {
            const removeKey = ["index", "aqi", "daily", "hourly", "week"];
            const { data } = await http.get("/weather/query", { params: { city: this.city } });
            console.log(data.result);
            Object.entries(data.result).forEach(([key, value]) => {
                if (!removeKey.includes(key)) {
                    this.tableData.push({ attribute: key, value,cityList:keyMap[key]});
                }
                if(key === 'img'){
                    console.log(this.src.concat("../../assets/weathercn02/",value,".png").toString())
                }
            });
        }
    },
}
</script>

<style lang="scss" scoped>
.bread{
    padding-top: 20px;
}
.top-first{
    margin-left: 10px;
    h2{
        font-weight: 400;
        color:#1f2f3d;
        &:hover{
            cursor: pointer;
            span{
                color: #409eff;
                opacity: .4;
            } 
        }
    }
    span{
        color: #409eff;
        opacity: 0;
        &:hover{
            cursor: pointer;
                opacity: .4;
        }
    }
}
.top-sub{
    color: #5e6d82;
    font-size: 14px;
    line-height: 1.5em;
    margin-left: 25px;
    margin-bottom: 14px;
}
.wea-body{
    margin-left: 20px;
    .inputSize{
        width: 420px;
        display: flex;
        .buttonLeft{
            margin-left: 5px;
        }
    }
}
</style>