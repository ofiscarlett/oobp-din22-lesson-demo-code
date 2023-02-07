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
 
  constructor(animalType:string, anmialSound: string, animalMove: string){
    this.animalType = animalType;
    this.anmialSound = anmialSound;
    this.animalMove = animalMove;
  }
  makeMove(){
    console.log(`The ${this.animalType} is ${this.animalMove}`);
  }
  makeSound(){
    console.log(this.anmialSound);
  }
}


class AnimalDoing extends Animal {
    animalName: string;
  constructor(animalType:string, anmialSound: string, animalMove: string, animalName:string){
    super(animalType, anmialSound, animalMove);    
    this.animalName = animalName;
    }

}