// //setTimeout() executes after the setted time for example in the below example the code execute after 5 seconds

//     console.log('Your Pizza 🍕 will be ready within 5 seconds');
//     setTimeout(() => {
//             console.log('Your Pizza 🍕 is ready.');
//         }, 5000);


// //setInterval() executes everytime according to the setted time for example in the below example the code execute after every 1 seconds

//     setInterval(() => {
//         const now = new Date()
//         console.log(`Time in US format ${new Intl.DateTimeFormat(
//         'en-US',
//         options = {
//             hour : 'numeric',
//             minute : 'numeric',
//             second : 'numeric',
//         }
//         ).format(now)}`);
//         }, 1000);
    

let time = 10;
// console.log(Math.trunc(time/60));
// console.log(time%60);
setInterval(() => {
    if (time >= 0) {   
        let min = String(Math.trunc(time/60)).padStart(2,'0')
        let sec = String(time%60).padStart(2,'0');
        // let sec = time%60;
        console.log(`${min}:${sec}`);
        time--;
    }
    else clearInterval()
        }, 1000);