// input: object
// output: array

// algo:
// 1. get object keys & values
// 2. iterate values array to create new property (id)
// 3. sort objects in array by age

// algo 2:
// 1. get array of key-value - entries [[key1, value1], [key2, value2]]
// 2. iterate array of entries - on every step create new object [obj1, obj2...]
// 3. sort array & return

const getCustomersList = obj => {
  return Object.keys(obj)
    .map(key => ({ ...obj[key], id: key }))
    .sort((a, b) => a.age - b.age);
};

// test data
const customerObj = {
  cust1: { name: 'Josh', age: 66 },
  cust2: { name: 'John', age: 26 },
  cust3: { name: 'Peter', age: 36 },
};

// getCustomersList(customerObj);
console.log(getCustomersList(customerObj));

// example 2
// good
// const getCustomersList2 = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => a.age - b.age);

// console.log(getCustomersList2(customerObj));

// example 3
// const getCustomersList3 = obj =>
//   // input: object
//   // output: array [[key1, value1], [key2, value2]]
//   Object.entries(obj)
//     .map(entry => {
//       return { id: entry[0], ...entry[1] };
//     })
//     .sort((a, b) => a.age - b.age);

// example 4
// norm
// const getCustomersList4 = obj => {
//   return Object.entries(obj)
//     .map(arr => ({ ...arr[1], id: arr[0] }))
//     .sort((a, b) => a.age - b.age);
// };

// example 5
// norm
// push instead of concat
// map instead of reduce
// const getCustomersList5 = customers =>
//   Object.entries(customers)
//     .reduce((acc, [id, data]) => acc.concat({ id, ...data }), [])
//     .sort((a, b) => a.age - b.age);

// example 6
// good
// const getCustomersList6 = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((customerFirst, customerSecond) => customerFirst.age - customerSecond.age);

// example 7
// bad
// don't use values
// don't use index
// naming

// const getCustomersList7 = obj => {
//   return Object.keys(obj)
//     .map(key => ({ ...obj[key], id: key }))
//     .sort((a, b) => a.age - b.age);
// };

// example 8
// bad
// don't use values
// don't use index
// naming
// remove variables

// const getCustomersList8 = obj => {
//   const customersIdList = Object.keys(obj);

//   const resultArray = Object.values(obj)
//     .map((customerIdValue, index) => ({ ...customerIdValue, id: customersIdList[index] }))
//     .sort((a, b) => a.age - b.age);
//   return resultArray;
// };

// example 9
// bad
// const getCustomersList9 = obj => {
//   if (obj === {}) {
//     return [];
//   }

//   const keys = Object.keys(obj);
//   const arr = Object.values(obj);

//   arr.map((el, index) => {
//     el.id = keys[index];
//   });
//   arr.sort((a, b) => +a.age - +b.age);

//   console.log(arr);
//   console.log(obj);

//   return arr;
// };

// example 10
// bad
// don't use shift
// fix eslint errors
// bad naming
// redundant variable
// const getCustomersList10 = obj => {
//   return Object.entries(obj)
//     .map(arr => {
//       const idObj = { id: arr[0] };
//       return { ...arr[1], ...idObj };
//     })
//     .sort((a, b) => a.age - b.age);
// };

// example 11
// don't use index (push)
// bad naming
// const getCustomersList11 = customers =>
//   Object.keys(customers)
//     .reduce((resArr, key) => {
//       resArr.push({ id: key, ...customers[key] });
//       return resArr;
//     }, [])
//     .sort((a, b) => a.age - b.age);

// example 12
// bad
// const getCustomersList12 = obj => {
//   // obj is the object we want to get the keys from
//   const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age); // sort the object by age
//   const first = order.map(el => el[1]); // get the values
//   const second = order.map(el => el[0]); // get the keys
//   return first.map((el, index) => ({ ...el, id: second[index] })); // print the values and keys
// };
