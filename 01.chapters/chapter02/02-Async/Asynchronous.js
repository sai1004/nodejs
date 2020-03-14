/* """""""""""""" part-1 """""""""""""" */
// Asynchronous code using setTimeout

setTimeout(function() {
  console.log("I am an asynchronous message 2");
}, 1000);

console.log("I am a synchronous message");

// Asynchronous code is always executed after the main thread

setTimeout(() => {
  console.log("I am an asynchronous message not main thread");
}, 0);

console.log("Test 1");

for (let i = 0; i < 5; i++) {
  console.log(doSumStuff());
}

console.log("Test 2");

// The 'I am an asynchronous message' will be displayed when the main thread reach here

function doSumStuff() {
  return 1 + 1;
}

/* """""""""""" part-2 """""""""""""" */
// Asynchronous code using setInterval

let counter = 0;

let timer = setInterval(() => {
  counter += 1;

  console.log("I am an asynchronous message");

  if (counter >= 5) {
    clearInterval(timer);
  }
}, 1000);

/* """""""""""" part-3 """""""""""""" */

// reading file in Async way

let fs = require("fs");

fs.readFile("demo.txt", "utf-8", (error, data) => {
  if (error) {
    throw error;
  }
  console.log("Asynchronous message. Content of demo.txt:", data);
});

console.log("Synchronous message");
