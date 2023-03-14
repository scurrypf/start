let arr = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

function flat(arr){
    let res = []
    arr.forEach((ele)=>{
        if(Array.isArray(ele)){
            res = res.concat(flat(ele))
        }else{
            res.push(ele)
        }
    })
    return res
}

console.log(flat(arr));