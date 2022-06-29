function getSenseOfLife() {
  return 42;
}
// test data
console.log(getSenseOfLife());

function getSquared(num) {
  return num * num;
}
// test data
console.log(getSquared(2));

function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}
// test data
console.log(sum(23, -5));

function printMessage(age) {
  return `I am ${age} years old`;
}
// test data
console.log(printMessage(43));

function sumFunc(from, to) {
  let result = 0;
  for (let i = from; i <= to; i += 1) {
    result += i;
  }
  return result;
}
// test data
console.log(sumFunc(3, 10));

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  if (sumFunc(firstFrom, firstTo) > sumFunc(secondFrom, secondTo)) {
    return true;
  }
  return false;
}

// test data
console.log(compareSums(3, 17, 12, 4));

// option 1
const sumRes = sum(10, 20);
getSquared(sumRes);
// option2
getSquared(sum(10, 20));

// arrow functions
const mult = (firstNum, secondNum) => firstNum * secondNum;

// test data
console.log(mult(2, 3));

const getSquaredArrow = num => num * num;

// test data
console.log(getSquaredArrow(2));

const getMagicNumber = () => 17;

// test data
console.log(getMagicNumber(11));
console.log(getMagicNumber(-15));
console.log(getMagicNumber());
