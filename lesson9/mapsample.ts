const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pushTwo(value: number): number {
  return value + 2;
}

let result = sampleArray.map(pushTwo);
//here the map as a function
let newResult = sampleArray.map((sampleArray) => sampleArray + 1);
console.log(result);
console.log(newResult);


//map exercise 
const names = ["Alice", "Bob", "Eve"];
//map inpleementation whcih create a new array with each name apprear with exsample
//the name parameter, can be any you want, eg n, b, p...etc.
const newNames = names.map((name) => name + " exsample");
console.log(newNames);