//sync vs async behaviour
 
// sync
// 1   -- done -> fetch 100 users  from API /DB  -- 20 secs
// 2   -- done
//  3  -- done
// 4   -- done
// end

// blocking behaviour for the user 

console.log("start");
for (let index = 0; index < 3; index++) {
    console.log(index); 
}
console.log("stop");

console.log("---------------------------");

// async example
console.log("start");
setTimeout(() => {
    console.log("time is done");
    
},1000);
console.log("stop");

