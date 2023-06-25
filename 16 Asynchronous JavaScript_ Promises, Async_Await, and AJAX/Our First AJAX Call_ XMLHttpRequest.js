//This is an old school way.
const countries = document.querySelector(".countries");

const renderCountry = function (data) {
  const html = `
  <div class="country_card">
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
};

const getCountriesData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener("load", function () {
    // .responseText return response as text
    // console.log(request.responseText);
    const [data] = JSON.parse(this.responseText);
    // const curr = data.currencies
    // console.log(curr);
    console.log(data);
    console.log(Object.values(data.currencies)[0]);
    // console.log(Object.keys(data.name));
    // const { PKR } = data.currencies
    // console.log(data.currencies.[1].name);

    // html.classList.add(countries)
    renderCountry(data);
  });
};
getCountriesData("pakistan");
getCountriesData("iran");
getCountriesData("germany");
