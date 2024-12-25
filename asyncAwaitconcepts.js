// async function without await

async function f1() {
    console.log("this is async function without await");
    return 20; //return a resolved promise  on top of 20
}

f1()
.then(result =>{
    console.log(result);
});


// async function without await butwith error
async function f2() {
    console.log("this is async function without await with error");
    throw new Error("this is error"); // return a rejected promise with error
}

f2()
.catch(error => {
    console.log(`${error}`);
    
});
// async function with a resolved/reject promise
function getInfo(){
    return new Promise((resolve ,reject) => {
        const random=Math.random();
        console.log(random);
        
 setTimeout(() =>{
    if (random <0.5){
        
        resolve(30);
    }
    else{
        reject(new Error ("this is error"))
    }
 },2000)
    })
}

// create a async function  which calling getinfo()
async function getMessage() {
    try {
        const result=   await   getInfo();  // async step
        console.log(result);
    } catch (error) {
        console.log(`${error}`);
    }

 
}

getMessage();