Array.prototype.maps = function(callback, thisArg){
    if(this === undefined){
        throw new TypeError('this is null or not defined')
    }
    if(typeof callback !== 'function'){
        throw new TypeError(`${callback} is not a function`)
    }
    let res = [];
    let O = Object(this);
    let len = O.length >>> 0;
    for(let i = 0; i < len; i++){
        if(i in O){
            let ans = callback.call(thisArg, O[i], i, O);
            res.push(ans)
        }
    }
    return res;
}
let arr = [1, 2, 3];
let ans = arr.maps((ele)=>ele + 1);
console.log(ans)