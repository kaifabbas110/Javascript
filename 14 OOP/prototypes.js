const employ = function (empName, id, salary, birthYear) {
    // console.log(this);
    this.empName = empName;
    this.id = id;
    this.salary = salary;
    this.birthYear = birthYear;
    // this.age = function () {
    //     console.log(2023 - this.birthYear);
    // }
}

const kaif = new employ('Kaif Abbas', 14, 200000, 2000);
const haseeb = new employ('Haseeb Hassan', 20, 350000, 2002);
console.log(kaif);
console.log(haseeb);
// console.log(kaif.age());
// kaif.age()
// haseeb.age()

//Here we create a prototype of method age() for a employ function so that we don't have to carry a same method in very object but in a prototype.
employ.prototype.age = function () {
    console.log(2023 - this.birthYear);
}
// console.log(kaif);   
kaif.age()
haseeb.age()

//.__proto__ will give functions seperatly 
console.log(kaif.__proto__);
// console.log(kaif.getPrototypeOf);
console.log(kaif.prototype);
console.log(employ.prototype);
// console.log(Object.prototype);

console.log(kaif.__proto__ === employ.prototype);

console.log(employ.prototype.isPrototypeOf(kaif));
console.log(employ.prototype.isPrototypeOf(haseeb));
//False, because employ is not a protoype of employ but is a prototype of linked objects.
console.log(employ.prototype.isPrototypeOf(employ));

employ.prototype.qualification = 'bachelores In CSE'
console.log(kaif.qualification, haseeb.qualification);
console.log(employ.prototype);

console.log(kaif.hasOwnProperty('empName'));
console.log(kaif.hasOwnProperty('salary'));
//False Because that property is not really inside of a kaif object.It simply has access to it because of it's prototype.In the prototype property of an employ. 
console.log(kaif.hasOwnProperty('qualification'));
console.log(employ.prototype.hasOwnProperty('qualification'));
console.log(kaif);