/* Example */
function sumOfThree(a: number, b: number, c: number): number {
  return a + b + c;
}

const sumOfThreeArrow = (a: number, b: number, c: number): number => a + b + c;

/* Task 1 */
// Rewrite the function below using arrow function syntax
function sumOfTwo(a: number, b: number): number {
  return a + b;
}
//my code
const sumOfTwoArr = (a: number, b: number)  => a+b;
/* Task 2 */
// Rewrite the function below using arrow function syntax
function checkBiggerThan(value: number, threshold: number): boolean {
  return value > threshold;
}
//my code
const checkBigger =(value: number, threshold: number):boolean =>value >threshold;

/* Task 3 */
// Rewrite the function below using arrow function syntax
interface City {
  name: string;
  population: number;
}

const cities: City[] = [
  { name: "Berlin", population: 3700000 },
  { name: "Hamburg", population: 1800000 },
  { name: "Munich", population: 1500000 },
  { name: "Cologne", population: 1000000 },
  { name: "Stuttgart", population: 600000 },
  { name: "Dresden", population: 500000 },
];

function getCitiesWithPopulationAbove(population: number, cityArray:City[]): City[] {
  let result: City[] = [];
  for (let city of cityArray) {
    if (city.population > population) {
      result.push(city);
    }
  }
  return result;
}

//my code 
const getCitiesPopulation = (population: number,cityArray:City[] ): City[] => {
  let result: City[] = [];
  for (let city of cityArray) {
    if (city.population > population) {
      result.push(city);
    }
  }
  return result;
}