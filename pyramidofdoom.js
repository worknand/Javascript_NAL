
// The "pyramid of doom" or "callback hell" is a term used to describe a situation in JavaScript where you have deeply nested callbacks within callbacks, 
// making the code hard to read and maintain. 

//pyramid of doom or callback hell

asyncfunction1((result1) => {
    asyncfunction2(result1,(result2) =>{
        asyncfunction3(result2,(result3) =>{
            asyncfunction4(result3,(result4) =>{
                
            });
        });
    });
});