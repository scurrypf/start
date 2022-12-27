<template>
  <!--<div v-bind:id="idApp">
    v-指令练习
    <div v-html="message"></div>
    <el-button >{{ message }}</el-button>
    <div v-if="face===true">😀</div>
    <div v-else>😂</div>
    <div v-show="face===true">😭</div>
    <span v-for="arr in Arr" :key="arr">{{arr}}.</span>
    <el-input v-model="user" placeholder="请输入用户名" size="small"/>
    <el-input v-model="pass" type="password" placeholder="请输入密码" size="small"/>
    <div>用户名：{{ user }}密码：{{ pass }}</div>
  </div>    -->
  <div id="app">
    <div class="container">
      <div class="bgimg">
        <img src="./assets/心海.jpeg" height="830px" width="1703px">
      </div>
      <div class="right"></div>
      <div class="left">
        <el-form ref="form" :model="form" label-width="80px">
          <div class="form">
            <div class="loginToast">欢迎登录！</div>
            <el-divider></el-divider>
          <el-form-item label="用户名：">
            <el-input v-model="user" placeholder="请输入用户名" size="meadium"/>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="pass" type="password" placeholder="请输入密码" size="meadium"/>
          </el-form-item>
          <el-form-item>
            <el-button @click="pdMM">登录</el-button>
            <el-button >退出</el-button>
          </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //预定义属性
  name: 'App',
  //组件中所有的响应式数据
  data: function (){
    return {
      // message: 'Hello World',
      // idApp:'app',
      // face:'false',
      // Arr:[1,2,3,4,5,6],
      user:'',
      pass:''
    }
  },
  methods: {
    pdMM () {
        if(this.user==='zpf' && this.pass==='123456'){
          this.$message({
            message: '恭喜您！登录成功',
            type: 'success'
        }); 
        }else{
          this.$message.error('登录失败，账号或密码错误');
        }
      },
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
.container{
  display: flex;
  width: 100%;
  height: 100%;
}
.bgimg{
  position: absolute;
  z-index: -1;
}
.right{
  width: 60%;
  height: 830px;
}
.left{
  width: 700px;
  height: 830px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form{
  width: 400px;
  height: 350px;
  background-color: white;
}
.form{
  padding: 50px 50px 0 50px;
}
.loginToast{
  display: flex;
  justify-content: center;
  color: #409EFF;
  font-family:'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
