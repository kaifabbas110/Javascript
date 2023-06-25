//Inheritance in Classes

class bankAccount {
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


class currentAccount extends bankAccount {
    constructor(coName, coId, coBalance, limit) {
        super(coName, coId, coBalance)
        this.limit = limit
    }
}

const kaif = new bankAccount('kaif', 14, 25000);
kaif.deposit(1000)
kaif.withDraw(20000)
console.log(kaif);

const haseeb = new currentAccount('haseeb', 20, 10050, 2000);
console.log(haseeb);

//----------------------------------------------------------------------------------------------------------------//

//Inheritance in constructors and prototype..

function accountBank(empName, id, salary, birthYear) {
    // console.log(this);
    this.empName = empName;
    this.id = id;
    this.salary = salary;
    this.birthYear = birthYear;
    // this.age = function () {
    //     console.log(2023 - this.birthYear);
    // }
}

accountBank.prototype.age = function () {
    console.log(2023 - this.birthYear);
}

const sameel = new accountBank('sameel', 22, 54321, 2003);
console.log(sameel);
sameel.age()

function accountCurrent(empName, id, salary, birthYear) {
    accountBank.call(this, empName, id, salary, birthYear)
    this.limit = 12345
}
accountCurrent.prototype = Object.create(accountBank.prototype)

const rafay = new accountCurrent('Rafay', 21, 200000, 2001);
console.log(rafay);