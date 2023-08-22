function flatObj(obj, prefix = ''){
    let res = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            let val = obj[key];
            let newKey = prefix ? `${prefix}-${key}` : key;
            if(typeof val === 'object' && val !== null){
                let ans = flatObj(obj[key], newKey);
                res = {...res, ...ans};
            }else{
                res[newKey] = val;
            }
        }
    }
    return res;
}

const obj = {"a":1,"b":{"c":[1,2]}};
console.log(flatObj(obj));  