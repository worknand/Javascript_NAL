// Promise.all() is commonly used 
// when you want to perform multiple asynchronous operations in parallel and wait for all of them to complete before moving on. 

//case : 1
// f1 -- resolve
// f2 -- resolve
// f3 -- resolve

const function1= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("data from function1");
        }, 2000);
    });
};

const function2= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("data from function2");
        }, 2000);
    });
};

const function3= () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("data from function3");
        }, 2000);
    });
};

Promise.all([function1(),function2(),function3()])
.then(dataArray => {
    console.log("all data from diff functions: " ,dataArray);
    
})
.catch(error => {
    console.log("error in promise : " ,error);
    
});

//case 2
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

Promise.all([getData1(),getError()])
.then(case2resolve => {
    console.log("case 2 study: " ,case2resolve);
    
})
.catch(case2reject => {
    console.log("case 2 study error : " ,case2reject);
    
});

