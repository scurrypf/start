<template>
  <div>
    <div class="nav">
      <nav-comp></nav-comp>
      <div class="nav-login">
        <el-button>登录</el-button>
      </div>
      <div class="search">
        <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" size="small" v-model="search"/>
      </div>
      </div>
    <div class="container">
      <div class="bgimg">
        <img src="../assets/心海.jpeg" height="100%" width="100%">
      </div>
      <div class="right">
        <div>
        <div>Hello!!!</div>
        <div>Welcome To My Website!!!</div>
        <div>This Is My House!</div>
        <div>You must first sign in !!!</div>
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
  </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue';
export default {
  //预定义属性
  name: 'LoginView',
  components:{
    NavComp,
  },
  data: function (){
    return {
      user:'',
      pass:'',
      activeIndex:'1',
      isFirst:true,
      msg:'Input 默认值',
      search:'',
    }
  },
  methods: {
    pdMM () {
        if(this.user==='zpf' && this.pass==='123456'){
          this.$message({
            message: '恭喜您！登录成功',
            type: 'success'
        }); 
        //TODO:路由跳转
        this.$router.push({path: '/about'})
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
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  width: 100%;
  height: calc(100vh - 64.8px);
}
.bgimg{
  position: absolute;
  z-index: -1;
  height:calc(100vh - 64.8px);
  width:100%;
}
.right{
  width: 60%;
  height: 100%;
  div{
    align-items: center;
    padding-top: 30px;
    margin: 20px 0 20px 0;
    div{
      display: flex;
      justify-content: center;
      font-family: 'Courier New', Courier, monospace;
      font-size: 38px;
      font-weight: bold;
      background: -webkit-linear-gradient(315deg,#ff6464,#183fab89);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
.left{
  width: 700px;
  height: 100%;
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
  color: white;
  font-size: 14px;
  background-color: #545c64;
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
    &:hover{
      cursor: pointer;
    }
  }
}
.nav{
  display: flex;
  justify-content: center;
  background-color: #75b1e3;
  position: relative;
  .nav-login{
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .search{
    position: absolute;
    top: 13px;
    left: 20px;
  }
}
</style>