//Day 1 Task 1
//write a functions in javascript

function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`Hello, my name is ${name}.`);
    };
}

let person1 = new Person("kevin", 20);
let person2 = new Person("Ash", 25);
let output = person1.sayHello();
console.log(output);