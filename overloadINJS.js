//Can We Overload a Function in JavaScript ? NOOO
function print(){
console.log("without parameter");
}
function print(name){
    console.log("one parameter");
}
function print(name,age){
    console.log("two parameter");
}

print(); // even if we decalre like this and called the last decalred function 

function display(browserName,browserVersion,remoteexecution) {
    if(typeof browserVersion == 'string' && typeof remoteexecution =='boolean' ){
        console.log(`browser ${browserName} and three parameters`);
        
    }
    else if (typeof browserVersion == 'string' ){
        console.log(`browser ${browserName} and two parameters`);
    }
    else{
        console.log(`browser ${browserName} and one parameters`);
    }
}
display('chrome','115',true);
display('chrome','115');