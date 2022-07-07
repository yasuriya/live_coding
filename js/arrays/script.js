const numbersList1 = [1, 2, 3, 4, 5];

const lastNumber = numbersList1.pop();
console.log(lastNumber);
console.log(numbersList1);

// input: none
// output: number/element

const numbersList2 = [1, 2, 3, 4, 5];

numbersList2.push(6);
console.log(numbersList2.push(6));
console.log(numbersList2);

// input: number
// output: number (array.length)

const numbersList3 = [1, 2, 3, 4, 5];

const firstNumber = numbersList3.shift();
console.log(firstNumber);
console.log(numbersList3);

// input: none
// output: number/element

const numbersList4 = [1, 2, 3, 4, 5];

numbersList4.unshift(0);
console.log(numbersList4);
console.log(numbersList4.unshift());

// input: number/element
// output: array.length/number

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

const bigNumbers = anotherNumbersList.filter(el => el > 5);
console.log(bigNumbers);
// input: function
// output: array

function filterCallback(num) {
  return num > 5;
}
// input: number/ any type
// output: boolean

const evenPositions = anotherNumbersList.filter(el => el > 5 && el % 2 === 0);
console.log(evenPositions);
// input: function
// output: array

function sum(from, to, resolver) {
  let sumRes = 0;
  for (let index = from; index <= to; index += 1) {
    sumRes += index;
  }
  return resolver(sumRes);
}

function add(number) {
  return number + number;
}

function mult(number) {
  return number * number;
}

console.log(sum(1, 2, mult));
