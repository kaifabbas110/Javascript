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
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    //arguments order doesnot matters.
    //We can also set default values of parameters.
    orderDelivery({ time = "12:00 am", address, starterIndex, mainIndex = 2 }) {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};


restaurant.orderDelivery({
    time: '12:00 pm',
    address: 'Gulshan-E-Iqbal Block 4',
    starterIndex: 2,
    mainIndex: 0,
});
restaurant.orderDelivery({
    address: 'Gulshan-E-Iqbal Block 4',
    starterIndex: 2,
});
// console.log(restaurant.order(2,0));
// orderDelivery();

//----------------------------------Destructuring Objects----------------------------------.
//Use curly {} braces to destructure.
//Must write the exact property  name to extract variables from object.
//Unlike arrays order doesn't matters in object destructuring, as we writes the exact same name of property.
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

//Now if we want the variables name to be different from the property name?
//We can do it like this.
const {
    name: restaurantName,
    categories: tags,
    openingHours: hours
} = restaurant;
console.log(restaurantName, tags, hours);

//Default Values.
const {
    menu = [], //menu doesn't exist in current object so setting default value.
    starterMenu: starter = []
} = restaurant;
console.log(menu, starter);

//Mutating variables (switch variables)
let a = 111;
let b = 222;
const obj = { a: 999, b: 888, c: 777 };
//Wrapping with paranthesis to avoid code block error because we cannot assign anything to a code block.
({ a, b } = obj);
console.log(a, b);

//Destructuring nested objects.
const {
    fri: {
        open: o,
        close: c,
    },
} = openingHours;
console.log(o, c);