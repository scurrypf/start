import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DefaultComp from '../components/MainComp/DefaultComp.vue'
import ThirdComp from '../components/MainComp/ThirdComp.vue'
import FourComp from '../components/MainComp/FourComp.vue'
import FiveComp from '../components/MainComp/FiveComp.vue'
import SixComp from '../components/MainComp/SixComp.vue'

Vue.use(VueRouter)

const routesArr = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/main/:userName',
    name: 'main',
    props: true,
    //路由懒加载
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue'),
    children:[
      {
        path:'default',
        component:DefaultComp,
      },
      {
        path:'first',
        component: ()=> import(/* webpackChunkName: "about" */ '../components/MainComp/FirstComp.vue')
      },
      {
        path:'second',
        component: ()=> import(/* webpackChunkName: "about" */ '../components/MainComp/SecondComp.vue')
      },
      {
        path:'third',
        component:ThirdComp,
      },
      {
        path:'four',
        component:FourComp,
      },
      {
        path:'five',
        component:FiveComp,
      },
      {
        path:'six',
        component:SixComp,
      },
      {
        path:'',
        redirect:'default'
      }
    ]
  }
]

const router = new VueRouter({
  routes:routesArr
})


router.beforeEach((to,from,next)=>{
  const isZpf = sessionStorage.getItem('token');
  if (to.path !== '/' && !isZpf) next({ path: '/' })
  else next()
})

export default router
