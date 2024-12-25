// callback function 
//asynchronous call/task -once this task is completed -- then only callback function will be called

// basic callback
function greet(name, callback)
{
console.log('Hello  ' +   name); //normal/sync step/task ,could be async call/api
callback();
}


// callback function
function welcome(){
    console.log("welcome!!!!!");
    
}

greet("Nanda",welcome);

//callback with async
function printInfo(name,callback){
// asynchronous function/task/step
setTimeout(function(){
    console.log("hey  "+name);
    callback("call me back.....");
    
},5000) // delay 5sec

}

function displayMessage(message){
console.log(message);

}

printInfo("Roja",displayMessage);


//
function fetchUserdata(userId, callback){
    setTimeout(function(){
        const users={
            1:{id : 1, name : "Nanda"},
            2:{id : 2, name : "Rock"}
        };
       const user1= users[userId];
       if(user1){
        callback(null, user1);
       }
       else{
        callback("user not found " , null);
       }
    },3000)
}

// callback function
function handleUserData(error,user1){
    if(error){
        console.error("error: " , error);

    }
    else{
        console.log("user :" , user1);
        
    }

}

fetchUserdata(2,handleUserData);
fetchUserdata(5,handleUserData);