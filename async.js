const fs=require('fs');
fs.readFile("nanda.txt" , "utf-8",(error,data) => {
    console.log(data);
    
});
console.log("end");


// so synchronous api are interdependent on each other, 2nd api can not run prior completion of 1st api, they need to run in sequence of each other.
// asynchronous are not interdepended and can run in parallel.

