const a = ()=>{
    console.log('hello world');
}
const gsw={
    name:'zpf',
    champs:'6',
    mvps:'3'
}
const {name,mvps}=gsw;
const nums = [];
nums.forEach(element => { console.log(element) });
const promise = new Promise((res,req)=>{ 
    console.log(res.data) 
    return res;
})
