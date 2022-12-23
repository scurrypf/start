Function.prototype.myCall = function (obj,...args){//传入对象与数值
    if(this===Function.prototype){
        return undefined;
    }
    obj = obj || window;//obj(对象)为可选参数，在没有赋值时为window
    const fun = Symbol();//使用symbol防止有同名属性
    obj[fun]=this;
    const result = obj[fun](...args);//借用该函数并执行
    delete obj[fun];//借用完函数delete掉
    return result;//返回函数执行值
}
