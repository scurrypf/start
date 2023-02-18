<template>
  <div class="container">
    <div class="nav">
      <nav-comp></nav-comp>
      <div class="nav-login">
        <div class="nav-user">
          Hello,<a>{{ userName }}</a>!
        </div>
        <el-dropdown trigger="click">
          <div>
            <img class="headImg" src="../assets/headImg.jpg" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>{{ $t('msg.myMain') }}</el-dropdown-item>
            <el-dropdown-item>{{ $t('msg.myFoot') }}</el-dropdown-item>
            <el-dropdown-item>{{ $t('msg.presonInfo') }}</el-dropdown-item>
            <el-dropdown-item>{{ $t('msg.history') }}</el-dropdown-item>
            <el-dropdown-item divided><span @click="toLogin">{{ $t('msg.logout') }}</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="logo">
        <!-- <img src="https://www.tencent.com/img/index/menu_logo_hover.png" height="22px"/>         -->
        <img src="../assets/warrios.png" height="48px"/>
        <!-- <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" size="small" v-model="search"/> -->
      </div>
      <span class="logoWord">Golden State</span>
      </div>
    <div class="sort">
      <div class="right">
        <aside-comp></aside-comp>
      </div>
      <div class="left">
        <router-view></router-view>
      </div>
    </div>
    <!-- <div class="footer">
      <div style="height: 30px"></div>
      <div class="us">
      <div>用户协议</div>
      <div>|</div>
      <div>隐私政策</div>
      <div>|</div>
      <div>关于我们</div>
      <div>|</div>
      <div>加入我们</div>
      <div>|</div>
      <div>联系我们</div>
      </div>
      <div class="give">copyRight@Tencent2002-2022</div>
      <div style="height: 30px"></div>
    </div> -->
    
  </div>
</template>

<script>
import NavComp from '@/components/NavComp.vue';
import AsideComp from '@/components/AsideComp.vue';
export default {
  //预定义属性
  name: 'MainView',
  components:{
    NavComp,
    AsideComp,
  },
  props:['userName'],
  data: function (){
    return {
      user:'',
      pass:'',
      activeIndex:'1',
      isFirst:true,
      msg:'Input 默认值',
      search:'',
      value:new Date(),
    }
  },
  methods: {
      toLogin(){
        this.$router.push({path: '/'})
      }
  },
  beforeRouteLeave (to, from, next) {
  const answer = window.confirm('Do you really want to leave this page ? ')
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
  // mounted(){
  //   this.$notify({
  //         message: `欢迎登录,${this.$route.query.user}`,
  //         type: 'success'
  //       });
  // }
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100vh;
  .sort{
    display: flex;
    height: calc(100% - 61px);
    width: 100%;
  }
}
.nav{
  width: 100%;
  height: 61px;
  display: flex;
  justify-content: center;
  background-color: #75b1e3;
  position: relative;
  .nav-login{
    position: absolute;
    top: 5px;
    right: 20px;
    display: flex;
    .nav-user{
      margin-right: 10px;
      display: flex;
      align-items: center;
      color: black;
      font-family: 'Courier New', Courier, monospace;
      font-weight: 400;
    }
    .headImg{
      height: 48px;
      width: 48px;
      border-radius: 50%;
    }
  }
  .logo{
    position: absolute;
    top: 7px;
    left: 20px;
  }
}
.right{
  width: 300px;
  height: 100%;
  overflow-y: auto;
  background-color: #c6dff3;
  //background-color: #f5f6f7;
}
.left{
  width: calc(100% - 300px);
  height: 100%;
  overflow-y: auto;
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