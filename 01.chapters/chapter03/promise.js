
let promise = readFile("test.txt") 

promise.then(function(contents) {

//Fulfillment
  console.log("contents")

}, function(err) {

  console.error(err.message);

})


promise.then(function(contents) {
  //Fullfillments
  console.log("contents");
})

promise.then(null, function() {
console.error(err.message); 
})


promise.catch(function() {
console.error(err.message); 
})
