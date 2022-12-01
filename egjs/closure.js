const fn=[]
for(a=0;a<10;a++){
    const b=(function(c){
        return function(){
        console.log(c)
        }
    })(a)
    fn.push(b)
}
console.log(fn)
fn[8]();

function calba(msg){
    console.log(msg)
  }
function call(ad){
    const str='lalala'
    ad(str)
}
calba('lalala')
call(calba);
(function a(i){
    console.log(i)
  })(2);
  const qe={
    name:'zpf',
    sex:'na',
    cj:function cj(cj1){
      console.log(cj1)
    }
  }
  function outcj(obj){
    const na=obj.name;
    const s=obj.sex;
    const cj=getcj();
    obj.cj(cj)
  }
  function getcj(name,sex){
    return 85
  }
  outcj(qe)
