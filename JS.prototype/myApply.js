Function.prototype.myApply = function (obj,args){//传入对象与数组
    if(this===Function.prototype){//防止直接被调用
        return undefined;
    }
    obj = obj || window;
    const fun = Symbol();
    obj[fun] = this;
    const result = obj[fun](...args);//数组结构调用
    delete obj[fun];//调用完delete掉
    return result;
}
