import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex);

const vuexStore = new Vuex.Store({
    state:{
        msg:'First use Vuex 😀😀😀',
        imgArr:[0,1,2,3,4,5]
    },
    mutations:{
        changeMsg(a,v){
            a.msg = v.message;
        }
    },
    //类似计算属性
    getters:{
        imgUrls:(state)=>{
            return state.imgArr.map((ele)=>{
                return require(`@/assets/weathercn02/${ele}.png`)
            })
        }
    }
})

export { vuexStore }