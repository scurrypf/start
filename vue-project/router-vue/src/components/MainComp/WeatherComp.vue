<template>
    <div>
        <div class="bread" ref="top">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: `/main/${ this.$route.params.userName }` }">{{ $t('msg.home') }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $t('msg.weatherInfo') }}</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <div class="wea-top">
            <div class="top-first">
                <h2><span>¶</span>Weather Inquire 天气查询</h2>
            </div>
            <div class="top-sub">
                {{$t('msg.trans')}}
            </div>
        </div>
        <div class="wea-body">
            <div class="inputSize">
                    <el-input :placeholder="$t('msg.pleaseInquire')" size="small" v-model="city"></el-input>
                    <div class="buttonLeft">
                        <el-button size="small" @click="getWeather">{{$t('msg.inquire')}}</el-button>
                    </div>
            </div>
            <!-- style="width: 800px;" -->
            <el-table :data="tableData" stripe>
                <el-table-column prop="cityList" :label="$t('msg.list')"></el-table-column>
                <el-table-column prop="attribute" :label="$t('msg.cityAttri')"></el-table-column>
                <el-table-column prop="value" :label="$t('msg.val')">
                    <template v-slot:default="scope">
                            <img :src="getImg(scope.row.value)" v-if="scope.row.attribute === 'img'"/>
                            <div v-else>{{ scope.row.value }}</div>
                    </template>
                </el-table-column>
                        
            </el-table>
        </div>
    </div>
</template>

<script>
import { weather} from '@/utils/weather'
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
    img:'天气图片'
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
            const { data } = await weather.get("/weather/query", { params: { city: this.city } });
            console.log(data.result);
            let Data = [];
            Object.entries(data.result).forEach(([key, value]) => {
                if (!removeKey.includes(key)) {
                    Data.push({ attribute: key, value,cityList:keyMap[key]});
                }
            });
            this.tableData=Data;
        },
        getImg(v){
            //如果以变量的形式传递路径，且路径在src/assets下面，取路径时将要用require包裹
            parseInt(v);
            return require(`@/assets/weathercn02/${v}.png`);
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