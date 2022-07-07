// mapFunction
// input: array, function
// output: array

// callback function
// input: element, number (index) - opt, array - opt
// output: element

// algo
// 1. new array
// 2. iterate input array
// 3. apply callback for every element
// 4. push modified element
// 5. return result

const mapArrayElements = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
};

// test data

const testCube = el => el ** 3;
console.log(mapArrayElements([1, 2, 3, 4], testCube));

const testToString = el => el.toString();
console.log(mapArrayElements([1, 2, 3, 4], testToString));

const users = [
  {
    name: 'Jack',
    age: 19,
    isAdult: true,
  },
  {
    name: 'Paul',
    age: 15,
    isAdult: false,
  },
];

const getNames = el => el.name;
console.log(mapArrayElements(users, getNames));
