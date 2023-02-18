<template>
  <div>
    <div class="nav">
      <nav-comp></nav-comp>
      <div class="logo">
        <!-- <img src="https://www.tencent.com/img/index/menu_logo_hover.png" height="22px"/>         -->
        <img src="../assets/warrios.png" height="48px" />
      </div>
      <span class="logoWord">Golden State</span>
      </div>
    <div class="container">
      <div class="bgimg">
        <img src="../assets/kokomi.jpeg" height="100%" width="100%">
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
            <div class="loginToast">{{ $t('msg.welcome') }}</div>
            <el-divider></el-divider>
          <!-- <el-form-item label="用户名："> -->
            <el-form-item :label="$t('msg.username')">
            <el-input v-model="user" :placeholder="$t('msg.pleaseName')" size="meadium"/>
          </el-form-item>
          <!-- <el-form-item label="密码："> -->
            <el-form-item :label="$t('msg.passwd')">
            <el-input v-model="pass" type="password" :placeholder="$t('msg.pleasePass')" size="meadium" show-password />
          </el-form-item>
          <el-checkbox>{{ $t('msg.remeber') }}</el-checkbox>
          <el-form-item>
            <div class="loginButton">
              <!-- <el-button @click="pdMM" type="primary">登录</el-button> -->
              <el-button @click="pdMM" type="primary">{{$t('msg.login')}}</el-button>
            <!-- <el-button @click="add1" type="primary">注册</el-button> -->
            </div>
          </el-form-item>
          </div>
          <div class="form-foot">
          <span>{{ $t('msg.forget') }}</span>
          <span>{{ $t('msg.logout') }}</span>
          </div>
        </el-form>
      </div>
    </div>   
  </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue';
import { http } from '@/utils/http';
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
    async pdMM() {
      if (this.user === 'admin') {
        const result = await http.post('/adminlogin', { username: this.user, pass: this.pass });
        const data = result.data;
        if (data.success) {
          this.$message({
            message: '恭喜您！登录成功',
            type: 'success'
          });
          //TODO:路由守卫
          const token = await data.data.token;
          console.log(token)
          sessionStorage.setItem('token', token);
          //TODO:路由跳转
          this.$router.push({ path: `/main/${this.user}`, query: { user: this.user } })
        } else {
          this.$message.error('登录失败，账号或密码错误');
        }
      } else {
        const result = await http.post('/login', { username: this.user, pass: this.pass });
        const data = result.data;
        if (data.success) {
          this.$message({
            message: '恭喜您！登录成功',
            type: 'success'
          });
          //TODO:路由守卫
          const token = await data.data.token;
          // console.log(token)
          sessionStorage.setItem('token', token);
          //TODO:路由跳转
          this.$router.push({ path: `/main/${this.user}`, query: { user: this.user } })
        } else {
          this.$message.error('登录失败，账号或密码错误');
        }
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
  height: calc(100% - 100px);
  display: flex;
  justify-content: center;
  margin-top: 100px;
  // align-items: center;
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
  .logo{
    position: absolute;
    top: 7px;
    left: 20px;
  }
}
.loginButton{
  display: flex;
  justify-content: center;
  position: relative;
  right: 25px;
}
.logoWord{
    position: absolute;
    top: 16px;
    left: 72px;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    background: -webkit-linear-gradient(315deg, #ff6464, #183fab89);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>