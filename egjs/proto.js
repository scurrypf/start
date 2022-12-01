function baser(){
    this.name='sc',
    this.champs='5'
}
baser.prototype.getchamps=() =>{ console.log('获取gj')}
const peo = new baser();
console.log(peo.name)
peo.getchamps()
const npeo={}
npeo.__proto__=baser.prototype
npeo.getchamps()