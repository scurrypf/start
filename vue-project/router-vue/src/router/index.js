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
        path:'first',
        component: ()=> import(/* webpackChunkName: "about" */ '../components/MainComp/FirstComp.vue')
      },
      {
        path:'second',
        component: ()=> import(/* webpackChunkName: "about" */ '../components/MainComp/SecondComp.vue')
      },
      {
        path:'',
        redirect:'first'
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
