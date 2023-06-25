//Min To Max Random Number.
const minMaxRand = function (min,max) {
    return Math.trunc(Math.random() * (max - min) + 1) + min;
}
console.log(minMaxRand(10,20));