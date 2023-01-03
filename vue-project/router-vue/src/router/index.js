import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routesArr = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/main',
    name: 'main',
    //路由懒加载
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue'),
    children:[
      {
        path:'/main/first',
        component: ()=> import(/* webpackChunkName: "about" */ '../components/MainComp/FirstComp.vue')
      },
      {
        path:'/main/second',
        component: ()=> import(/* webpackChunkName: "about" */ '../components/MainComp/SecondComp.vue')
      },
      {
        path:'',
        redirect:'/main/first'
      }
    ]
  }
]

const router = new VueRouter({
  routes:routesArr
})

export default router
