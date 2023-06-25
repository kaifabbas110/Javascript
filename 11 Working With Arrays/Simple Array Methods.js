/*Methods are simply funtion that we can call on object. So ,basically they are functions attached to objects.
So if we have array method that means that arrays themselves are object.
*/

//The full list of methods on array instances that change the values or number of values in the array is this one:
/*
Array.push()
Array.pop()
Array.shift()
Array.unshift()
Array.splice()
Array.reverse()
Array.sort()
Array.fill()
Array.copyWithin()
*/



const currencies = new Map([
  ["USD", "Unites States Dollar"],
  ["EUR", "Euro"],
  ["Pkr","Pakistani Rupees"],
]);
console.log(currencies);

const movements = [200,450,-44,3000,-650,-130,70,1300]
console.log(movements);


//SLICE
//SLICE method doesn't mutate the original array.
const arr = ['a','b','c','d','e'];
arr.slice(-1);
console.log(arr);
console.log(arr.splice(2));
// console.log(arr.slice(1));
// console.log(arr.slice(1,4));
// console.log(arr.slice(0,-1));


//SPLICE
//SPLICE method does mutate the original array.
let monkeys = ['🙈', '🙉', '🙊'];
monkeys.splice(1, 1, '😈', '😈', '😈');
console.log(monkeys);
monkeys.splice(2,2)//second parameter is the number of elements that how many elements we want to delete.
console.log(monkeys);
monkeys.splice(-1)
console.log(monkeys);


//REVERSE
//REVERSE method does mutate the original array.
let arr2 = [...'abcde']
arr2.reverse();
console.log(arr2);


//CONCAT
//CONCAT method doesn't mutate the original array.
let letter = arr.concat(arr2);
console.log(letter);
console.log([...arr,...arr2]);//Works the same as concat.


//JOIN
console.log(letter.join('-'));


//AT
console.log(letter[3]); //traditionally.
console.log(letter.at(3)); //with .at() method.

//getting last element of the array.
console.log(letter[letter.length-1]);
console.log(letter.at(-1));
console.log(letter.slice(-1)[0]);
// console.log(letter.splice(-1)[0]);//we don't use splice() method here because we don't want to mutate the original array our only concern is to find the last element of the array.

console.log('kaif abbas'.at(0));