function Animal(name) {
    this.name = name || 'Animal';
    this.sleep = function() {
        console.log(this.name + ' is sleeping')
    }
}

Animal.prototype.eat = function(food) {
    console.log(this.name + ' is eating ' + food)
}

function Cat() {}

Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

var cat = new Cat();
console.log(cat.name);
cat.sleep();
console.log(cat instanceof Cat)
console.log(cat instanceof Animal)