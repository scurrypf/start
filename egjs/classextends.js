class bas{
    //私有属性
    #mvp
    //构造函数constructor无法私有化
    constructor(name,champs){
        this.name=name
        this.champs=champs
    }
    getchamps(){
        return this.champs
    }
    setMvp(mvp){
        this.#mvp=mvp
    }
    getMvp(){
        return this.#mvp
    }
}
const bas1=new bas()
const bas2=new bas('mj','6')
console.log(bas2.getchamps())
bas1.setMvp('3')
console.log(bas1.getMvp())

class static1{
    //静态变量------eg单例模式
    static only=null
    constructor(name,age,sex){
        this.name=name
        this.age=age
        this.sex=sex
    }
    static onlyOne(){
        if(this.only!=null){
            return this.only
        }
        else{
            this.only = new static1()
        }
        return this.only
    }
}
const peo=static1.onlyOne()//调用onlyone方法得到一个对象
console.log(peo)
peo.name='zpf'
console.log(peo)
const peo2=static1.onlyOne()
peo2.age='20'
console.log(peo2)