//Strings
//It mutates the original array.
const names = ["Ali", "Kaif", "Abbas", "Zigzag", "Xendra"];
console.log(names);
console.log(names.sort());

const movements = [100, -500, -300, 450, 1674, 20, -650, 1000];
console.log(movements);
// it converts everything to strings the sort.So "-" at first place than from smallest number to largest.
// console.log(movements.sort());

// return < 0, A, B. (a < b)
// return > 0, B, A. (a > b)

// ASCENDING
// movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
// });

movements.sort((a, b) => a-b);
console.log(movements);

// DESCENDING
// movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
// });

movements.sort((a, b) => b-a);
console.log(movements);

