//Create a new promise using the promise constructor just like the many other built-in objects
//That means promises are the special kind of object in jS........

const obj = {
  name: "kaif abbas",
  rollNo: 14,
  cgpa: [3.5, 3.7, 3.5, 3.3],
};

//-------------------Promisifying-------------------.

const lotteryPromise = new Promise((resolve, reject) => {
  console.log("Lottery draw is happening 🔮");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You Won 💰");
    } else {
      reject(new Error("You lost 💩"));
    }
  }, 2000);
});

lotteryPromise.then(
  (res) => console.log(res),
  (err) => console.log(err)
);
//   .then((data) => console.log(data));

// console.log(Math.random() >= 0.5);

const sec = 1;
const wait = (sec) => {
  //we don't need the reject function because it's impossible for timer to fail....
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

wait(sec)
  .then(() => {
    console.log(`I waited 1 for sec`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited 2 for sec`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited 3 for sec`);
    return wait(1);
  })
  .then(() => {
    console.log(`I waited 4 for sec`);
    return wait(1);
  })
  .then(() => console.log("5 sec"));

Promise.resolve("abc").then((res) => console.log(res));
Promise.reject("abc").then((err) => console.log(err));
