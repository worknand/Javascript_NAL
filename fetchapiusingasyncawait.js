const fetchuserInfo = async() => {
    try {
        const response= await fetch("https://reqres.in/api/users?page=2");

        if(!response.ok){
         throw new Error("this is error")
        }
     
        //parse json response
        const userData= await response.json();
        console.log(userData);
    } catch (error) {
        console.log(error);
        
    }
  
   
}

//
fetchuserInfo();