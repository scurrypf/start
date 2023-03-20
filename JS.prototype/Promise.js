function myAll(promiseArr){
    let res = [];
    return new Promise((resolve, reject)=>{
        promiseArr.forEach(ele => {
            ele.then(ans=>{
                res.push(ans)
                if(res.length === promiseArr.length){
                    resolve(res)
                }
            }).catch(error=>reject(error));
        });
    })
}

function myRace(promiseArr){
    return new Promise((resolve, reject)=>{
        promiseArr.forEach(ele=>{
            Promise.resolve(ele).then(
                val=>resolve(val),
                err=>reject(err)
            )
        })
    })
}