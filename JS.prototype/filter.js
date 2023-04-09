Array.prototype.filters = function(callback, thisArg){
    if(this === undefined){
        throw new TypeError('this is null or not defined')
    }
    if(typeof callback !== 'function'){
        throw new TypeError(`${callback} is not a function`)
    }
    let res = [];
    // 检查i是否在O的属性（会检查原型链）
    let O = Object(this)
    // >>>0 保证len为number，且为正整数
    let len = O.length >>> 0;
    for(let i = 0; i < len; i++){
        // 检查i是否在O的属性（会检查原型链）
        if(i in O){
            if(callback.call(thisArg, O[i], i, O)){
                res.push(O[i]);
            }
        }
    }
    return res;
}

let arr = [1, 2, 2, 3];
ans = arr.filters(a=>a == 2);
console.log(ans);
