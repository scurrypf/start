function deepclone(obj, weakMap = new WeakMap()){
    if(obj === null)return obj;
    if(obj instanceof Date)return new Date(obj);
    if(obj instanceof RegExp)return new RegExp(obj);
    if(typeof obj !== "object")return obj;
    if(weakMap.get(obj))return weakMap.get(obj);
    let cloneObj = new obj.constructor();
    weakMap.set(obj, cloneObj);
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            cloneObj[key] = deepclone(obj[key], weakMap);
        }
    }
    return cloneObj;
}

let obj = {
    a:'100',
    b:20
}

let obj1 = deepclone(obj)
obj1.b = 6999
console.log(obj,obj1);