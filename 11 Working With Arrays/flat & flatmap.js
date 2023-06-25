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
    movements: [600, -2200, -1300, 450, -974, 210, -150, 9230],
    interestRate: 2,
    pin: 4444,
  };
  const accounts = [account1, account2, account3, account4];

const arr = [[1,2,3],4,5,[6,7,8,9],10]
console.log(arr);
console.log(arr.flat());

const arrDeep = [[[1,2,3],4],[5,[6,7,8,9]],10]
console.log(arrDeep.flat(2)); //2 layers to flat.

//To merge alll the movements in one array.
//WRONG APPROACH.
// accounts.forEach(mov => {
//     const allAccMOv = mov.movements.flat()
//     // console.log();
//     console.log(allAccMOv);
// });


// const accMovs = accounts.map(acc => acc.movements)
// console.log(accMovs);
// const allMov = accMovs.flat()
// console.log(allMov);
// const overAllBalance = allMov.reduce((acc,mov) => acc + mov,0)
// console.log(overAllBalance); 

const overAllBalance = accounts.map(acc => acc.movements).flat().reduce((acc,mov) => acc + mov,0)
console.log(overAllBalance);

//FLATMAP()
//This method combines flat() and map() methods to better performance.

const allMov = accounts.flatMap(acc => acc.movements).reduce((acc,mov) => acc + mov,0)
console.log(allMov);