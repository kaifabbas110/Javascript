//Convert string into number
console.log(typeof ' ' + '12345');
//Convert number into string
console.log(typeof (12345 + ''));


console.log(('a+very+nice+string').split('+').join(' '));
console.log('Kaif Abba s'.split(' ').join(' '));

let [firstName,lastName] = 'Kaif Abbas'.split(' ');
console.log(firstName,lastName);
// let  nameF = 'Mr. ' + firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName.toUpperCase();
//Better alternative.
let  nameF = ['Mr.',firstName,lastName.toUpperCase()].join(' ');
console.log(nameF);


//Capitalization.
//First Method.
let capitalizeName = function (name) {
    const nameSplit = name.split(' ')
    const finalName = [];
    for (const word of nameSplit) {
        finalName.push(word[0].toUpperCase() + word.slice(1));
    }
    console.log(finalName.join(' '));
}

capitalizeName('syed kaif abbas rizvi')
capitalizeName('ali haider naqvi')


//Second Method.
capitalizeName = function (name) {
    const nameSplit = name.split(' ')
    const finalName = [];
    for (const word of nameSplit) {
        // finalName.push(word.replace(word[0],word[0].toUpperCase()))
        finalName.push(word.replace(word.slice(0,1),word.slice(0,1).toUpperCase()))
        
    }
    console.log(finalName.join(' '));
}

capitalizeName('laiba batool')
capitalizeName('nisha alvi')


//Pad Method to fill or achieve the certain length of a string.
const message = 'heloo dosto';
console.log(message.padStart(20,'+').padEnd(30,'~'));
console.log(('jaan lelo').padStart(20,'+').padEnd(30,'*'));

const creditCardNum = function (num) {
    const lastFourDigit =  num.toString().slice(-4).padStart(num.toString().length,'*');
    //num + '' convert number into string type
    // const lastFourDigit =   (num + '').slice(-4).padStart((num + '').length,'*');
    // const str = num + '';
    // const last = str.slice(-4)
    // const lastFourDigit =   last.padStart(str.length,'*');
    console.log(lastFourDigit);
}

creditCardNum(123456789);
creditCardNum('222222222222222');


//Repeat Method.
const message2 = 'My name is Kaif Abbas\n';
console.log(message2.repeat(20));

function planeInLine(n) {
    console.log(`There are ${n} planes in line ${'🛬'.repeat
(n)}`);
}

planeInLine(5);
planeInLine(10);
planeInLine(15);