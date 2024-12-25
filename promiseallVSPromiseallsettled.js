//Promise.all() vs PromiseAllSettled() in JavaScript
// The script explains the differences between Promise.all() and Promise.allSettled() in JavaScript.
//  Promise.all() resolves when all promises are fulfilled, 
// while Promise.allSettled() provides the status of each promise, whether fulfilled or rejected, allowing users to gather detailed outcomes from multiple promises.


//case 
// f1 -- resolve
// f2 -- rejected

const getData1= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("data from getData1");
        }, 2000);
    });
};

const getError= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Reject from getError");
        }, 2000);
    });
};

Promise.allSettled([
    getData1(),
    getError()
])
.then(results => {
    results.forEach(result =>{
        if(result.status === "fulfilled"){
            console.log("valuesis " , result.value);
            
        }
        else{
            console.log("Eroor is ", result.reason);
            
        }
    })
})
