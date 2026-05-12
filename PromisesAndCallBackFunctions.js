// example of promises in JavaScript

function fetchData() {  
    return new Promise((resolve, reject) => { // The Promise constructor takes a function as an 
    // argument, which has two parameters: resolve and reject. These are functions that you call to 
    // indicate whether the asynchronous operation was successful (resolve) or if it failed (reject).
        setTimeout(() => { // Simulating an asynchronous operation using setTimeout
            const data = "Data fetched from server";
            resolve(data); // If the operation is successful, we call resolve with the fetched data
        }, 2000);   
    });
}   
// fetchData() // We call the fetchData function, which returns a promise
//     .then(data => { // We use the then method to specify what to do when the promise is resolved. 
//     // The then method takes a callback function that receives the resolved value (data in this case).
//         console.log(data); // Output: Data fetched from server      
//     })
//     .catch(error => { // We can also use the catch method to handle any errors that might occur 
//     // during the asynchronous operation. The catch method takes a callback function that receives the error if the promise is rejected.
//         console.error("Error fetching data: " + error);
//     }); 


    const data= await fetchData()
    console.log(data); // Output: Data fetched from server
