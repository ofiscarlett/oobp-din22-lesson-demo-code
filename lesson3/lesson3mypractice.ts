//Array with number
let implicitNumber = [5, 6, 9,10, 100];
//only can put number into above array

//if wnat to put string into array, need to explictly define the type
let explictNumber: (number | string |boolean )[] = [];
explictNumber.push(5);
explictNumber.push("hey");
explictNumber.push(true);

//define the vehile 
class Vehicle2 {
    type: string;
    //tireCount: number;
    //capiity: string;
    registrationNumber: string;
    speed: number;

    constructor(type : string, registrationNumber : string) {
        this.type = type;
        this.registrationNumber = registrationNumber;
    }

    //here is sort of function
    goFaster () {
        this.speed += 10;
    }

    goSlower() {
        this.speed -= 10;
    }
}

let abcTruck = new Vehicle2("truck", "ABC1234");
let defCar = new Vehicle2("personalcar", "DEF1234");
let ghiMoto = new Vehicle2("motobyke", "GHI1234");

console.log(abcTruck);