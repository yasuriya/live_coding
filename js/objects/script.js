/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

// input: object, string, string
// output: object

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// Object.assign
// input: object, object
// output: object

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}
// test data
const user = {
  name: 'John',
};

console.log(addPropertyV1(user, 'data', { age: 22 }));
// console.log(addPropertyV2(user, 'surname', 'Doe'));
// console.log(addPropertyV3(user, 'surname', 'Doe'));
// console.log(user);
// console.log(addPropertyV4(user, 'surname', 'Doe'));
// console.log(user);

// test data extra
// const transaction = {
//   amount: 170,
// };
// const res1 = addPropertyV3(transaction, 'currency', 'USD');
// const res2 = addPropertyV3(res1, 'amount', '300');
// console.log('result test 1', res1);
// console.log('result test 2', res2);
// console.log('obj after', transaction);
