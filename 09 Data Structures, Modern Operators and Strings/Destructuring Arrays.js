const restaurant = {
    name: 'Kaifi Da Cafe',
    location: 'Korangi No 4, Karachi',
    categories: ['Italian','Vegetarian','Organic','Meat'],
    starterMenu: ['Cheese','Bread','Salad','Raw Meat'],
    mainMenu: ['Burger','Spring Roll','Pizza'],
    //Not use arrow function because it returns this. keyword as its lexical(Parent) & here it's lexical is global scope.
    order(starterIndex,mainIndex){
        // using return to return as array
        //By returning we can apply more methods on the same array.
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];

        //Can also do console.log here.
        // const arry = [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
        // console.log(arry);
    }

    //Gonna return window object.
    // greet:() =>{
    //     console.log(this);
    // }
}
//----------------------------------Destructuring Arrays----------------------------------.

const arr = [1,2,3];

//Simple method to retrieve elements from an array.
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);

//But we can declare all the variables at the same time using destructuring.
const [x,y,z] = arr;
console.log(arr)
console.log(x,y,z);

//Now destructuring object's array.
const [first,second] = restaurant.categories;
console.log(first,second);

//Now assume that if we have to select third element of array as second category so we can simply leave the hole in destructuring.
const [first1, ,second2] = restaurant.categories;
console.log(first1,second2);

//If we want to SWITCH THE VARIABLE we would do like this.
let [primary,secondary] = restaurant.categories;
console.log(primary,secondary);

//In traditional way we would do like this.
// const temp = primary; // temp = Italian
// primary = secondary; // Italian = Vegetarian
// secondary = temp; // Vegetarian = temp
// console.log(primary,secondary);

//But in destructuring we would do like this.
[primary,secondary] = [secondary,primary]
console.log(primary,secondary);

// console.log(restaurant.order(0,0));
console.log(restaurant.order(2,0)); //Return as array.

const [starter,main] = restaurant.order(2,0);
console.log(starter,main); //Return as values.

//Destructuring nested arrays.

const nestedArr = [10,20,[30,40]];
// const [i, ,k] = nestedArr;  //i=10, k=[30, 40].
// console.log(i,k);

//Nested destructuring.
const [i, ,[j,k]] = nestedArr;  //i=10, j=30, k=40. //
console.log(i,j,k);

//Default Values.
let [p,q,r] = [8,9];
console.log(p,q,r); //return r=undefined.
[p=1,q=1,r=1] = [8,9];
console.log(p,q,r); //return default values if not exist.