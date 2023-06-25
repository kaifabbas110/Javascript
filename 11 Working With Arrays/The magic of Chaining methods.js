//Don;t overuse chaining methods because it cause performance issues for applications and also don't use with the methods that mutates original array like splice() or reverse();

const account1 = {
  owner: "Kaif Abbas Rizvi",
  movements: [100, -500, -300, 450, 1674, 20, -650, 1000],
  interestRate: 1.2,
  pin: 1111,
};

const totalDepositToUSD = account1.movements
  .filter(e => (e > 0))
  .map((e) => e * 284)
  .reduce((acc, e) => (acc += e), 0);
console.log(totalDepositToUSD);

let calcInterestRate = e
    .filter((e) => e > 0)
    .map((e) => 
      (e * account1.interestRate) / 100)
    .filter(e => e >= 1) //every interet should be greater or equal than 1.
    .reduce((acc, e) => acc + e, 0);
  interestRate.textContent = calcInterestRate;
  console.log(calcInterestRate);