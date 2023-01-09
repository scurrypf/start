import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入elementui
import ElementUI from 'element-ui';
// 引入elementui css
import 'element-ui/lib/theme-chalk/index.css';
//引入i18n
import i18n from './i18n'
// 安装至vue应用中
Vue.use(ElementUI);
//vue粒子背景
import VueParticles from 'vue-particles';
Vue.use(VueParticles)
//Vuex
import {vuexStore} from '@/vuex/index.js'

Vue.config.productionTip = false

new Vue({
  store:vuexStore,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
