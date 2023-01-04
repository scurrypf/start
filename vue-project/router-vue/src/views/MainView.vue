<template>
  <div class="container">
    <div class="nav">
      <nav-comp></nav-comp>
      <div class="nav-login">
        {{ userName }}
        <el-button @click="toLogin">登录</el-button>
      </div>
      <div class="search">
        <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" size="small" v-model="search"/>
      </div>
      </div>
    <div class="sort">
      <div class="right">
        <aside-comp></aside-comp>
      </div>
      <div class="left">
        <!-- <el-empty description="空空的，啥也没有！！！"></el-empty> -->
        <!-- <div class="liZi">
        <vue-particles color="#39AFFD" :particleOpacity="0.7" :particlesNumber="100" shapeType="circle" :particleSize="4" 
          linesColor="#8DD1FE" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3"
          :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" style="position:absolute">
        </vue-particles>
      ``</div> -->
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
  mounted(){
    this.$notify({
          message: `欢迎登录,${this.$route.query.user}`,
          type: 'success'
        });
  }
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
    top: 10px;
    right: 20px;
  }
  .search{
    position: absolute;
    top: 13px;
    left: 20px;
  }
}
.right{
  width: 300px;
  height: 100%;
  overflow-y: auto;
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

</style>