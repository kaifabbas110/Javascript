/*
filter returns a new array containing the array elements that passed a specified test condition.
*/


const account1 = {
    owner: "Kaif Abbas Rizvi",
    movements: [100, 200, -300, 450, -1674, 20, -650, 1000],
    interestRate: 1.2,
    pin: 1111,
  };

  function positive(e) {
    return e > 0;
  }

  const withdrawals = account1.movements.filter( (e) => e < 0);
  const deposits = account1.movements.filter(positive);
  console.log(deposits);
  console.log(withdrawals);

//   const arr = [];
//   for (const e of account1.movements) {
//     if (e > 0) {
//          arr.push(e)
//     }
// }
// console.log(arr);

//Max value in an array.
  const max = account1.movements.filter((acc,e) => (
    // let maxi = 0 
    acc += e
    ),0);
  console.log(max);