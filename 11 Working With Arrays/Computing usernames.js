const account1 = {
  owner: "Kaif Abbas Rizvi",
  movements: [100, 200, -300, 450, -1674, 20, -650, 1000],
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

// console.log(accounts.owner);
// console.log(arr.push())

//We used map methood so we don't need to create new array and push the values into that array.Because map method creates new array.

function createUserName(accounts) {
  accounts.forEach((acc) => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
    // console.log(userName);
  });
}

createUserName(accounts);
console.log(accounts);
// let newS = accounts[0].Nickname = 'account1111'
// console.log(newS);
// console.log(account1);
// console.log(nameSplit);



//---------------------------------------------------******---------------------------------------------------.
//Creating usernames with forOF and forEach loops.
// const arr1 = []
// const arr2 = []
// account1.owner.toLowerCase().split(' ').forEach(e => {
//     arr1.push(e[0])
// });
// console.log(arr1.join(''));

// function abc(accounts) {
//   for (const key of accounts) {
//     let ccc = key.owner
//     .toLowerCase()
//     .split(" ")

//     for (const e of ccc) {
//         let rrr = e[0]
//         arr1.push(rrr)
//     }
    
//     key.nickName = ccc;
//     // console.log(ccc);
//     // console.log(ccc.join(''));
//   };
//   console.log(arr1);
//   }
// abc(accounts)
// console.log(accounts);