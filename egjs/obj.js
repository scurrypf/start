var a=1;
let b='abc';
const dx={
    name:'sc',
    age:'34',
    pro:'bas',
    champs:'4'
}
console.log(typeof a);
console.log(typeof b);
console.log(dx);
//增加
dx.mvps=2;//直接增加属性
dx['ms']='btob';//通过['属性名']增加
dx[b]='xyz';//通过变量增加（必须使用[]）
//修改
dx.name='zpf';
dx.age='20';
const s=dx;
s.champs=5;
//删除（基本没用，甚至有副作用）
delete dx.abc;
//冻结（只读，不可修改）
Object.freeze(dx);
dx.champs=6;//此时无法修改
//深拷贝(另还有递归遍历)
const gsw=JSON.parse(JSON.stringify(dx));
gsw.champs=6;//此时修改gsw不会影响dx
console.log(gsw);
//解构方法
const {name:z,champs}=dx;
const d=champs;
console.log(z,d);
//简写方法(当赋值的变量与key的值相同时可省略)
const gs={
    d,//前面已定义变量d
    bv:'anbcjbc'
}
console.log(gs);
console.log(s);