// const getJSON = async function (url, msg = "SOmething went wrong") {
//   try {
//     const resp = await fetch(url);
//     return resp.json();
//   } catch (msg) {
//     console.log(msg.message);
//   }
// };
const getJSON = function (url, msg = "SOmething went wrong") {
  return fetch(url).then((response) => {
    // console.log(response);
    if (!response.ok) {
      throw new Error("kaif");
    }
    return response.json();
    //   console.log(dataa);
    //   return dataa;
    //   });
    // .then((data) => {
    //   const [dataa] = data;
    //   console.log(dataa);
  });
  // .catch((err) => console.log(err.message));

  // return await resp.json();
};

// getJSON("https://restcountries.com/v3.1/name/pakistan");

//Promise Combinators

const getCountries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    //Promise.all() runs promises at the same time.
    //But if any of the promises rejects then whole Promise.all() rejects OR Promise.all() short circuits when one promise is reject...

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    // console.log([data1.name.common, data2.name.common, data3.name.common]);
    // console.log(data);
    console.log(data.map((e) => e[0].name.common));
  } catch (err) {
    console.log(err.message);
  }
};

getCountries("pakistan", "australia", "iraq");
