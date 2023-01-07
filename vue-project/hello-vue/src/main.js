import Vue from 'vue'
import App from './App.vue'
import BallFirst from './components/BallFirst.vue'
// 引入elementui
import ElementUI from 'element-ui';
// 引入elementui css
import 'element-ui/lib/theme-chalk/index.css';
import Vueparticles from 'vue-particles';
Vue.use(Vueparticles);
// 安装至vue应用中
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(BallFirst),
  //render: h => h(App)
}).$mount('#app')
