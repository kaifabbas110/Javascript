let bgColor = document.body.style.backgroundColor = 'lightgreen';
let textArea = document.createElement('textarea');
textArea.style.width = '15rem'
textArea.style.height = '5rem'
document.body.append(textArea);

let btn = document.createElement('button');
btn.style.width = '2rem';
btn.style.height = '1rem';
document.body.append(btn);


let body = document.getElementsByTagName('body')[0]
body.style.display = 'flex'
body.style.alignItems = 'center'


btn.addEventListener('click',function () {
   let text = textArea.value
   let split = text.split('\n')
   console.log(split);
    for (const [i,word] of split.entries()) {
        const [first,second] = word.toLowerCase().trim().split('_');
        // const output = `${first}${last[0].toUpperCase() + last.slice(1)}`
        const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`

        console.log(`${output.padEnd(20,' ')}${'✅'.repeat(i+1)}`);
    }
});

/*
underscore_case
 first_name
Some_Variable  
 calculate_AGE
delayed_departure
*/