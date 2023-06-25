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

  // setTimeout(() => {
  countries.insertAdjacentHTML("beforeend", html);
  // }, 5000);
  // neighbour.style.color = "white";
  // document.getElementsByClassName("neighbour").style.backgroundColor = "orange";
};

const renderError = function (msg) {
  countries.insertAdjacentText("beforeend", msg);
  // cards.style.transition = "5s"; ???
  countries.style.fontSize = "2rem";
  // countries.style.textAlign = "center";
};
const countries = document.querySelector(".countries");
const cards = document.querySelector(".country_cards");
const btn = document.querySelector(".btn");

const getCountriesData = function (country) {
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();

      //instead of these all of these call back functions we can make a one central one....
      // (err) => alert(`${err} countries data`)
    })
    .then((data) => {
      const [dataa] = data;
      console.log(dataa);
      // const neighbour = dataa.borders?.[0];
      const neighbour = dataa.borders[0];
      console.log(neighbour);
      //whatever we return from promise will become the fullfill value or success value of that promise..
      renderCountry(dataa);
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);
      return response.json();
      // (err) => alert(`${err} neighbour data`)
    })

    //.then() always call when the promise is fullfilled
    .then((data) => renderCountry(data[0], "neighbour"))

    // .catch() always call when the promise is rejected
    // .catch((err) => {
    //   console.error(`${err} 🔥🔥🔥`);
    //   renderError(`Something went wrong 🔥🔥🔥 ${err.message}, Try again!`);
    // })

    //.finally always call no matter whatthe result is..
    .finally(() => {
      console.log("Finally called");
    });
};
btn.addEventListener("click", function (data) {
  getCountriesData("pakistan");
  // getCountriesData("india");
  // getCountriesData("australia");
});
getCountriesData("pakistan");
// getCountriesData("jfjdbsfj");
