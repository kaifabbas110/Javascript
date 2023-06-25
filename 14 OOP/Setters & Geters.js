const account = {
    owner: 'Kaif Abbas',
    movements: [300, 235, 100, 250],

    //set and get is like property not methods...
    get latest() {
        return this.movements.slice(-1).pop()
    },
    set latest(mov) {
        return this.movements.push(mov)
    },
}

console.log(account.latest);
account.latest = 999
console.log(account.movements);



class person {
    constructor(fullName, birthYear) {

        //1. \s is an escape sequence that matches any whitespace character, such as spaces, tabs, or line breaks.
        //2. + is a quantifier that matches one or more occurrences of the preceding pattern, in this case, \s. So, \s+ matches one or more consecutive whitespace characters.
        //3. The g flag ensures that all occurrences are replaced.

        this.fullName = fullName
        this.birthYear = birthYear
    }

    get age() {
        return (new Date).getFullYear() - this.birthYear
    }

    // Set a property that already exist....
    set fullName(name) {
        // console.log(name);
        if (name.trim().includes(' ')) return this._fullName = name
        else alert('Not a full name')
    }

    get fullName() {
        return this._fullName
    }
}

const Kaif = new person('kaif abbas rizvi', 2000);
console.log(Kaif);
console.log(Kaif.fullName);
// console.log(Kaif.age)
// console.log(Kaif.fullName)



// if (('kaif abbas').trim().includes(' '))
//     console.log('full name');
// else console.log('Not a full name');
// console.log('kaif abbas'.split(' '));

// let name = 'kaif abbas'

// name.split(' ').forEach(e => {
//     console.log(e[0].toUpperCase());
// });

// let kaifff = 'kaif abbas  '

// let split = kaifff.trim().split(' ')

// for (let i = 0; i < split.length; i++) {
//     let e = split[i];
//     split[i] = e.charAt(0).toUpperCase() + e.slice(1)
//     console.log(e);
// }
// console.log(split.join(' '));

// for (const i of split) {
//     let word = i.charAt(0).toUpperCase() + i.slice(1)
//     // let joined =
//     console.log(word);
// }
// console.log(word.join(' '));
// console.log(word.join(' '));
// console.log(cap);


// console.log((['kaif', 'abbas']).join(' '));