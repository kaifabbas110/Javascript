const airline = 'Kaifi Air Aeroplanes';
const plane = 'A707';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('plane'[0]);
console.log('plane'[3]);
console.log('plane'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('A'));
console.log(airline.lastIndexOf('Air'));


console.log(airline.slice(6,9)); //second index doesn't extract.
//To get very first word from the string
console.log(airline.slice(0,airline.indexOf(' ')));
//To get last word from the string
console.log(airline.slice(airline.lastIndexOf(' ')));
//+,- extract the element according to index OR + move forward from last word & - move backward from last word.
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(airline.lastIndexOf(' ') - 1));
console.log(airline.slice(1,-1));

const middleSeats = function(seat){
//B and E are middle seats.
    let last = seat.slice(-1);
    if (last === 'B' || last === 'E') {
        console.log('You got the middle seat 😬');
    }
    else console.log('You got lucky 😎');
}

middleSeats('11B');
middleSeats('23C');
middleSeats('3E');
middleSeats('67D');

//Since Strings are primitives.
//Reason how javascript apply methods on Strings.
//Whenever we call a method on a string Javascript will automatically BTS convert that String primitives to a String object with the same content and than its on that object Methods are called.
//This process is known as "Boxing" because it takes our string and puts it into a box which is the object.

//So, basically what happens is this.

console.log(new String('Kaif Abbas')); // It contains all the methods.
console.log(typeof new String('Kaif Abbas'));
console.log(new String('Kaif Abbas').slice(0));
console.log(typeof new String('Kaif Abbas').slice(0));