// keyword 'var' can be redeclared and updated
var x = 10;
console.log(x); // Output: 10   
var x = 20;
console.log(x); // Output: 20

// keyword 'var' is function-scoped and global scoped and can be redeclared and updated
function varExample() {
    var y = 5;  
    if (true) {
        var y = 10; 
        y = 15; // This is allowed because 'var' is function-scoped, so this 'y' is the same as the one outside the block
        var y = 20; // This is allowed because 'var' can be redeclared in the same scope
        console.log(y); // Output: 10
    }       
    console.log(y); // Output: 10 (var is function-scoped, so it affects the entire function)
}
//varExample();

// keyword 'let' is a block-scoped keyword and can be updated but not redeclared
let z = 15;
console.log(z); // Output: 15
// let z = 25; // This would cause a SyntaxError
z = 30;
console.log(z); // Output: 30

// keyword let explained with block scope in a function, it can be updated but not redeclared
function letExample() {
    let a = 5;  
    if (true) {
        let a = 10; 
        //a=15; // This is allowed because 'a' in this block scope is different from the 'a' outside the block
        //let a = 15; // This would cause a SyntaxError because 'a' is already declared in this block scope
        console.log(a); // Output: 10 (let is block-scoped, so this 'a' is different from the one outside the block)
    }       
    console.log(a); // Output: 5 (the 'a' outside the block remains unchanged)
}   
letExample();

// keyword 'const' is a block-scoped keyword and cannot be updated or redeclared
const PI = 3.14;
console.log(PI); // Output: 3.14
//PI = 3.14159; // This would cause a TypeError
//const PI = 3.14159; // This would cause a SyntaxError    

//keyword const explained with block scope in a function, it cannot be updated or redeclared
function constExample() {
    const b = 5;        
    if (true) {
        const b = 10;
        //b=15; // This would cause a TypeError because 'b' is a constant and cannot be reassigned    
        //const b = 15; // This would cause a SyntaxError because 'b' is already declared in this block scope
        console.log(b); // Output: 10 (const is block-scoped, so this 'b' is different from the one outside the block)
    }
    console.log(b); // Output: 5 (the 'b' outside the block remains unchanged)
}
//constExample();