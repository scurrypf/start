<template>
    <div>
        <el-calendar v-model="value"></el-calendar>
    </div>
</template>

<script>
export default{
    name:'SecondComp',
    data:function(){
        return {
            value:new Date(),
        }
    }
}
</script>