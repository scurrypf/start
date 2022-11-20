function fir(){
    const a = 456;
    return a;
}
console.log(fir());

function thir(aa,bb){
    return aa + bb;
}
console.log(thir(3,5));

//{}表示建立一个函数，没有表示执行
//简写规则，当key与函数名同名时可以简写
const firt={
    firs(){
        const b=666;
        return b
    },
    thir
}
const sd=firt;
console.log(sd.firs());
console.log(firt.firs(),firt.thir(2,300));
//匿名函数
const sec=function(aa,bb){
    return aa + bb;
}
console.log(sec(2,1));
const four=() => {const s=999; return s};
const fiv=(aaa,bbb) => aaa*bbb;
const six=(f,g)=>{const t=f;const y=g;return t/y;};
console.log(four(),fiv(2,3),six(6,3));

//栈
const Stack={
    arr:[],
    size(){
        return this.arr.length;
    },
    push(is){
        this.arr.push(is)
    },
    pops(){
        return this.arr.pop()
    }
}
Stack.push(0);Stack.push(1);Stack.push(2);Stack.push(3);
console.log('长度：',Stack.size(),Stack.arr,Stack.pops(),Stack.pops(),Stack.pops(),Stack.arr,Stack.size());

//队列--左进右出
const Queue = {
    que:[],
    size(){
        return this.que.length;
    },
    leftin(q){
        this.que.unshift(q);//左进
    },
    rightout(){
        return this.que.pop();//右出
    }
}
Queue.leftin(1);Queue.leftin(2);Queue.leftin(3);Queue.leftin(4);Queue.leftin(5);Queue.leftin(6);
console.log(Queue.size(),Queue.que,Queue.rightout(),Queue.rightout(),Queue.rightout(),Queue.size());

//队列--右进左出
const queueueue=Symbol('queueueue')
const queueue = {
    [queueueue]:[],
    size(){
        return this[queueueue].length;
    },
    ringhtin(qq){
        this[queueueue].push(qq);
    },
    leftout(){
        return this[queueueue].shift();
    }
}
queueue.ringhtin(1);queueue.ringhtin(2);queueue.ringhtin(3);queueue.ringhtin(4);queueue.ringhtin(5);queueue.ringhtin(6);
console.log(queueue.size(),queueue[queueueue],queueue.leftout(),queueue.leftout(),queueue.leftout(),queueue.size());

//哈希表