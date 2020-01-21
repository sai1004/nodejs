// https://www.codingame.com/playgrounds/482/javascript-async-and-await-keywords/a-first-example

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
