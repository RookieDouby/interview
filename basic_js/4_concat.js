//数组合并
//方法一: ES6, 扩展符
// var concatArr = function(arrA, arrB) {
//     return [...arr1, ...arr2]
// }

// 方法二: push方法
var concatArr = function(arrA, arrB) {
    Array.prototype.push.apply(arrA, arrB);
    return arrA;
}

var arr1 = [1,2,3];
var arr2 = [4, 5, 6];

console.log(concatArr(arr1, arr2));