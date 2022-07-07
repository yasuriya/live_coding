// task 1
const numbersList = [5, 0, 8, 10, -4, 50, 220];

// input: function
// output: array

// callback input: element of array
// callback output: element of array

// option 1
// const mapRes = numbersList.map(el => {
//   const squaredNum = el ** 2;
//   return squaredNum;
// });

// option 2
// const squaredNumbers = numbersList.map(el => el ** 2);

// console.log(squaredNumbers);

// extra task
//    const mapRes = numbersList.map((el, index) => (index > 2 ? el * el : el));
//    console.log(mapRes);

// task 2

// input: callback function
// output : element

const oddNumber = numbersList.find(el => (el % 2 !== 0 ? el : undefined));
// test data
console.log(oddNumber);

// task 3

// input: callback function
// output: none

// callback
// input: element
// output: undefined

// const res = numbersList.forEach(el => {
//   if (el > 0) {
//     console.log(el);
//   }
// });
// extra example
// const forEachRes = numbersList.forEach(el => {
//   return el * el;
// });
// console.log(numbersList);
// console.log(forEachRes);

// task 4

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];
// reduce
// input: callback function
// output: value

// callback function
// input: accumulator, element, initial value (optional), array (optional)
// output: value (new accumulator)

// test data
// transactions.reduce((acc, el) => {
//   console.log('acc', acc);
//   console.log('el', el);
// });

// option 1
const transactionsSum = transactions.reduce((sum, el) => {
  if (el > 100) {
    return sum + el;
  }

  return sum;
}, 0);
console.log(transactionsSum);
// option 2
// const reduceSum = transactions.reduce((sum, el) => (el > 100 ? sum + el : sum), 0);
// console.log(reduceSum);

// task 5

// input: callback function
// output: sorted array

// const numbersList1 = [6, 20, 33, 43, 8];

// const sortedArr1 = numbersList1.sort((a, b) => b - a);
// console.log(sortedArr1);
// console.log(numbersList1);

// task 6

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

const numbersList2 = [6, 20, 33, 43, 8];
