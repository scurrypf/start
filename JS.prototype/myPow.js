// 实现m的n次方，算法的时间复杂度是O(log n)
function myPow(m, n){
    if(n === 0)return 1;
    if(n % 2 === 0){
        return myPow(m, n / 2) * myPow(m, n / 2);
    }else{
        return m * myPow(m, (n - 1) / 2) * myPow(m, (n - 1) / 2)
    }
}

let m = 2, n = 3;
console.log(myPow(m ,n))