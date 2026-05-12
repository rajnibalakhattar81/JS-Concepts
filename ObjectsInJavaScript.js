

// Object declaration with properties
const person = {
    name: "John",
    age: 30,
    city: "New York"
};  

// console.log(person.name); // Output: John
// console.log(person.age); // Output: 30
// console.log(person.city); // Output: New York

// object with nested objects
const student = {
    name: "Alice",  
    age: 22,
    courses: {  
        math: "A",
        science: "B"
    }
};
// console.log(student.name); // Output: Alice
// console.log(student.age); // Output: 22
// console.log(student.courses.math); // Output: A
// console.log(student.courses.science); // Output: B

// Object has a function as a property that performs a calculation
const calculator = {
    displayName: "Simple Calculator",   
    num1: 5,
    num2: 2,
    add: function(a, b) {   
        return a + b + this.num1 + this.num2;
    },
    subtract: function(a, b) {  
        return a - b;
    }
};
console.log(calculator.add(5, 3)); // Output: 15 (5 + 3 + 5 + 2)      
console.log(calculator.subtract(5, 3)); // Output: 2 
console.log(calculator.displayName); // Output: Simple Calculator   