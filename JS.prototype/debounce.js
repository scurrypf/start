// 简单防抖
function debounce(fn, wait = 500){
    let timer;
    return function(){
        let context = this;// 保存this指向
        let args = arguments;// 拿到event对象
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, args);
        }, wait)
    }
}

// 立即执行防抖
function debounce(fn, wait = 250, immdeaite){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        if(timer)clearTimeout(timer);
        if(immdeaite){
            let callnow = !timer
            timer = setTimeout(()=>{
                timer = null
            }, wait)
            if(callnow){
                fn.apply(context, args);
            }    
        }else{
            timer = setTimeout(()=>{
                fn.apply(context, args)
            }, wait)
        }
    }
}
