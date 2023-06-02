// 实现一个函数重复执行，执行成功则返回，多次失败则返回失败列表
async function repeat(fn, attemp, delay){
    let fail = [];
    for(let i = 0; i < attemp; i++){
        try {
            let res = await fn();
            return res;
        } catch (error) {
            fail.push(error);
            await new Promise((resolve)=>{
                resolve()
            }, delay)
        }
    }
    throw new Error('All Attemp failed', fail);
}