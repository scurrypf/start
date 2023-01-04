<template>
    <div>
        <!-- <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="item in imgItem" :key="item.id">
                <img :src="item.url" width="100%" height="100%" alt=""/>
            </el-carousel-item>
        </el-carousel> -->
    </div>
</template>
<script>
export default{
    name:'DefaultComp',
    data:function(){
        return {
            imgItem:[
                {
                    id:'1',
                    url:require('../../assets/心海.jpeg')
                },
                {
                    id:'2',
                    url:require('../../assets/头像.jpg')
                },
                {
                    id:'3',
                    url:require('../../assets/2.jpg')
                },
            ]
        }
    }
}
</script>