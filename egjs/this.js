function global(a,b){
    console.log(this,this.name)
    console.log(a+b,a-b)
}

const set={
    name:'sc',
    champs:'5',
    getName(){
        console.log(this.name)
    },
    getChamps(){
        console.log(this.champs)
    }

}
const mea={
    name:'mj',
    champs:'6',
}
global.apply(mea,[6,5])//apply方法后面用数组
global.call(set,6,5)//call方法后面直接传入参数
set.getChamps.apply(mea)
const ad=set.getName.bind(mea)//bind方法直接绑定到另一个对象上
ad()