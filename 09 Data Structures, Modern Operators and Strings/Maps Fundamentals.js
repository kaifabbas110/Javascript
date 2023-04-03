//In Map we use keys to acces values.

const restaurant = new Map();
//.set method is similar to .add method.
restaurant.set("name", "Lassi De Kaifi");
restaurant.set(1, "Korangi, Karachi");
console.log(restaurant.set(2, "Paris, London"));

restaurant
  .set("categories", ["Desi", "Chinese", "Italian", "Non-Veg"])
  .set("open", 10)
  .set("close", 23)
  .set(true, `we're open 🌝`)
  .set(false, `we're close 😞`);
console.log(restaurant);

console.log(restaurant.get('name'));
// console.log(restaurant.get(true));

let time = 20;
//Don't use this kind of patterns because it is hard to read.
console.log(restaurant.get(time > restaurant.get('open') && time < restaurant.get('close')));

console.log(restaurant.has('categories'));
console.log(restaurant.size);
restaurant.delete('name');
// restaurant.clear();
console.log(restaurant);
console.log(restaurant.size);

//We cannot access the value of [1,2] because it is object in heap and we accessing the different [1,2].Both are different in heap.
restaurant.set([1,2],'Test')
console.log(restaurant.get([1,2]));

//We can declare it like this.
let arr = [1,2]
restaurant.set(arr,'Test')
console.log(restaurant.get(arr));

console.log(typeof [1,2]);

// for (const [key,values] of restaurant) {
//     console.log(key,values);
// }