function sumPrimes(num) {
  let primeNumbers = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime(i) === true) {
      primeNumbers.push(i);
      console.log(primeNumbers);
    }
  }
  return primeNumbers.reduce((a, b) => a + b, 0);
};


  function isPrime(singleNumber) {
    let counter = 2;
    while (counter < singleNumber) {
      if (singleNumber % counter === 0) {
        return false;
      }
      counter++;
    } 
    return true;
  };
  
console.log(sumPrimes(10));


