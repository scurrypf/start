import {computed, ref} from "vue"
//外部导入响应式变量
const msg = ref('这是由test.js导入的外部变量');

function consoleMsg(){
    console.log(msg);
}

//计算属性
const computeMsg = computed(()=>{
    return `这是计算属性的到的value${msg.value}`
})



export { msg,consoleMsg,computeMsg }