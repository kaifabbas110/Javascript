// 'use strict';
const employ = function (empName, id, salary, birthYear) {
    // console.log(this);
    this.empName = empName;
    this.id = id;
    this.salary = salary;
    this.birthYear = birthYear;
    //Never create method() inside of a constructor function.
    //Because if we were gonna create 1000 or 100000 constructor functon than each of the object would gonna carry this method which would be a terrible for code performance & required alot of memory. ;)
    this.age = function () {
        console.log(2023 - this.birthYear);
    }
}

//new keyword logic....
// 1.New {}(empty object) is created.
// 2.Function is called,& this = {} (this keyword point to new object that is created at step 1)
// 3.{} linked to prototype
// 4.Function automatically return {}


const kaif = new employ();
const haseeb = new employ('Haseeb Hassan', 20, 50000, 2002);
console.log(kaif);
console.log(haseeb);


console.log(kaif instanceof employ && employ instanceof window.Object);
console.log(employ instanceof window.Object);

console.log(employ.prototype);