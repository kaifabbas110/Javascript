/*
reduce boils('reduces) all array elements down to one single value (e.g adding or multiplying all elements together)
Note down that reduce doesn't return the new array but returns the one single reduced value
*/


const account1 = {
    owner: "Kaif Abbas Rizvi",
    movements: [100, -500, -300, 450, 1674, 20, -650, 1000],
    interestRate: 1.2,
    pin: 1111,
  };

  // First Callback parameter of reduce() is accumulator.Which is essentially like a snowball ;) which sums up the total value.

  const balance = account1.movements.reduce((acc,e,i,arr) => (acc+e),0)//specified initial accumulator value 0.
  console.log(balance);

//Just like this.
// let balance1 = 0;
// for (const e of account1.movements) {
//   balance+=e;
// }
// console.log(balance);

const max = account1.movements.reduce((acc,e,i) => {
  if (acc > e) return acc
  else return e
},movements[0]);
console.log(max);