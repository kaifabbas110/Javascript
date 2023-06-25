// Declaration
class bankAccount {
    constructor(coName, coId, coBalance, birthYear) {
        this.coName = coName
        this.coId = coId
        this.coBalance = coBalance
        this.birthYear = birthYear
    }
    deposit(amount) {

        this.coBalance += amount
    }
    withDraw(amount) {
        this.coBalance -= amount
    }
    get age() {
        return 2023 - this.birthYear
    }
}

const kaif = new bankAccount('kaif', 14, 25000);
kaif.deposit(1000)
kaif.withDraw(20000)
console.log(kaif.age)
console.log(kaif);
console.log(bankAccount);



// Expression; the class is anonymous but assigned to a variable

const bankAccount2 = class {
    constructor(coName, coId, coBalance) {
        this.coName = coName
        this.coId = coId
        this.coBalance = coBalance
    }
    deposit(amount) {

        this.coBalance += amount
    }
    withDraw(amount) {
        this.coBalance -= amount
    }


}

const kaif2 = new bankAccount2('kaif', 14, 25000, 2000);
kaif2.deposit(5000)
kaif2.withDraw(31000)
console.log(kaif2);
console.log(bankAccount2);


// Expression; the class has its own name


const bankAccount3 = class bankAccount {
    constructor(coName, coId, coBalance) {
        this.coName = coName
        this.coId = coId
        this.coBalance = coBalance
    }
    deposit(amount) {

        this.coBalance += amount
    }
    withDraw(amount) {
        this.coBalance -= amount
    }
}

const kaif3 = new bankAccount3('kaif', 14, 25000);
kaif3.deposit(5000)
kaif3.withDraw(31000)
console.log(kaif3);
console.log(bankAccount3);


// 1.Classes are NOT Hoisted.
// 2.Class are first-class citizes
// 3.Classes are executed in strict mode
