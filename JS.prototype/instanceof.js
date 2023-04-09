let myInstanceof = function(left, right){
    if(typeof left !== 'object' || left === null)return false;
    let proto = Object.getPrototypeOf(left);
    while(true){
        if(proto === null)return false;
        if(proto === right.prototype)return true;
        proto = Object.getPrototypeOf(proto);
    }
}

console.log(1 instanceof Object);
console.log(myInstanceof(1,Object));