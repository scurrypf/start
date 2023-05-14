// 给一个纯数字数组，按照数字出现次数排序
function sortNum(nums){
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums, map.get(nums[i]) + 1)
        }else{
            map.set(nums[i], 1)
        }
    }
    return nums.sort((a, b)=>map.get(b) - map.get(a));
}