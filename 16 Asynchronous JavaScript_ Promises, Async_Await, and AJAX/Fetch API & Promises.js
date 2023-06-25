// Promise is a container for a future value..

const request = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => response.json())
        .then((data) => console.log(data[0].name));
}
request("australia");
request("germany");
request("pakistan");
