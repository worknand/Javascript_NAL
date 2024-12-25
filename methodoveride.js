// can we override methos in JS ? Yes

class Car{

    minspeed=100;
    constructor(make,model){
this.make=make;
this.model=model;
    }

    startEEngine(){
        console.log("start engine from car");
        
    }
}
class Audi extends Car{
//   minspeed=200;
    // overridden method
    startEEngine(){
        console.log("start engine from audi");
        
    }
}

const a1=new Audi();
a1.startEEngine();
const c1=new Car();
c1.startEEngine();
console.log(a1.minspeed);

