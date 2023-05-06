// 使用JS编写判断函数：
// 输入值为变量a和变量b，变量皆为对象；输出值为布尔值，true则为输入变量的值完全一致
function isEqual(a, b) {
  // 判断类型不同
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "object") {
    if (a === null && b === null) {
      return true;
    }
    // 判断数组
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0; i < a.length; i++) {
        // 可能会有嵌套数组
        if (!isEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    // 判断普通对象
    if (!Array.isArray(a) && !Array.isArray(b)) {
      if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
      }
      for (let key in a) {
        // 可能会有嵌套对象
        if (!isEqual(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  return a === b;
}

//快速排序
var sortArray = function(nums) {    
    //交换两个数
    const swap = (nums,i,j)=>{
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    //洗牌算法，用于将数组随机打乱
    const shuttle = (nums)=>{
        let n = nums.length;
        for(let i = 0 ; i < n ; i++){
            let r = i + Math.floor(Math.random()*(n - i));
            swap(nums,i,r);
        }
    }
    //切分，将一个数放在其在这个数组中正确的位置(左边的都比他大，右边的都比他小)
    const part = (nums,start,end)=>{
        let p = nums[start];
        let i = start + 1;
        let j = end;
        while(i <= j){
            while(i < end && nums[i] > p){
                i++;
            }
            while(j > start && nums[j] <= p){
                j--;
            }
            if(i >= j){
                break;
            }
            swap(nums,i,j);
        }
        swap(nums,start,j);
        return j;
    }
    const sort = (nums,start,end)=>{
        if(start > end)return;
        let i = part(nums,start,end);
        sort(nums,start,i - 1);
        sort(nums,i + 1,end);
    }
    shuttle(nums);
    sort(nums,0,nums.length - 1);
    return nums;
}

// Vue的数据绑定响应原理：
// 首先，Vue会为每个数据对象添加一个Observer(观察者)的类，它会遍历数据对象的每一个属性，通过Object.defineProperty方法对每一个属性添加
// 上getter和setter方法，从而实现对于数据的响应式处理
// 在Vue当中还有一个compile类它用于解析Vue中的指令系统，他会对对每个元素节点的指令进行扫描跟解析,根据指令模板替换数据,
// Vue会通过watcher类来对每一个数据添加上一个更新函数，由于在一个Vue实例当中，我们每一个数据可能会在不止一个地方出现(比如计算属性)，
// 所以Vue当中还会有一个Dep依赖收集器来管理多个watcher；将来data中数据⼀旦发生变化，会首先找到对应的Dep，通知所有Watcher执行更新函数
// 从而执行页面重新渲染。
