<template>
    <div>
        <el-descriptions title="个人信息" direction="vertical" :column="4" border>
            <el-descriptions-item label="用户名">kokomi</el-descriptions-item>
            <el-descriptions-item label="手机号">13721283440</el-descriptions-item>
            <el-descriptions-item label="居住地" :span="2">America Califonia Sanfrancisico</el-descriptions-item>
            <el-descriptions-item label="备注">
                <el-tag size="small">家</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="联系地址">America Califonia Sanfrancisico</el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
export default{
    name:'FirstComp',
}
</script>