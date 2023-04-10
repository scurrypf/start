Array.prototype.forEachs = function (callback, thisArg) {
  if (this === undefined) {
    throw new TypeError("this is null or not defined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }
  let O = Object(this);
  let len = O.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in O) {
      callback.call(thisArg, O[i], i, O);
    }
  }
};
let arr = [1, 2, 3];
arr.forEachs((ele) => console.log(++ele));
console.log(arr);