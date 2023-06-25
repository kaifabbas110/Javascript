// console.log(typeof ('g'-11)); NUMBER
// console.log(typeof ('g'+11)); STRING

const arr = [1,2,3,4,5]
//findIndex() finds the index of the very first element from an array which we want to search like we did with 4.
const index = arr.findIndex(acc => acc === 4)
console.log(index);
arr.splice(index,1)
console.log(arr);
console.log(arr.indexOf(9));

//with findIndex() method we can do many conditions rather than just to compare to get true or false like in infexOf() method.