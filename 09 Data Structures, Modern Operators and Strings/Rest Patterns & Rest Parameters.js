//----------------------------------Rest Patterns & Rest Parameters----------------------------------.
/* 
looks exactly like spread operator but actually does opposite than spread operator
Rest operator packs rest elements into an array.
Declareon left side of =
*/
//Spread operator because declare on right side of = .
let f = [4, 4, 4, 4, 4];
const arr = [1, 2, ...f];
// console.log(arr);

//Rest operator because declare on left side of = .
const [a, b, ...restValues] = [1, 2, 3, 4, 5];
// console.log(a, b, restValues);

const [e, r, ...str] = ['a', 's', 'd', 'f', 'g'];
const letters = [e, r, str];
//...we can use ...str to log array as a individual items.
// const letters = [e, r, ...str];
// console.log(letters);


const restaurant = {
    name: 'Kaifi Da Cafe',
    location: 'Korangi No 4, Karachi',
    categories: ['Italian', 'Vegetarian', 'Organic', 'Meat'],
    starterMenu: ['Cheese', 'Bread', 'Salad', 'Raw Meat'],
    mainMenu: ['Burger', 'Spring Roll', 'Pizza'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};



//Here restItems collect all the rest items from the array.
const [cheese, bread, ...restItems] = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(cheese, bread, restItems);

//Object
const { thu, ...restDays } = restaurant.openingHours;
// console.log(thu, restDays);

//Functions
const add = (...numbers) => {
    let sum = 0;
    for (const i of numbers) {
        sum += i;
    }
    console.log(sum);
}
// add(1, 2, 3, 4, 5);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const x = [10, 20, 30, 40, 50];
// add(...x);

restaurant.orderPizza('Cheese', 'Bread', 'Salad', 'Raw Meat');
restaurant.orderPizza('Cheese'); //still get an empty array to work with.