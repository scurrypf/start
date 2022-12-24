const PENDING = 'pending';
const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';
class myPromise{
    constructor(func){
        this.promiseState = PENDING;//存放promise状态
        this.promiseResult = null;//存放resolve和reject参数
        this.onFullfilledCallback = [];//保存成功的回调函数
        this.onRejectedCallback = [];//保存失败的回调函数
        try{
            func(this.resolve.bind(this),this.reject.bind(this));
        } catch(error){ 
            this.reject(error);
        };
    }
    resolve(value){
        if(this.promiseState===PENDING){
            this.promiseState=FULLFILLED;
            this.promiseResult=value;
            this.onFullfilledCallback.forEach(item =>{
                item(value);
            })
        }
    }
    reject(reason){
        if(this.promiseState===PENDING){
            this.promiseState=REJECTED;
            this.promiseResult=reason;
            this.onRejectedCallback.forEach(item=>{
                item(reason);
            })
        }
    }
    then(onFullfilled,onRejected){
        onFullfilled = typeof onFullfilled === 'function' ? onFullfilled :value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason =>{
            throw reason;
        }
        if(this.promiseState===PENDING){
            this.onFullfilledCallback.push(()=>{
                setTimeout(()=>{
                    onFullfilled(this.promiseResult);
                });
            });
            this.onRejectedCallback.push(()=>{
                setTimeout(()=>{
                    onRejected(this.promiseResult);
                });
            });
        }
        if(this.promiseState===FULLFILLED){
            setTimeout(()=>{
                onFullfilled(this.promiseResult)
            });
        }
        if(this.promiseState===REJECTED){
            setTimeout(()=>{
                onRejected(this.promiseResult);
            });
        }
    }
}
//验证代码
// let p = new Promise((resolve,reject) =>{
//     resolve('恭喜成功！！！')
// })
// let p1 = new myPromise((resolve,reject) =>{
//     resolve('恭喜成功！！！');
//     reject('失败了')
// })
// let p2 = new myPromise((resolve,reject) =>{
//     //throw new Error('失败');
//     //resolve('成功')
//     reject('失败')
// })
// console.log(p);
// p.then(res => console.log(res))
// console.log(p1);
// p1.then(res =>console.log(res),reas =>console.log(reas))
// p2.then(undefined,reason =>{ console.log(reason)})
// 测试代码
console.log(1);
let promise1 = new myPromise((resolve, reject) => {
    console.log(2);
    setTimeout(() => {
        console.log('A', promise1.promiseState);
        resolve('这次一定');
        console.log('B', promise1.promiseState);
        console.log(4);
    });
})
promise1.then(
    result => {
        console.log('C', promise1.promiseState);
        console.log('fulfilled:', result);
    },
    reason => {
        console.log('rejected:', reason)
    }
)
console.log(3);
const promise = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 2000);
})
promise.then(value => {
    console.log(1)
    console.log('resolve', value)
})
promise.then(value => {
    console.log(2)
    console.log('resolve', value)
})
promise.then(value => {
    console.log(3)
    console.log('resolve', value)
})
