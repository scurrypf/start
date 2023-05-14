// 版本号列表比较
function compareVersions(v1, v2){
    let arr1 = v1.split('.').map((Element)=>parseInt(Element));
    let arr2 = v2.split('.').map((Element)=>parseInt(Element));
    let maxLen = Math.max(arr1.length, arr2.length);
    for(let i = 0; i < maxLen; i++){
        let a = arr1[i] || 0;
        let b = arr2[i] || 0;
        if(a > b){
            return true;
        }else if(a < b){
            return false;
        }
    }
}

let v1 = '1.5.1', v2 = '1.45.0';
console.log(compareVersions(v1, v2))