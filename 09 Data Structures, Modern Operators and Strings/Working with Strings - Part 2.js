//Fix capitalization in name.
const nameP = "Kaif Abbas";
console.log(nameP.toLowerCase());
console.log(nameP.toUpperCase());
const namePCorrect = nameP[0].toUpperCase() + nameP.slice(1).toLowerCase();
console.log(namePCorrect);

//Comparing emails.
const email = 'kaifabbas03111@gmail.com';
const loginEmail = '  KaifAbbas03111@Gmail.com \n';
if (email !== loginEmail) {
    const loginEmailCorrect = loginEmail.toLowerCase().trim()
    console.log(email === loginEmailCorrect);
}

//Replacing.
//Doesn't mutate the original one instead creates a new one.
const priceEurope = '288,99🇪'
const pricePkr =  priceEurope.replace('🇪','pkr').replace(',','.')
// const pricePkr =  priceEurope.replace('288,99🇪','288.99pkr')
console.log(pricePkr);

const announcement = 'All passenger come to boarding door 23. Boarding door 23!'
console.log(announcement.replaceAll('door','gate'));
console.log(announcement.replace(/door/g,'gate')); // Here /door/g 'g' = global that means all the door word replaced with gate.

//Booleans.
const plane = 'Airbus A303leo';
if (plane.startsWith('Airbus') && plane.endsWith('leo')) console.log('Welcome to Airbus Family');

//Check Baggage.
const checkBaggage = function (items) {
    const itemsLower = items.toLowerCase();
    if (itemsLower.includes('knife') || itemsLower.includes('gun')) {
        console.log('You are not allowed!');
    }
    else console.log('You are allowed!');
}

checkBaggage('I have a Laptop 💻, Food 🍲 and pocket Knife 🗡️');
checkBaggage('Socks 🧦 and camera 📷');
checkBaggage('Got some Snacks 🏔️ and a Gun 🔫 for safety');
checkBaggage('Biryani 🍚 and nihari 🍛');