<template>
    <div>
        <div class="bread">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: `/main/${ this.$route.params.userName }` }">{{ $t('msg.home') }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $t('msg.presonInfo') }}</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <el-descriptions title="kokomi" direction="vertical" :column="4" border>
            <el-descriptions-item :label="$t('msg.userName')">kokomi</el-descriptions-item>
            <el-descriptions-item :label="$t('msg.tele')">13721283440</el-descriptions-item>
            <el-descriptions-item :label="$t('msg.area')" :span="2">America California San Francisco Oakland</el-descriptions-item>
            <el-descriptions-item :label="$t('msg.add')">
                <el-tag size="small">家</el-tag>
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.connect')">America California San Francisco Oakland</el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
export default{
    name:'FirstComp',
}
</script>

<style lang="scss" scoped>
.bread{
    padding-top: 20px;
}

</style>