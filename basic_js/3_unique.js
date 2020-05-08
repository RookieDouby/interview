//数组去重 2019-07-01

//类型一简单的数字,字符串, 无引用类型

//方法一: ES6的Set数据结构, Array.from
// var unique = function(arr) {
//     if(Object.prototype.toString.call(arr) != '[object Array]') {
//         console.log("传入的参数不是数组!")
//         return false;
//     } else {
//         if(arr.length <= 1) {
//             return arr;
//         }
//         return Array.from([...new Set(arr)])
//     }
// }

//方法二 arr.filter, 过滤元素的第一个出现的位置是当前元素的index的元素
// var unique = function(arr) {
//     if(Object.prototype.toString.call(arr) != '[object Array]') {
//         console.log("传入的参数不是数组!")
//         return false;
//     } else {
//         if(arr.length <= 1) {
//             return arr;
//         }
//         return arr.filter((value,index) => arr.indexOf(value) === index);
//     }
// };

//方法三
var unique = function(arr) {
    let tempArr = [];
    const len = arr.length;
    if(Object.prototype.toString.call(arr) != '[object Array]') {
        console.log("传入的参数不是数组!")
        return false;
    } else {
        if(arr.length <= 1) {
            return arr;
        }
        for(var i = 0; i < len; i ++) {
            for(var j = i + 1; j < len; j ++) {
                if(arr[i] === arr[j]) {
                    i ++;
                    j = i;
                }
            }
            tempArr.push(arr[i])
        }
        return tempArr;
    }
}

var arr1 = [1,2,3,4,"3", "4", "3", 3];
// var arr2 = [1,2,3,{name: 'sam', id: 1}, {name: 'sam', id: 1}]

console.log(unique(arr1))

