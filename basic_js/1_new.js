//js实现一个new
// 使用new的方式调用构造函数，会经历4个步骤
// 1.创建一个新对象
// 2.将构造函数的作用域赋予这个对象(this指向这个对象)
// 3.执行构造函数中的代码
// 4.返回这个新对象

function Person(name) {
    this.name = name;
}

function newFunction(name) {
    var o = {};
    o.__proto__ == Person.prototype;
    Person.call(o, name);
    return o;
}

var person = new Person("Sam");
var person2 = new newFunction("NICK");
