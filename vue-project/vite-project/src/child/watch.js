import {ref, watch, watchEffect } from "vue"
const nums = ref(1000);

//根据回调函数的依赖，自动根据变量的变化进行watch
watchEffect(()=>{
    console.log(nums.value);
})

setInterval(()=>{
    nums.value--;
},1000)

//普通watch,前面的是需要watch的变量，后面是对其新旧值的操作
watch(nums,(nVal,oVal)=>{
    console.log('心智：',nVal,'老纸：',oVal)
})

export { nums }