// Different array methods in JavaScript

//Push method - adds an element to the end of the array
var fruits = ["apple", "banana", "orange"];
fruits.push("grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]  

//Pop method - removes the last element from the array
var lastFruit = fruits.pop();
console.log(lastFruit); // Output: grape
console.log(fruits); // Output: ["apple", "banana", "orange"]

//Shift method - removes the first element from the array
var firstFruit = fruits.shift();
console.log(firstFruit); // Output: apple
console.log(fruits); // Output: ["banana", "orange"] 

//Unshift method - adds an element to the beginning of the array
fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "banana", "orange"]    

//IndexOf method - returns the index of the first occurrence of an element in the array
console.log(fruits); // Output: ["kiwi", "banana", "orange"]
var index = fruits.indexOf("banana");
console.log(index); // Output: 1    

//Splice method - adds or removes elements from the array at a specified index
console.log(fruits); // Output: ["kiwi", "banana", "orange"]    
fruits.splice(1, 1, "mango");   
console.log(fruits); // Output: ["kiwi", "mango", "orange"] 

//Includes method - checks if an element is present in the array and returns true or false  
var hasOrange = fruits.includes("orange");
console.log(hasOrange); // Output: true

//Join method - joins all elements of the array into a string with a specified separator    
var fruitString = fruits.join(", ");
console.log(fruitString); // Output: "kiwi, mango, orange"

//Slice method - returns a shallow copy of a portion of the array into a new array object selected from start to end (end not included)
console.log(fruits); // Output: ["kiwi", "mango", "orange"]
var citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits); // Output: ["mango", "orange"]

//Concat method - merges two or more arrays into a new array
var tropicalFruits = ["pineapple", "papaya"];
var allFruits = fruits.concat(tropicalFruits);
console.log(allFruits); // Output: ["kiwi", "mango", "orange", "pineapple", "papaya"]

//Reverse method - reverses the order of the elements in the array
console.log(fruits); // Output: ["kiwi", "mango", "orange"]
fruits.reverse();
console.log(fruits); // Output: ["orange", "mango", "kiwi"] 

//Sort method - sorts the elements of the array in place and returns the sorted array
console.log(fruits); // Output: ["orange", "mango", "kiwi"]
fruits.sort();
console.log(fruits); // Output: ["kiwi", "mango", "orange"]    

// sort method with a compare function to sort numbers in ascending order
var numbers = [5, 2, 9, 1, 5, 6];
console.log(numbers); // Output: [5, 2, 9, 1, 5, 6]
numbers.sort(function(a, b) { // a and b are the two elements being compared.it will pick two elements from the array and 
// compare them using the function provided. The function should return a negative value if a should be sorted before b, a positive value if b should be sorted before a, and 0 if they are equal.
    return a - b; // If a is less than b, it returns a negative value,
    //  which means a will be sorted before b. 
    // If a is greater than b, it returns a positive value, which means b will be sorted before a. If a and b are equal, it returns 0, which means their order will remain unchanged.
}); //
console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]

//Length property - returns the number of elements in the array
console.log(fruits); // Output: ["kiwi", "mango", "orange"]
console.log(fruits.length); // Output: 3

//traverse an array using for loop
console.log(fruits);    
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output: kiwi, mango, orange
}       


//Map method - creates a new array with the results of calling a provided function on every element in the array
var numbers = [1, 2, 3, 4, 5];
var numbersSquared = numbers.map(function(num) {
    return num * num;
}); 
console.log(numbersSquared); // Output: [1, 4, 9, 16, 25]

//Filter method - creates a new array with all elements that pass the test implemented by the 
// provided function
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

//Reduce method - executes a reducer function on each element of the array, resulting in a single output value
var numbers = [1, 2, 3, 4, 5];  
var sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // 0 is the initial value for the accumulator
console.log(sum); // Output: 15

 


//iterator method - returns an iterator object that contains the values for each index in the array
var numbers = [1, 2, 3];
var iterator = numbers[Symbol.iterator](); // The Symbol.iterator is a built-in symbol that 
// specifies the default iterator for an object.
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: true } 
// (indicates that the iterator has reached the end of the array)

//ForEach method - executes a provided function once for each array element
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num); // Output: 1, 2, 3, 4, 5
});

//Find method - returns the value of the first element in the array that satisfies 
// the provided testing function
var numbers = [1, 2, 3, 4, 5];      
var foundNumber = numbers.find(function(num) {
    return num > 3;
});
console.log(foundNumber); // Output: 4 (the first number greater than 3 in the array)  


// iterate over an array using foreach method
 let fruits1 = ["kiwi", "mango", "orange"];
 
 fruits1.forEach((fruit, index) => {
    console.log(index + ": " + fruit); // Output: 0: kiwi, 1: mango, 2: orange
    console.log(`${index}: ${fruit}`); // Output: 0: kiwi, 1: mango, 2: orange
}); 