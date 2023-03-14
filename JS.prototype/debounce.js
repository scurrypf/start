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