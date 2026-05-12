
// sort method with a compare function to sort numbers in ascending order
let numbers = [5, 2, 9, 1, 5, 6];
console.log(numbers); // Output: [5, 2, 9, 1, 5, 6]
numbers.sort(function(a, b) { 
    console.log("Comparing " + a + " and " + b); // This will show the pairs of numbers being compared during the sort process
    return a - b; 
});
console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]