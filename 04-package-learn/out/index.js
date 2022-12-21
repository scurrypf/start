"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var a = function a() {
  console.log('hello world');
};
var gsw = {
  name: 'zpf',
  champs: '6',
  mvps: '3'
};
var name = gsw.name,
  mvps = gsw.mvps;
var nums = [];
(0, _forEach["default"])(nums).call(nums, function (element) {
  console.log(element);
});
var promise = new _promise["default"](function (res, req) {
  console.log(res.data);
  return res;
});