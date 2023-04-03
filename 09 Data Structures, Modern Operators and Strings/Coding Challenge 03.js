//On Maps we convert the Map.method() into array or sets according to the requirements.

const gameEvents = new Map ([
    [17,'⚽ GOAL'],
    [36,'🔂 Substitution'],
    [47,'⚽ GOAL'],
    [61,'🔂 Substitution'],
    [64,'🟨 Yellow card'],
    [69,'🟥 Red card'],
    [70,'🔂 Substitution'],
    [72,'🔂 Substitution'],
    [76,'⚽ GOAL'],
    [80,'⚽ GOAL'],
    [92,'🟨 Yellow card'],
]);

// console.log(gameEvents);


//Question 1.
// console.log([...(gameEvents.values())]);
// console.log(new Set(gameEvents.values()));
const events = [...new Set(gameEvents.values())];
console.log(events);

//Question 2.
gameEvents.delete(64)
console.log(gameEvents);

//Question 3.
console.log(`An event happend, on average, every ${90/gameEvents.size} minutes`);

//-------------More Precise Solution according to keys------------.
// let time = [...gameEvents.keys()].splice(-1);
// Can also use slice but to get or delete precisely last element from array we use pop().
//Moreover slice() return array and pop() returns element or value.
let time = [...gameEvents.keys()].pop();
// console.log(time);
console.log(`An event happend, on average, every ${time/gameEvents.size} minutes`);

//Question 4.
for (const [min,event] of gameEvents) {
    min <= 45 ? console.log(`[FIRST HALF] ${min}:${event}`) : console.log(`[SECOND HALF] ${min}:${event}`);
}