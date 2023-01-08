<template>
    <div>
        <div class="bread" ref="top">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: `/main/${ this.$route.params.userName }` }">{{ $t('msg.home') }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $t('msg.table') }}</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" :label="$t('msg.date')" width="150"></el-table-column>
            <el-table-column prop="name" :label="$t('msg.name')" width="120"></el-table-column>
            <el-table-column prop="country" :label="$t('msg.country')" width="120"></el-table-column>
            <el-table-column prop="province" :label="$t('msg.province')" width="120"></el-table-column>
            <el-table-column prop="city" :label="$t('msg.cityArea')" width="120"></el-table-column>
            <el-table-column prop="address" :label="$t('msg.address')" width="370"></el-table-column>
            <el-table-column prop="zip" :label="$t('msg.code')" width="120"></el-table-column>
            <el-table-column :label="$t('msg.operate')" width="120">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="medium">查看</el-button>
                    <el-button type="text" size="medium">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default{
    name:'FourComp',
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2023-01-04',
          name: 'kokomi',
          country:'America',
          province: 'California',
          city: 'San Francisco',
          address: 'America California San Francisco Oakland',
          zip: 200333
        }, {
          date: '2023-01-03',
          name: 'zpf',
          country:'America',
          province: 'California',
          city: 'San Francisco',
          address: 'America California San Francisco Oakland',
          zip: 310266
        }, {
            date: '2023-01-05',
          name: 'stepthen',
          country:'America',
          province: 'California',
          city: 'San Francisco',
          address: 'America California San Francisco Oakland',
          zip: 223385
        }, {
            date: '2023-01-02',
          name: 'klay',
          country:'America',
          province: 'California',
          city: 'San Francisco',
          address: 'America California San Francisco Oakland',
          zip: 263690
        }]
      }
    }

}
</script>
<style lang="scss" scoped>
.bread{
    padding-top: 20px;
}
</style>