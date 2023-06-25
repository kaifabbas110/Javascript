let set = new Set ([1,1,2,3,4,5,4,5,6])
set.forEach((e,i) => {
    console.log(`Element ${i}: ${e}`);
});
// console.log(set);

let map = new Map ([
    ['Name','Kaif Abbas'],
    ['Roll No',14],
    ['Batch','21F'],
])


map.forEach((e,i,a) => {
    console.log(`${i}: ${e}`);
});


//To keep duplicate parmeters use '_.
map.forEach((e,_,a) => {
    console.log(`${e}: ${e}`);
});
console.log(map.get('Roll No'));