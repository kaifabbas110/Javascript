// Uncaught TypeError: Assignment to constant variable.
// let y = 1;
// const x = 3;
// x = 2;

// Uncaught SyntaxError: Missing catch or finally after try
// try {
//   let y = 1;
//   const x = 3;
//   x = 2;
// }

// try {
//   let y = 1;
//   const x = 3;
//   x = 2;
// } catch (err) {
//   alert(`${err.message}`);
// }
const renderError = function (msg) {
  countries.insertAdjacentText("beforeend", msg);
  // cards.style.transition = "5s"; ???
  countries.style.fontSize = "2rem";
  // countries.style.textAlign = "center";
};

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

const whereAmI = async (country) => {
  try {
    //   fetch(`https://restcountries.com/v3.1/name/${country}`)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data[0]));

    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

    if (!res.ok) throw new Error("Country doesnt exist");
    //   console.log(res);

    const [data] = await res.json();

    //   const neighbour = data.borders[0];
    const neighbour = data.borders;
    renderCountry(data);
    if (!neighbour) throw new Error("Neighbour doesnt exist");
    for (let i = 0; i < neighbour.length; i++) {
      const res2 = await fetch(
        `https://restcountries.com/v3.1/alpha/${neighbour[i]}`
      );
      // console.log(res2);
      if (!res2.ok) throw new Error("Problem getting neighbour");

      const [data2] = await res2.json();

      renderCountry(data2, "neighbour");
    }
  } catch (err) {
    renderError(`🔥 ${err.message} 🔥`);
    console.log(err.message);
  }

  //   console.log(res);
};

whereAmI("pak");
// whereAmI("india");
// whereAmI("australia");
