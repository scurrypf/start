let arr = [1, 2, 3, [1, [2, 3, [1, 2, [3]]]]]

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

function flatDepth(arr, depth = 1){
    if(depth === 0)return arr.slice();
    let res = []
    arr.forEach((ele)=>{
        if(Array.isArray(ele)){
            res = res.concat(flatDepth(ele, depth - 1));
        }else{
            res.push(ele);
        }
    })
    return res
}

console.log(flatDepth(arr, 1));