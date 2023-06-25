const countries = document.querySelector(".countries");
const countryCard = document.querySelector(".country_card");
const neighbourPP = document.querySelector(".neighbour");

const renderCountry = function (data, className = "") {
  const html = `
    <div class="country_card ${className}">
    <img src="${data.flags.png}" alt="" class="country_img" />
        <div class="country_data">
        <h3 class="country_name">${data.name.common}</h3>
        <h4 class="country_region">${data.region}</h4>
          <p class="country_row"><span>🧑‍🤝‍🧑</span>${(
            data.population / 1000000
          ).toFixed(3)} M</p>
          <p class="country_row"><span>🗣️</span>${Object.values(
            data.languages
          )}</p>
          <p class="country_row"><span>💰</span>${Object.values(
            Object.values(data.currencies)[0].name
          ).join("")}</p>
            </div>
            </div>
            `;

  countries.insertAdjacentHTML("beforeend", html);
  // neighbour.style.color = "white";
  // document.getElementsByClassName("neighbour").style.wbackgroundColor = "orange";
};

const whereAmI = async () => {
  //   fetch(`https://restcountries.com/v3.1/name/${country}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data[0]));

  const res = await fetch(`https://restcountries.com/v3.1/name/pakistan`);
  // console.log(res.status);
  // if (!res.status) {
  //   throw new Error("hhhhhhhhhhhhhhh");
  // }
  //   console.log(res);

  const [data] = await res.json();
  renderCountry(data);
  //   const neighbour = data.borders[0];
  //   const neighbour = data.borders;

  //   for (let i = 0; i < neighbour.length; i++) {
  //     const res2 = await fetch(
  //       `https://restcountries.com/v3.1/alpha/${neighbour[i]}`
  //     );

  //     const [data2] = await res2.json();

  //     renderCountry(data2, "neighbour");
  //   }
  return `You are in ${data.name}`;
  // throw err;

  //   console.log(res);
};

console.log("1: Will get Country");
// const count = whereAmI("pakistan");
// console.log(count);
// const count = async whereAmI("pakistan"){
// await count
// console.log(count);
// };
// console.log("3: Finished getting Country");

(async function () {
  try {
    const count = await whereAmI();
    console.log(count);
  } catch (err) {
    console.log(err.message);
  }
  console.log("3: Finished getting Country");
})();
