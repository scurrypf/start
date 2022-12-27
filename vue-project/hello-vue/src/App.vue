<template>
  <div id="app">
    <!--v-指令练习-->
    <div v-html="message"></div>
    <el-button disabled>{{ message }}</el-button>

  </div>
</template>

<script>
export default {
  //预定义属性
  name: 'App',
  //组件中所有的响应式数据
  data: function (){
    return {
      message: 'Hello World'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
html,body{
  padding: 0px;
  margin: 0px;
}
</style>
