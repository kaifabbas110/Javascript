//Maps also  stores unique values.
const question = new Map([
   ['Question','What is the best programming language'],
   [1,'C++'],
   [2,'Java'],
   [3,'Javascript'],
   ['Correct',3],
   [true,'Correct 🥳'],
   [false,'Try Again! 😞'],
]);
console.log(question);

const restaurant = {
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    },
};

console.log(restaurant.openingHours);
//Convert object into Array.
console.log(Object.entries(restaurant.openingHours));

//Convert Object into Maps.
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//Convert Maps into Array.
let spread = [...hoursMap];
console.log(spread);

console.log(question.get('Question'));
for (const [key,values] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${values}`);
}

// const answer = parseInt(prompt('Your Answer'));
// console.log(answer);
// console.log(question.get(question.get('Correct') === answer));

console.log([...question]);

//Can also do in this way.
// answer === 3 ? console.log(question.get(true)) : console.log(question.get(false));

// if (answer === 3) {
//     console.log(question.get(true));
// }
// else console.log(question.get(false));
