console.log("Equality Operators in JavaScript");

// In JavaScript, there are two types of equality operators: 
// 1. Strict Equality (===)
// 2. Loose Equality (==)   
// Strict Equality (===) checks for both value and type equality.
console.log(5 === 5); // Output: true
console.log(5 === '5'); // Output: false (different types)
console.log(true === true); // Output: true
console.log(true === 1); // Output: false (different types)     
// Loose Equality (==) checks for value equality with type coercion.
console.log(5 == 5); // Output: true
console.log(5 == '5'); // Output: true (type coercion converts '5' to 5)
console.log(true == true); // Output: true
console.log(true == 1); // Output: true (type coercion converts true to 1)  
// It's generally recommended to use strict equality (===) to avoid unexpected results due to type coercion.        

//coersion means converting a value from one type to another. In JavaScript, type coercion 
// can happen implicitly when using the loose equality operator (==) or when performing 
// operations that involve different types. For example:
console.log('5' + 5); // Output: '55' (string concatenation due to type coercion)
console.log('5' - 5); // Output: 0 (string '5' is coerced to number 5 before subtraction)
console.log('5' * 5); // Output: 25 (string '5' is coerced to number 5 before multiplication)