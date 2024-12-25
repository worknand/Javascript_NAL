// JavaScript promises are tools for managing asynchronous operations, allowing tasks to be fulfilled or rejected. 
// They start in a pending state and can transition to fulfilled or rejected. 
// Promises simplify error handling and code readability, utilizing methods like .then() for success and .catch() for errors, making asynchronous code more manageable.


// Real-world applications of promises include making network requests and reading files, making them invaluable in modern web development. 
// They enhance the readability and maintainability of code.


// The three states of a promise—pending, fulfilled, and rejected

const myPromise = new Promise((resolve,reject) => {

    // async operation
    setTimeout(()=>{

        const randomNumber=Math.random();
        if(randomNumber >0.5){
            resolve(randomNumber); // resolve with a value from pending state
        }
        else{
            reject(new Error("value is less than 0.5"));
        }


    },2000)
});

myPromise
.then(result =>{
    console.log("promise is fulfilled with value:  " ,result);
    
})
.catch(error =>{
    console.log("Promises is rejected with error: " ,error);
    
}); 