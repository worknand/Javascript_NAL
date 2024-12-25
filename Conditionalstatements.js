function checkAge(age){
    if(age>=18){
     console.log("Eligible for vote");
     
    }
    else{
        console.log("Not eligible for vote");  
    }
}

checkAge(18);

// switch case statment
function checkDay(daynumber){
     let day;
    switch(daynumber){
        case 0:
        console.log(day="Sunday");
        break;
        case 1:
        console.log(day="Monday");
        break;
        case 2:
        console.log(day="Tuesday");
        break;
        case 3:
        console.log(day="Wednesday");
        break;
        case 4:
        console.log(day="Thrusday");
        break;
        case 5:
        console.log(day="Friday");
        break;
        case 6:
        console.log(day="Saturday");
        break;
        default:
            break;
    }
return day;
}
day=checkDay(5);
