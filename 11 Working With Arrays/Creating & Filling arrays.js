//100 random posibilities of dice rolls
const dice = Array.from({length:100},(e,i) => Math.floor(Math.random(i)*6+1))
console.log(dice);
console.log(Math.random()*2+1);

const arr = [1,2,3,4,5,6,7];
console.log([1,2,3,4,5,6,7].map((e,i,arr) => 5));//fill all array with 5.
console.log(new Array(1,2,3,4,5,6,7));

const x = new Array(7) //7 empty slots.
console.log(x);
// console.log(x.map((e,i,arr) => 5));//Doesn't fill 5.
// console.log(x.fill(1));//fill all array with 1.
x.fill(1,3,7)
console.log(x);

arr.fill(69,3,5)
console.log(arr);

//Array.from.
//
const y = Array.from({length:5},() => 6)
console.log(y);

const z = Array.from({length:5},(_,i) => i+1)
console.log(z);