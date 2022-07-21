/* eslint-disable no-restricted-syntax */
// input: array, array
// output: obj

// algo
// 1. create new obj
// 2. iterate keylist
// 3. put key/value to the obj

// function buildObject(keysList, valuesList) {
//   const obj = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     obj[keysList[index]] = valuesList[index];
//   }
//   return obj;
// }

// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, key, index) => {
//     return { ...obj, [key]: valuesList[index] };
//   }, {});
// }

// // test data
// const keys = ['name', 'address', 'age', 'name'];
// const values = ['Bob', 'Ukraine', 34, 'James'];
// const result = buildObject(keys, values);
// console.log(result);

// input: obj, obj
// output: boolean
// algo:
// 1. get keys1, keys2
// 2. if length1 !== length2 ==> false
// 3. iterate keys1
// 4. compare key1/value1 & key2/value2
// 5. if ( step 4 === false) ==> false

// test data
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

// // example 1

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (const key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(compareObjects(obj1, obj2));
// console.log(compareObjects(obj1, obj4));
// console.log(compareObjects(obj2, obj3));

// // example 2
// function compare2(obj1, obj2) {
//   const obje1 = Object.entries(obj1).flat().sort();
//   const obje2 = Object.entries(obj2).flat().sort();
//   return JSON.stringify(obje1) === JSON.stringify(obje2);
// }

// console.log(compare2(obj1, obj4));

// example 3

// function compareObjects3(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
// return !keys1.some(key => obj1[key] !== obj2[key]);
// return keys1.every(key => obj1[key] === obj2[key]);
// }
