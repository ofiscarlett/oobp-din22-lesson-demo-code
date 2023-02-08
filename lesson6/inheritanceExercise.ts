/*
  Create class definitions to deal with the following situation:
   You have animals, which can be of any type (dog, cat, bird, etc.).
   In addition to the animal type they also have names such as "Fido" or "Fluffy".
   Animals can all make a sound, but the sound they make depends on the animal.
    Animals can all move, but the way they move depends on the animal:
    Birds can fly
    Land animals can walk
    Sea animals can swim

    When animals move the movement is logged to the console in the following format:
    "The [animal type] [animal name] is [moving]"
    For example: "The dog Fido is walking"    

    Animals should also store how many legs they have.
    Birds should also store how many wings they have.
    Sea animals should also store how many fins they have.

    Create necessary classes and make sure they all 
    inherit from the same base class.
*/
class Animal {
  animalType: string;
  anmialSound: string;
  animalMove: string;
  animalName: string;
  constructor(animalType:string, anmialSound: string, animalMove: string, animalName:string){
    this.animalType = animalType;
    this.anmialSound = anmialSound;
    this.animalMove = animalMove;
    this.animalName = animalName;
  }
  makeMove(){
    console.log(`The ${this.animalType} is ${this.animalMove}`);
  }
  makeSound(){
    console.log(this.anmialSound);
  }
}


class Poultry extends Animal {
    animalWings: number;
  constructor(
    animalType:string, 
    anmialSound: string, 
    animalMove: string, 
    animalName:string, 
    animalWings:number){
    super(animalType, anmialSound, animalMove, animalName);    
    this.animalWings = animalWings;
    }
    howManyWings(){
      console.log(`The ${this.animalType}, its name is ${this.animalName} is ${this.animalMove} and ${this.anmialSound} and it has ${this.animalWings} wings` );
    }
}

const Animal1 = new Animal("Bird", "Twigy", "Flying", "Birdy");
Animal1.makeMove();
Animal1.makeSound();
const Poultry1 = new Poultry("Bird", "Twigy", "Flying", "Birdy", 2);
Poultry1.howManyWings();