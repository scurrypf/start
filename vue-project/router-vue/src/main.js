import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入elementui
import ElementUI from 'element-ui';
// 引入elementui css
import 'element-ui/lib/theme-chalk/index.css';
// 安装至vue应用中
Vue.use(ElementUI);
//vue粒子背景
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
