// 2. Constructor function to create object (Advantage: show custom type)
function Car(name, model){
    this.name = name;
    this.model = model;
}

const teslaCar = new Car("Tesla", "XAI");
const bmwCar = new Car("BMW", "YBW");

console.log(teslaCar); // Car { name: 'Tesla', model: 'XAI' } 

console.log(bmwCar); // Car { name: 'BMW', model: 'YBW' }

console.log(teslaCar instanceof Car); // true

/*
function Car(name, model){
    name = name;
    model = model;
}

const audiCar = new Car("Audi", "ZYQ"); // Car {}
*/
