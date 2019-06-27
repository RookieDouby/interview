//实现深拷贝

var deepClone = function(sourceObj) {
    const targetObj = sourceObj.constructor === Array ? [] : {};
    for(let key in sourceObj) {
        if(sourceObj.hasOwnProperty(key)) {
            if(sourceObj[key] && typeof sourceObj[key] === 'object') {
                targetObj[key] = sourceObj[key].constructor === Array ? [] : {};
                targetObj[key] = deepClone(sourceObj[key]);
            } else {    
                targetObj[key] = sourceObj[key];
            }
        }
    }
    return targetObj
}

var personA = {
    name: 'sam',
    say: function() {
        console.log(this.name)
    }
}

var personB = deepClone(personA);

console.log(personB);
console.log(personA === personB)