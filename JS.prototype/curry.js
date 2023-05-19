// 函数柯里化
function curry(fn){
    return function(...args){
        if(args.length >= fn.length){
            return fn.apply(this, args)
        }else{
            return function(...args2){
                return fn.apply(this, args.concat(args2))
            }
        }
    }
}