//Static method belongs to entire class itself but not the objects.

class person {
    constructor(fullName, birthYear) {
        this.fullName = person.capitalization(fullName)
        this.birthYear = birthYear
    }

    static capitalization(name) {
        let split = name.split(' ')
        // console.log(split);
        for (let i = 0; i < split.length; i++) {
            let e = split[i];
            // console.log(e);
            split[i] = e.charAt(0).toUpperCase() + e.slice(1)
            // console.log(split[i]);
        }
        return this.fullName = split.join(' ').replace(/\s+/g, ' ').trim()
    }
}

const kaif = new person('  kaif    abbas   rizvi ', 2000);
console.log(kaif);
console.log(kaif.fullName);

// console.log('kkkkkkkk');