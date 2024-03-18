function divider(divisor) {
  return function (recipient) {
    return recipient / divisor;
  };
}

const divideByFive = divider(5);
console.log(divideByFive(30)); // Виведе 6 (30/5=6)
