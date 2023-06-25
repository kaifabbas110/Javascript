//Any top level code (the code outside the callback) will run first so the first two logs will come from the two synchronous (console.log)....

console.log("Test start");
//setTimeout & Promise will both finish same time.
// So which of these two callbacks will be executed?

//The timer appers first in the code so it will finished first so it will be put in the callback queuefirst.But it doesn't executed first! Reason?
//.......MICRO task queue.......
//MICRO task queue has priority over the callback queue
setTimeout(() => {
  console.log("0 seconds passed");
}, 0);

//Callback of promise will put in the microtack queue so it should be executed first.....
Promise.resolve("Resolved promise 1").then((res) => console.log(res));

Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
// It happened because both callbacks execute at the same time......
console.log("Test end");

//Since microtasks have priority over the regular callbacks so if one of the microtask takes a long time to run then the timer will actually be delayed and not run after the 0 seconds.It will be delayed (happened in the Promise no 2)........
