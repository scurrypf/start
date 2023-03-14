function throttle(fn, wait = 500 /*默认值*/){
    let timer = null;
    return function(...args){
        if(!timer){
            timer = setTimeout(()=>{
                fn.apply(this, args)
                timer = null
            }, wait)
        }
    }
}