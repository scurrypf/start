<template>
  <div v-bind:id="idApp">
    <!--v-指令练习
    <div v-html="message"></div>
    <el-button >{{ message }}</el-button>
    <div v-if="face===true">😀</div>
    <div v-else>😂</div>
    <div v-show="face===true">😭</div>
    <span v-for="arr in Arr" :key="arr">{{arr}}.</span>
    <el-input v-model="user" placeholder="请输入用户名" size="small"/>
    <el-input v-model="pass" type="password" placeholder="请输入密码" size="small"/>
    <div>用户名：{{ user }}密码：{{ pass }}</div>
    -->
  </div>
</template>

<script>
export default {
  //预定义属性
  name: 'App',
  //组件中所有的响应式数据
  data: function (){
    return {
      message: 'Hello World',
      idApp:'app',
      face:'false',
      Arr:[1,2,3,4,5,6],
      user:'',
      pass:''
    }
  },
  methods: {

  },
  //生命周期函数之一
  mounted(){
    //当该节点被挂载时触发
    setTimeout(()=>{
      this.face=true;
    },2000)
  }
}
</script>

<style lang="scss">
html,body{
  padding: 0px;
  margin: 0px;
}
</style>
