// 给对象添加去重方法
Object.prototype.unique = function(){
    let res = [];
    let obj = {};
    for(let key in this){
        if(!obj[this[key]]){
            obj[this[key]] = true;
            res.push(this[key])
        }
    }
    return res;
}