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
  // document.getElementsByClassName("neighbour").style.backgroundColor = "orange";
};

const request = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      const [dataa] = data;
      renderCountry(dataa);
      // const neighbour = data[0].borders ---> this will throw an array on borders in API which would not work...
      const neighbour = dataa.borders;
      if (!neighbour) return;
      // console.log(neighbour);
      neighbour.forEach((borders) => {
        // neighbour
        // .forEach((name, i) => {
        // console.log(name);
        //whatever we return from promise will become the fullfill value or success value of that promise..
        return (
          fetch(`https://restcountries.com/v3.1/alpha/${borders}`)
            // })
            .then((response) => response.json())
            .then((data) => {
              // console.log(data);
              const [dataa] = data;
              // console.log(dataa);
              renderCountry(dataa, "neighbour");
            })
        );
      });
    });
};
// request("australia");
// request("portugal");
request("pakistan");
request("india");
