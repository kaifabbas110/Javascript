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
};

//Return as array so than we can easily loop over objects.

//Keys of Object
console.log(Object.keys(restaurant.openingHours));
for (const days of Object.keys(restaurant.openingHours)) {
    console.log(days);
}


//Values of Object
console.log(Object.values(restaurant.openingHours));
for (const timing of Object.values(restaurant.openingHours)) {
    console.log(timing);
}
//Here de-structuring object to get opening & closing timings.
for (const {open,close} of Object.values(restaurant.openingHours)) {
    console.log(open,close);
}

//Entries Object
console.log(Object.entries(restaurant.openingHours));
for (const days of Object.entries(restaurant.openingHours)) {
    console.log(days);
}
//Here de-structuring object to get days also opening & closing timings.
console.log(Object.entries(restaurant.openingHours));
for (const [day,{close,open}] of Object.entries(restaurant.openingHours)) {
    console.log(`On ${day} we open at ${open}${(open >= 12)?'pm':'am'} & close at ${close}${(close >= 12)?'pm':'am'}`);
}