//   what is Promise.any() function in JavaScript.

// It's used for handling multiple promises and resolving with the value of the first fulfilled/resolved promise, similar to Promise.race(). 
// However, unlike Promise.race(), Promise.any() doesn't reject immediately when the first promise rejects; 
// instead, it waits until at least one promise fulfills/resolved.

const getMessage= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("getMessage");
        }, 500);
    });
};

const gatdata= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("gatdata");
        }, 800);
    });
};

const getUsers= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("getUsers");
        }, 200);
    });
};

const getProducts= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("getProducts");
        }, 1000);
    });
};

Promise.any([
    getMessage(),
    getUsers(),
    getProducts()
])
.then(result =>{
    console.log("First successful result is " ,result); // will log first resolved promise result
    
})
.catch(error =>{
    console.log("All promises rejected " ,error); // will log  all rejecttion reasons if all promises reject
}
)

