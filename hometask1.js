const someNumber = 7;
const someString = "11";

const booleanFrom_someNumber = !!someNumber;
console.log(booleanFrom_someNumber);
console.log(typeof(booleanFrom_someNumber));

const stringFrom_someNumber = someNumber + '';
console.log(stringFrom_someNumber);
console.log(typeof(stringFrom_someNumber));

const booleanFrom_someString = !!someString;
console.log(booleanFrom_someString);
console.log(typeof(booleanFrom_someString));

const numberFrom_someString = parseInt(someString);
console.log(numberFrom_someString);
console.log(typeof(numberFrom_someString));
