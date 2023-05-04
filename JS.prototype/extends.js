// How to 0.1 + 0.2 === 0.3 => true;
let add = function(num1, num2){
    let num1List = (num1.toString().split('.')[1] || '').length;
    let num2List = (num2.toString().split('.')[1] || '').length;
    let baseNum = 10 * Math.max(num1List, num2List);
    return (num1 * baseNum + num2 * baseNum) / baseNum;
}

console.log(0.1 + 0.2 === 0.3, 0.3 === add(0.1,0.2))// false true;

// 继承问题
// 1.原型链继承
function parent1(){
    this.name = 'parent1';
    this.play = [1, 2, 3];
}
function child(){
    this.type = 'child1'
}

child.prototype = new parent1();
console.log(new child().type)
// 2.寄生组合式继承(最优)
function Parent(){
    this.name = 'Parent1';
    this.play = [1, 2, 3, 4]
}

Parent.prototype.getName = function(){
    return this.name;
}

function Child(){
    Parent.call(this)
    this.friend = 'Child1'
}

function extend(Parent, Child){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Parent, Child);

Child.prototype.getFriend = function(){
    return this.friend;
}

let c1 = new Child();
console.log(c1, c1.name, c1.play, c1.getName(), c1.getFriend());

