// Call back functions are functions that are passed as arguments to other functions 
// and are executed after some operation has been completed. 
// They are commonly used in asynchronous programming, 
// event handling, and functional programming.

// Example of a callback function in an asynchronous operation using setTimeout
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from server";
        callback(data); // Call the callback function with the fetched data
    }, 2000);   
}

function displayData(data) {
    console.log(data); // Output: Data fetched from server
}           
fetchData(displayData); // Pass displayData as a callback function to fetchData

//one more example of a callback function passed as an argument to another function

fetchData(ProcessedData); // Pass ProcessedData as a callback function to fetchData

function ProcessedData(data) {
    const processed = data.toUpperCase();       
    console.log("Processed Data: " + processed); // Output: Processed Data: DATA FETCHED FROM SERVER
}

fetchData(function(data) { // Using an anonymous function as a callback
    console.log("Received: " + data); // Output: Received: Data fetched from server
});     

// // Example of a callback function in an event handling scenario
// document.getElementById("myButton").addEventListener("click", function() {
//     console.log("Button was clicked!"); // This will be executed when the button is clicked
// }); 
