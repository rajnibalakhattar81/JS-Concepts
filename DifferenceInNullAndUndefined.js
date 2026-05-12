//example to show the difference between null and undefined in JavaScript
let a; // variable declared but not assigned a value
console.log(a); // Output: undefined

let b = null; // variable explicitly assigned a value of null
console.log(b); // Output: null 

// In JavaScript, undefined means that a variable has been declared 
// but has not been assigned a value. It is the default value for uninitialized variables. 
// On the other hand, null is an assignment value that represents the intentional absence of 
// any object value. It is often used to indicate that a variable should have no value 
// or that an object reference is intentionally empty.   

typeof a; // Output: "undefined"
typeof b; // Output: "object" (this is a quirk in JavaScript where null is considered an object)

var c = null;
console.log(c); // Output: null
console.log(typeof c); // Output: "object" (this is a quirk in JavaScript where null is considered an object)

var d;
console.log(d); // Output: undefined
console.log(typeof d); // Output: "undefined"       
