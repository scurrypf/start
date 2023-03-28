class EventEmitter{
    constructor(){
        this.event = {
            // 这里面存入时间名以及其对应的函数数组
        }
    }
    // 订阅事件
    on(type, callback){
        if(this.event[type]){
            this.event[type].push(callback)
        }else{
            this.event[type] = [callback]
        }
    }
    // 执行订阅事件函数
    emit(type, ...args){
        if(this.event[type]){
            this.event[type].forEach(element => {
                element(...args)
            });
        }else{
            return;
        }
    }
    // 只执行一次订阅事件函数
    once(type, callback){
        let fun = ()=>{
            callback();
            this.off(type, fun)
        }
        this.on(type, fun)
    }
    // 取消订阅
    off(type, callback){
        if(this.event[type]){
            this.event[type] = this.event[type].filter(item => item !== callback)
        }else{
            return;
        }
    }
}

let eventBus = new EventEmitter();
let fun = (str) => {
    console.log(str)
}

eventBus.on('test', fun)
eventBus.emit('test', fun)
eventBus.off('test', fun)
eventBus.once('test', fun)
// console.log(eventBus);