Array.prototype.reduces = function (callback, initialValue) {
  if (this === undefined) {
    throw new TypeError("this is null or not defined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }
  let O = Object(this);
  let len = O.length >>> 0;
  let acmulator = initialValue;
  let k = 0;
  // 如果第二个参数为undefined的情况下
  // 则数组的第一个有效值作为累加器的初始值
  while (acmulator === undefined) {
    if (k < len && !(k in O)) {
      k++;
    }
    if (k >= len) {
      throw new TypeError("reduce of empty array with no initial value");
    }
    acmulator = O[k++];
  }
  while (k < len) {
    if (k in O) {
      acmulator = callback.call(this, acmulator, O[k], k, O);
    }
    k++;
  }
  return acmulator;
};

let arr = [1, 2, 3];
let ans = arr.reduces(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(ans);