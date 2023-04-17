// new 操作符
function myNew(fn, ...args){
    let obj = {};
    // obj = Object.create(fn.prototype);
    obj.__proto__ = fn.prototype;
    let res = fn.apply(this, args);
    return res instanceof Object ? res : obj
}