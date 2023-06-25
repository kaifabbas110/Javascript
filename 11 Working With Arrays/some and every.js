const account1 = {
  owner: "Kaif Abbas Rizvi",
  movements: [100, -500, -300, 450, 1674, 20, -650, 1000],
  interestRate: 1.2,
  pin: 1111,
};

//EQUALITY
console.log(account1.movements.includes(-301));

//SOME();
//CONDITION
console.log(account1.movements.some((arr) => arr === -300));
//checks if there is any value for which the condition is true will return true.
const anyDeposit = account1.movements.some((arr) => arr > 1500);
console.log(anyDeposit);

//Request loan upto 10% of the deposited amount
//e.g 3000 10% = 300
const arr = [100,200,300];
function loan(amount) {
    const loanCon = arr.some(mov => mov >= amount * 0.1)
    console.log(loanCon);
}
loan(2500)

//EVERY()
//return true if all the elments satisfy or pass the condition.
console.log(arr.every(e => e <= 0));
console.log(account1.movements.every(e => e != 0));