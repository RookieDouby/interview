//数组交集

var similarity = (arrA, arrB) => arrA.filter(value => arrB.includes(value));

var arr1 = [1,2,3,4];
var arr2 = [2,3,5,6]
console.log(similarity(arr1, arr2))