const getJSON = (url) => {
  return fetch(url).then((response) => response.json());
};

(async function () {
  const data = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/india`),
    getJSON(`https://restcountries.com/v3.1/name/pakistan`),
    getJSON(`https://restcountries.com/v3.1/name/iran`),
  ]);
  console.log(data[0]);
})();

//Reject promise after certain time
const timeOut = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Time Out"));
    }, sec * 1000);
  });
};

//-------------------Promise.race()-------------------.
//Return only one promise that fetch first..
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/india`),
  timeOut(0.8),
])
  .then((res) => console.log(res[0].name.common))
  .catch((err) => console.log(err));

//-------------------Promise.allSettled()-------------------.
//Return all promise no matter if it rejected or not.
Promise.allSettled([
  getJSON(`https://restcountries.com/v3.1/name/pak`),
  timeOut(0.1),
]).then((res) => console.log(res));

//-------------------Promise.all()-------------------.
//Short circuit if any of the promise got rejected..
Promise.all([getJSON(`https://restcountries.com/v3.1/name/pak`), timeOut(0.1)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));

//-------------------Promise.any()-------------------.
//ignore rejected promises that means the result of Promise.any() always gonna be fullfilled promise unless all of them reject..
Promise.any([
  getJSON(`https://restcountries.com/v3.1/name/india`),
  timeOut(0.1),
])
  .then((res) => console.log(res[0].name.common))
  .catch((err) => console.log(err));
