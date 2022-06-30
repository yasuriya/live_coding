// input: number
// output: undefined

// algo
// 1. iterate from 2 to num
// 2. check if N is prime
// 2.1 iterate from 2 to N
// 2.2 if N % index === 0 then NOT prime
// 3. if N is prime - print it

function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {
    if (isPrime(index)) {
      console.log(index);
    }
  }
}

// test data
getPrimes(15);
