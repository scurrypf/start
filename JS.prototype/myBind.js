Function.prototype.myBind = function(obj,...args1){
    obj = obj || {};
    const fun = Symbol();
    obj[fun] = this;
    return function (...args2){//返回一个函数
        const result = obj[fun](...args1,...args2);//该函数调用时会将arg1和arg2连接起来作为参数使用，
        return result;//不用销毁该方法，因为可能多次调用
    }
}