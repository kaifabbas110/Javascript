//find() method is a bit similar to the filter() method but there are two fundamental differences.
//find() method returns the very first satisfied value from an array while the flter() returns all the values that satisfied the condition.
//It doesn't return a new array like filter() but the only satisfied value.

const account1 = {
    owner: "Kaif Abbas Rizvi",
    movements: [100, -500, -300, 450, 1674, 20, -650, 1000],
    interestRate: 1.2,
    pin: 1111,
  };
  const account2 = {
    owner: "Nisha Alvi",
    movements: [5000, 3400, -150, -740, -3976, -1000, 8050, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  const account3 = {
    owner: "Bala Hatoon",
    movements: [1000, 2200, -3300, 4540, -174, 2340, -50, 1480],
    interestRate: 0.7,
    pin: 3333,
  };
  const account4 = {
    owner: "Steven Thomas Williams",
    movements: [600, 2200, -1300, 450, -974, 210, -150, 9230],
    interestRate: 2,
    pin: 4444,
  };
  const accounts = [account1, account2, account3, account4];

  const firstWithDrawal = account1.movements.find(e => e < 0);
  console.log(account1.movements);
  console.log(firstWithDrawal);

  //Find object that matches the condition
  for (const key of accounts) {
    if (key.pin === 2222) {
        console.log(key);
    }
  }
  const account = accounts.find(e => e.pin === 1111)
//   const account = accounts.find(e => e.pin === 2222)
  console.log(account);