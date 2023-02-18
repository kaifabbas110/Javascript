//----------------------------------Spread Operator----------------------------------.
//It expands an array into all its elements.It basically unpacking all the array elements at once.

const arr = [1, 2, 3];

//So if we manually push arr elements in newBadArr we would do something like this.
let newBadArr = [4, 5, 6, arr[0], arr[1], arr[2]];
console.log(newBadArr);

//Or something like that.
newBadArr = [4, arr[0], arr[1], arr[2], 5, 6];
// console.log(newBadArr);

//But with spread operator we would do like this.
const newGoodArr = [4, 5, 6, ...arr];
console.log(newGoodArr);
console.log(...newGoodArr); //individually logged the elements of array.

//Object Example.
const restaurant = {
    name: 'Kaifi Da Cafe',
    location: 'Korangi No 4, Karachi',
    categories: ['Italian', 'Vegetarian', 'Organic', 'Meat'],
    starterMenu: ['Cheese', 'Bread', 'Salad', 'Raw Meat'],
    mainMenu: ['Burger', 'Spring Roll', 'Pizza'],

    orderBeefBiryani(ing1,ing2,ing3) {
        console.log(`Here is your delicious Beef Biryani with ${ing1},${ing2} and ${ing3}`);
    },
};

const newMenu = [...restaurant.mainMenu, 'Biryani'];
console.log(newMenu);

/*
Two important use cases of spread operator
1.Create shallow copies of arrays.
2.Merge two arrays
*/

//Copy array of mainMenu.
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays.
const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(wholeMenu);

/* Spread operator works on all the ITERABLES.
Iterables: arrays,strings,maps,sets. NOT Objects. */
const str = 'Kaif';
const letters = [...str, ,'abbas'];
console.log(letters);

//We can only use spread operator when we building a new arrays or pass into a function.
// console.log(${...str}); //we can't do this..

//Using Spread operator with functions.
//Without spread operator
// restaurant.orderBeefBiryani('Extra rivaaj 🤤','Rayita','Salad');

// Using prompt.
//With spread operator
// let ingredients = [prompt('Ingredient:1?'),prompt('Ingredient:2?'),prompt('Ingredient:3?')];
// restaurant.orderBeefBiryani(ingredients[0], ingredients[1], ingredients[2]);
//Same as writing the above expression.
// restaurant.orderBeefBiryani(...ingredients);

//Objects.
//We can extend our new objects by existing objects with spread operator.
const newRestaurant = {
    foundIn: 2023,
    ...restaurant,
    founder: 'Kaif Abbas',
}
console.log(restaurant);
console.log(newRestaurant);

//We can also make Copy of our existing object and then alter that copies as our usage.
const restaurantCopy1 = {...restaurant};
const restaurantCopy2 = {...newRestaurant};
restaurantCopy1.name = 'Naam Hi Badal Diya 😜';
restaurantCopy2.founder = 'Koi Nahi Hai Founder Chalo Niklo 😜';
console.log(restaurant.name);
console.log(restaurantCopy1.name);
console.log(newRestaurant.founder);
console.log(restaurantCopy2.founder);