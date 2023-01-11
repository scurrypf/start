<script>
import { ref,onMounted } from 'vue';
import rooter from '../router/index'

export default{
    name:'VueComp',
    props:['lang'],//声明props
    
    setup(props,context){//通过setup获取props值
        console.log(props.lang);

        function sendTo(){
            context.emit("sentContext","这是子发送给你的")
        }
        function jumpTo(){
            rooter.push({path:"/about"})
        }
        const myRef = ref(null);
        onMounted(()=>{
            console.log('myRef',myRef.value)
        })

        return {
            sendTo,
            myRef,
            jumpTo,
        }
    },
    
}
</script>

<template>
    <n-button ref="myRef" @click="sendTo">点击发送事件</n-button> 
    <n-button @click="jumpTo">点击跳转路由</n-button> 
    {{ lang }}
</template>