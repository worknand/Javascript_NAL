//  Promise.race() in JavaScript.

const resolvepromise= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("resolvepromise");
        }, 1000);
    });
};

const rejectpromise= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("rejectpromise");
        }, 5000);
    });
};

//use promise.race() to which promise settles first
Promise.race([
    resolvepromise(),
    rejectpromise()
])
.then(result =>{
    console.log("Result: " ,result);
    
})
.catch(error =>{
    console.log("Error:" +error);
    
})