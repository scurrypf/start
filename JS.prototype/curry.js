// 函数柯里化
function curry(fn){
    return function curried(...args1){
        if(args1.length >= fn.length){
            return fn.apply(this, args1);
        }else{
            return function(...args2){
                return curried.apply(this, args1.concat(args2));
            }
        }
    }
}

