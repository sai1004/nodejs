// https://www.codingame.com/playgrounds/482/javascript-async-and-await-keywords/a-first-example

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#Simple_example

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  console.log("I will be executed After the result of await func");
  // expected output: 'resolved'
}

asyncCall();

/* """""""""""""""" Part - 1 """""""""""""""" */

function job() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Hello world ");
  });
}

async function test() {
  let message = await job();
  console.log(message);
  return "Hello World ";
}

test().then(function(message) {
  console.log(message);
});

/* """""""""""""""" Part - 2 """""""""""""""" */

function test() {
  return job().then(function(message) {
    console.log(message);

    return "Hello world 2";
  });
}
