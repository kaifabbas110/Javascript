//All values are truthy unless they are defined as falsy.
//false, 0, -0, 0n, "", null, undefined, and NaN.Are All FALSY

//----------------------------------OR----------------------------------

//OR operator short circuting returns the first truthy value.
// console.log(3 || "kaif");
// console.log("" || "kaif");
// console.log(true || 0);
// console.log(undefined || null); //Here both values are falsy but OR operator returning second value, because as the first value is false javascript doesn't even have to look the second value and so on, it simply returns the next first value after the falsy value.
// console.log(undefined || null || "" || "kaif" || 20);

const restaurant = {
    name: 'Kaifi Da Cafe',


};

restaurant.constumerNum = 22;
//With Turnary Operator.
const constumer1 = restaurant.constumerNum ? restaurant.constumerNum : 10
// console.log(constumer1);

// With OR Operator.
const constumer2 = restaurant.constumerNum || 10
// console.log(constumer2);

//----------------------------------AND----------------------------------

//AND operator short circuting returns the first falsey value.
// console.log(3 && "kaif");
// console.log("" && "kaif");
// console.log(true && 0);
// console.log(undefined && null); //Here both values are falsy but AND operator returning First value, because as the first value is false javascript doesn't even have to look the second value and so on, it simply returns the  first falsy value.
// console.log(22  && "kaif" && "" && undefined && null);


//----------------------------------Nullish Coalescing Operator (??)----------------------------------

//But assume that if there is 0 guest than its gonna return 10 so with that type of condition we would use ??.
//Nullish Values are NULL & Undefined (NOT 0 or ""); for nullish coalescing operator 0 and "" are true values while null and undefined are falsy values.
// restaurant.constumerNum = 0; // return 0.
restaurant.constumerNum = null; 
const constumer3 = restaurant.constumerNum ?? 10;
console.log(constumer3);