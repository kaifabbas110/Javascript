//----------------------------------For Of Loop----------------------------------.


const restaurant = {
    name: 'Kaifi Da Cafe',
    location: 'Korangi No 4, Karachi',
    categories: ['Italian', 'Vegetarian', 'Organic', 'Meat'],
    starterMenu: ['Cheese', 'Bread', 'Salad', 'Raw Meat'],
    mainMenu: ['Burger', 'Spring Roll', 'Pizza'],
};

const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
// console.log(menu);

// for (const items of menu) console.log(items);

// menu.entries() now each of the item is an array with indexes in the array element itself.
//Now indexes become elements itself ;).
// items[0] is the index(number) & items[1] is elements.

for (const items of menu.entries()){
   console.log(items);
    // console.log(`${items[0] + 1}: ${items[1]}`);
}

//Since items is an array so we can de-structuring here.
for (const [i,elem] of menu.entries()){
    //index(0) = i & elements(1) = elem
    // console.log(`${i + 1}: ${elem}`);
}

//Return array iterator but we will learn about array iteratiors later.
// console.log(menu.entries());

//It is basically is an array with each position contains a new array
// console.log([...menu.entries()][1][1]);
// console.log([...menu.entries()][0]);
// console.log([...menu.entries()][0][1]);