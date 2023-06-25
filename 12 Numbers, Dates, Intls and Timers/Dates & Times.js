const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  
    movementsDates: [
      "2019-11-18T21:31:17.178Z",
      "2019-12-23T07:42:02.383Z",
      "2020-01-28T09:15:04.904Z",
      "2020-04-01T10:17:24.185Z",
      "2020-05-08T14:11:59.604Z",
      "2020-07-26T17:01:17.194Z",
      "2020-07-28T23:36:17.929Z",
      "2020-08-01T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
  };

// const date = new Date();
// console.log(date);

// console.log((account1.movementsDates));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2024,10,12,15,23,40));
// console.log(new Date(2024,10,31));
// console.log(new Date(0));
// console.log(new Date(4 * 24 * 60 * 60 * 1000));

const future = new Date (2027,11,23,15,45,55)
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.getTimezoneOffset());
console.log(future.getTime());
console.log(future.toISOString());

console.log(new Date(1829558755000));

future.setFullYear(2024)
future.setDate(2)
future.setHours(1)
future.setMonth(0)
future.setMilliseconds(9000)
console.log(future);

let today = new Date()
console.log(today);