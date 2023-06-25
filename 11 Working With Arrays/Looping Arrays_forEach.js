let array = [1,2,3,4,5];
array.forEach(arr => {
    console.log(arr);
});

let array2 = [...'kaif abbas is a good boy'];
array2.forEach(arr => {
    // console.log(arr);
});


//For-each Loop.
//Continue & Break statements doesn't works in forEach loop. Because forEach loop, loop over the each element of the array.
const movements = [200,450,-44,3000,-650,-130,70,1300]
movements.forEach((e,i,a) => {
    // console.log(element,index,array);
    // console.log(e,i,a);
    if (e < 0) {
        // console.log(`Movement ${i}: You withdrew ${Math.abs(e)}`)
    }
    // else console.log(`Movement ${i}: You deposited ${e}`);
});


//For-in Loop.
console.log('-------------------For-in Loop----------------------');
for (const key in movements) {
    //key is index as string.
    const element = movements[key];
    console.log(`Movement ${parseInt(key)+1}: You ${element<0 ? 'withdrew' : 'deposited'} ${element<0 ? Math.abs(element) : element}`);
}


//For-of Loop.
console.log('-------------------For-of Loop----------------------');
for (const [i,key] of movements.entries()) {
    //key is element itself.
    console.log(`Movement ${i+1}: You ${key<0 ? 'withdrew' : 'deposited'} ${key<0 ? Math.abs(key) : key}`);
}


//callback functions concept.
//0: e(200)
//1: e(450)
//2: e(-44)
//and so on until it reaches its end.