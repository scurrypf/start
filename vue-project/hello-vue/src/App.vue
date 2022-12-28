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
    <div class="nav">
      <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  background-color="#545c64" 
        text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1">主页</el-menu-item>
          <el-submenu index="2">
          <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://github.com/scurrypf" target="_blank">GitHub</a></el-menu-item>
          <el-menu-item index="5"><a href="https://www.yuque.com/scurry-9rjnt/hmh9vi?# " target="_blank">语雀知识库</a></el-menu-item>
          <el-menu-item index="6">个人中心</el-menu-item>
          </el-menu>
        </div>  
      </div>
    <div class="container">
      <div class="bgimg">
        <img src="./assets/心海.jpeg" height="800px" width="1532px">
      </div>
      <div class="right">
        <div>
        <first-component v-if="isFirst" :info="msg"></first-component>
        <div>This Is My House!</div>
        <div>You must first sign in !!!</div>
        <div>用户名：{{ user }}密码：{{ reversePass }}</div>
        </div>
      </div>
      <div class="left">
        <el-form  label-width="80px">
          <div class="form">
            <div class="loginToast">欢迎登录！</div>
            <el-divider></el-divider>
          <el-form-item label="用户名：">
            <el-input v-model="user" placeholder="请输入用户名" size="meadium"/>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="pass" type="password" placeholder="请输入密码" size="meadium"/>
          </el-form-item>
          <el-checkbox>记住密码</el-checkbox>
          <el-form-item>
            <el-button @click="pdMM">登录</el-button>
            <el-button @click="add1">注册</el-button>
          </el-form-item>
          </div>
          <div class="form-foot">
          <span>忘记密码</span>
          <span>退出登录</span>
          </div>
        </el-form>
      </div>
    </div>
    <div style="height: 30px"></div>
    <div class="footer">
      <div class="us">
      <div>关于我们</div>
      <div>加入我们</div>
      <div>联系我们</div>
      </div>
      <div class="give">copyRight@Tencent2002-2022</div>
    </div>
    <div style="height: 30px"></div>
  </div>
</template>

<script>
//引入，要放在export外面
import FirstComponent from './components/FirstComponent.vue';

export default {
  //预定义属性
  name: 'App',
  //组件中所有的响应式数据
  components:{
    FirstComponent,
  },
  data: function (){
    return {
      // message: 'Hello World',
      // idApp:'app',
      // face:'false',
      // Arr:[1,2,3,4,5,6],
      user:'',
      pass:'',
      activeIndex:'1',
      isFirst:true,
      msg:'Input 默认值',
    }
  },
  computed:{
    reversePass:function(){
      return this.pass.split('').reverse().join('');
    }
  },
  watch: {
    user: function(newVlue,oldValue){
      console.log(newVlue,oldValue);
      // immediate:true;
    },
    pass: {
            handler: function (newValue, oldValue) {
                console.log('message', newValue)
                console.log('message', oldValue)
            },
            immediate: true
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
    add1 () {
        if(this.user!=="" && this.pass!==""){
          this.$message({
            message: `注册成功,用户名为${this.user},密码为${this.pass}`,
            type: 'success'
        }); 
        }else{
          this.$message.error('注册失败，请输入用户名和密码');
        }
      },
  },
  //生命周期函数之一
  mounted(){
    //当该节点被挂载时触发
    setTimeout(()=>{
      this.face=true;
      //this.isFirst=false;
    },2000),
    setTimeout(()=>{
      this.msg='Info的值变化了';
      //this.isFirst=false;
    },2000)

    // setInterval(()=>{
    //   this.isFirst=!this.isFirst;
    // },2000)
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
  div{
    padding-top: 50px;
    padding-left: 30px;
    div{
      font-family: 'Courier New', Courier, monospace;
      font-size: 35px;
      font-weight: bold;
      background: -webkit-linear-gradient(315deg,#5018ab7a 25%,#ff6467);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
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
  border-radius: 6px;
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
.form-foot{
  text-align: right;
  span{
    font-size: 14px;
    margin-left: 5px;
    color: #606266;
    &:hover{
      cursor: pointer;
      color: #409EFF;
    }
  }
}
.el-menu-item:hover{
  cursor: pointer;
  color: #409EFF;
}
.footer{
  color: #606266;
  font-size: 14px;
  .us{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    div{
      padding: 0 5px 0 5px;
      &:hover{
        cursor: pointer;
        color: #409EFF;
      }
    }
  }
  .give{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
.nav{
  display: flex;
  justify-content: center;
  background-color: #545c64;
}
</style>
