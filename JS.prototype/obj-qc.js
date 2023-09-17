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

// 对象数组去重
const arr = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Mike' }
];
  
const uniqueArr = Array.from(new Set(arr.map(JSON.stringify))).map(JSON.parse);
  
console.log(uniqueArr);
