<script>
//使用生命周期钩子函数必须要先导入，并且相对于vue2要在前面加上on
import { onMounted,ref,reactive} from 'vue';
import { msg,consoleMsg,computeMsg } from '../child/test';
import { nums } from '../child/watch'
import VueComp from '../components/VueComp.vue'
export default{
  components:{
    VueComp
  },
  //setup函数会在所有声明周期之前调用
  setup(){
    //所有的基础数据类型要想具有响应式必须使用ref提供，并且必须使用value读写
    //在模板当中读不需要加value是因为vue官方在模板中做了处理。
    const count = ref(10);
    //reactive用于传一个响应式对象
    const people = reactive({
      name:'sc',
      champs:'6',
    })
    function getData(v){
      console.log('嘿嘿！',v)
    }
    //直接调用声明周期钩子函数，不需要加{}
    //在声明周期的回调函数中书写代码逻辑
    onMounted(()=>{
      setInterval(()=>{
        count.value--;
      },1000)
    })
    //在setup函数当中，要想在模板中使用响应式变量，
    //必须在最后的位置return这个变量，return时需要加一个对象
    return {
      count,
      people,
      msg,
      consoleMsg,
      computeMsg,
      nums,
      getData,
    };
  }
}
</script>

<template>
  <main>
    这是第一次使用vue3
    <div>
      浅浅倒计时一下{{ count }}
    </div>
    <n-input v-model:value="people.name"></n-input>
    {{ people.name }}
    <n-button @click="consoleMsg">打印一下</n-button>
    {{ msg }}
    <div>
      {{ computeMsg }}
    </div>
    {{nums}}
    <n-divider />
    <VueComp lang="English" @sentContext="getData"></VueComp>
  </main>
</template>
