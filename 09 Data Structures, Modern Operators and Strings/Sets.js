//Sets only contains unique values i.e it neglects the duplicate values and only return the unique values.

let meals = new Set(['pizza','roti','daal','chawal','biryani','pizza','biryani','daal']);
console.log(meals);
meals.add('Sushi')
console.log(meals);
meals.delete('Sushi')
console.log(meals);
console.log(meals.has('Sushi'));
console.log(meals.has('pizza'));

for (const meal of meals) console.log(meal);

//Convert array into set to get unique values.
let rollNo = [10,11,12,13,14,17,18,19,20,13,17,14,20]
rollNo = new Set(rollNo)
console.log(rollNo);

//Then convert sets into array with spread operator to get unique values from the array that contained duplicate values.
let uniqueRollNo = [...new Set(rollNo)]
console.log(uniqueRollNo);