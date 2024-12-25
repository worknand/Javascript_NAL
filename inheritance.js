//parent -child relatioship
// only one parent class is allowed (not support multiple inheritance same as java) 
// in other words two parent class not allowed
class Automobile{
    constructor(chasisnumber){
        this.chasisnumber=chasisnumber;
    }
    useAero(){
        console.log("aerodynamics " + `${this.chasisnumber}`  );
        
    }
}

class Vehicle extends Automobile{
    constructor(make,model,year){
        super(1000);
        this.make=make;
        this.model=model;
        this.year=year;
    }

    getInfo(){
        return `${this.make} ${this.model} ${this.year}`;

    }
    startEngine(){
        console.log("Start engine  " +  `${this.make}`);
        
    }

    stopEngine(){
        console.log("stop engine  "  +  `${this.make}`);
        
    }
}


class Car extends Vehicle{
    constructor(make,model,year, fuelType){
       super(make,model,year) ; // call the parent class constructor
       this.fuelType=fuelType;
    }

    driveCar(){
        console.log("drive car");
        
    }
}

// another child class
class Truck extends Vehicle{
    constructor(make,model,year, loadingcapacity){
       super(make,model,year) ; // call the parent class constructor
       this.loadingcapacity=loadingcapacity;
    }

    driveTruck(){
        console.log("drive truck");
        
    }
}

//creating the objects (instances)
const car=new Car("honda","zxi",2000,"petrol");
const truck=new Truck("TATa","Ace",2015,300);
car.startEngine();
car.stopEngine();
car.useAero();
truck.startEngine();
truck.stopEngine();
truck.useAero();
console.log( car.getInfo());
console.log( truck.getInfo());




