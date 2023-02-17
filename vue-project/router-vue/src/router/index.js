import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DefaultComp from '../components/MainComp/DefaultComp.vue'
import StudyComp from '../components/MainComp/StudyComp.vue'
import FourComp from '../components/MainComp/TestComp.vue'
import FiveComp from '../components/MainComp/FiveComp.vue'
import SixComp from '../components/MainComp/WeatherComp.vue'
import UserdataComp from '../components/MainComp/UserdataComp.vue'
import PlayerComp from '../components/PlayComp/PlayerComp.vue'
import PlayerdataComp from '../components/PlayComp/PlayerdataComp.vue'
import SalesComp from '../components/PlayComp/SalesComp.vue'
import RadarchartComp from '../components/MainComp/RadarchartComp.vue'

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
        path:'info',
        component: ()=> import(/* webpackChunkName: "about" */ '../components/MainComp/InfoComp.vue')
      },
      {
        path:'calendar',
        component: ()=> import(/* webpackChunkName: "about" */ '../components/MainComp/CalendarComp.vue')
      },
      {
        path:'study',
        component:StudyComp,
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
        path:'weather',
        component:SixComp,
      },
      {
        path:'userdata',
        component:UserdataComp,
      },
      {
        path:'player',
        component:PlayerComp,
      },
      {
        path:'data',
        component:PlayerdataComp,
      },
      {
        path:'sales',
        component:SalesComp,
      },
      {
        path:'chart',
        component:RadarchartComp,
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
