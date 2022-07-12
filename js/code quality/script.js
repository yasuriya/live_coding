// example 1
// const withdraw = (clients, balances, client, amount) => {
//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

// // remote logic from if
// // get rid of duplicated code
// // don't use find

//  balances[clients.indexOf(client)] // good
// balances.find((item, index) => clients.indexOf(client) === index) < amount; // bad

// example 2
// bad
// const withdraw = (clients, balances, client, amount) => {
//   const balance = balances[clients.indexOf(client)];
//   return balance >= amount ? (balance -= amount) : -1;
// };
// // const res = bool ? value1 : value2;

// example 3
// good
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   // eslint-disable-next-line no-param-reassign
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// bad
// const withdraw = (clients, balances, client, amount) => {
//   let clientBalance = balances[clients.indexOf(client)];
//   if (clientBalance >= amount) {
//     clientBalance -= amount;
//     balances[clients.indexOf(client)] = clientBalance;
//     return clientBalance;
//   }

//   return -1;
// };

// example 4
// bad
// const withdraw = (clients, balances, client, amount) => {
//   const curentClient = clients.indexOf(client);
//   const newBalance = balances[curentClient] - amount;
//   return newBalance > 0 ? newBalance : -1;
// };
// // test data
// const balances = [1400, 87, -6];
// const res = withdraw(['Ann', 'John', 'User'], balances, 'John', 100);
// console.log(res);
// console.log(balances);

// example 5
// bad
// const withdraw = function (clients, balances, client, amount) {
//   if (balances[clients.indexOf(client)] - amount < 0) {
//     return -1;
//   }
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };
// good
// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);
//   if (balances[clientIndex] < 0) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// example 6
// norm
// const withdraw = (clients, balances, client, amount) => {
//   let clientIndex = clients.indexOf(client);
//   return balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };

// example 7
// norm
// const withdraw = (clients, balances, client, amount) => {
//   const clientBalance = balances[clients.indexOf(client)];

//   return clientBalance < amount ? -1 : clientBalance - amount; // returns not modified value
// };

// example 8
// bad
// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] > amount) {
//     return (balances[clients.indexOf(client)] -= amount);
//   } else {
//     return -1;
//   }
// };

// good

// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] < amount) {
//     return -1;
//   }
//   return (balances[clients.indexOf(client)] -= amount);
// };

// example 9
// bad
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount ? balances[clients.indexOf(client)] - amount : -1;

// norm
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   balances[clientIndex] < amount ? -1 : (balances[clientIndex] -= amount);
// };

// example 10
// bad
// 0.9 1.1 (?)
// const getRandomNumbers = (length, from, to) => {
//   const arr = new Array(length);
//   if (to - from < 1) {
//     return null;
//   }
//   return arr.fill(Math.trunc(Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)));
// };

// good
// 1.7, 1.9 - false; 1.7, 2.5 - true;
const getRandomNumbers = (length, from, to) => {
  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);
  if (toCeil < fromCeil) {
    return null;
  }
  return new Array(length).fill(Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil));
};
// test data
console.log(getRandomNumbers(1, 1.7, 2.5));
console.log(getRandomNumbers(1, 0.5, 0.9));
