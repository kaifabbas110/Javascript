/*
map returns a "new array" containing the results of applying an operation on all original array elements.
*/


const pkrToUsd = 284;
const movementPkr = [28400, 56800, -85200, 127800, -475416, 5680, -184600, 284000];


function multiply(e) {
    return e / pkrToUsd;
}
//1
// const movementUsd = movementPkr.map(multiply);
//2
// const movementUsd = movementPkr.map(function (e) {
//     return e / pkrToUsd;
// });
//3
// const movementUsd = movementPkr.map(e => e / pkrToUsd)
const movementUsd = movementPkr.map((e,i) => 
`Movement ${i+1}: You ${(e / pkrToUsd) < 0 ? 'withdrew' : 'deposited'} ${Math.abs(e / pkrToUsd)}`
)
console.log(movementPkr);
console.log(movementUsd);