//数组降维

var flattenArray = function(arr, point) {
    return Array.prototype.concat.apply(point || [], arr);
}

var deepFlatten = function(arr) {
    let arrays = flattenArray(arr);
    let newArray = [];
    for(let key in arrays) {
        if(arrays[key] instanceof Array) {
            newArray = flattenArray(arrays[key], newArray);
        } else {
            newArray.push(arrays[key])
        }
    }
    return newArray;
}

console.log(deepFlatten([1, [2,3], [4,[5]],6]));