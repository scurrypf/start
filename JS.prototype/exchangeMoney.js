function change(money){
    let strMoney = String(money);
    let len = strMoney.length;
    let res = [];
    let count = 0;
    for(let i = len - 1; i >= 0; i--){
        res.unshift(strMoney[i]);
        if(i >= 2){
            count++;
            if(count === 3){
                res.unshift(',')
                count = 0;
            }
        }    
    }
    return res.join('');
}

let money = 12345678966;
console.log(change(money))

