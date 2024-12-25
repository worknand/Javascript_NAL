function getEvenNumber(value ,delay){
   return new Promise((resolve,reject) => {

        // async operation
        setTimeout(()=>{
    
            
            if(value % 2 === 0){
                resolve(value); // resolve with a value from pending state
            }
            else{
                reject(new Error("Not an Even number"));
            }
    
    
        },delay);
    });
}

// promise chain
getEvenNumber(4,2000)
.then(result =>{ 
    console.log("Step 1 : getting result is even numeber  " ,result);
    return getEvenNumber(6,2000);
    
})
.then(result => {
    console.log("Step 2 : getting result is even numeber  " ,result);
})
.catch(error => {
    console.log("Promises chain error: " ,error);
});
