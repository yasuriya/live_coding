// filterFunction
// input: array, function
// output: array

// callback function
// input: element, number (index) - opt, array - opt
// output: boolean

// algo
// 1. new array
// 2. iterate input array
// 3. apply callback for every element
// 4. if true - push

// const filterArrayElements = (arr, callback) => {
//   const resArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const el = arr[index];
//     if (callback(el, index, arr)) {
//       resArr.push(el);
//     }
//   }
//   return resArr;
// };

// // test data
// const testNumber = el => el > 2;
// console.log(filterArrayElements([1, 2, 3, 4], testNumber));

// // test data 2
// const testArr = [1, 32, 11, 0, -5, 55, 4, 8, NaN];
// const testCallback = (el, index, arr) => {
//   if (index > 2 && el > 10) {
//     return true;
//   }
//   return false;
// };
// const filterRes = filterArrayElements(testArr, testCallback);
// console.log(filterRes);

// // multiply
// // input: number
// // output: number

// function multiply(...rest) {
//   return rest.reduce((acc, el) => acc * el);
// }
// // test data

// console.log(multiply(10, 7, 6));

const myFilter = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
};

const testFilter = el => el > 2;
const testFilterNum = (el, i) => typeof el === 'string' && i > 2;

console.log(myFilter(['gas', -1, NaN, -3, 'string', undefined, 4, 7, 22], testFilterNum));
