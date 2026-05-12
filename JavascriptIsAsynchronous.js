// example to show that JavaScript is asynchronous

console.log("Start");

setTimeout(function() {
    console.log("This is an asynchronous message after 2 seconds");
}, 2000);   
console.log("End");

// In this example, "Start" and "End" will be logged to the console immediately,
// while the message inside the setTimeout function will be logged after a delay of 2 seconds. 
// This demonstrates that JavaScript does not block the execution of code 
// while waiting for asynchronous operations to complete.