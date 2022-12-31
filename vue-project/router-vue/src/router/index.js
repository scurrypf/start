import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routesArr = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    //路由懒加载
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue')
  }
]

const router = new VueRouter({
  routes:routesArr
})

export default router
