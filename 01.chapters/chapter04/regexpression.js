var reg = new RegExp("ab*");
var http = require("http");

console.log(reg);

var fs = require("fs");

// var fileName = 'data.txt';

// var str = fs.readFileSync(fileName).toString();

// var pattern = /Own/gim;   // g = global , i = case insensitive , m = multiline match

// var myarray = str.match( pattern );

// var len = myarray.length;

// console.log("Occurrences of pattern in the string is: " + len);

var filename = "templates/demo.html";
var str = fs.readFileSync(filename).toString();
var pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;

var myarray = str.match(pattern);
var len = myarray.length;
console.log("Occurrences of pattern in the string is : " + len);

// ========================= pattern validations =======================

var str = "90k9k9k";
var pattern = /^[a-fA-F0-9]+$/g;

var res = str.match(pattern);
if (res) {
  console.log("Valid Hexadecimal number");
} else {
  console.log("Not a valid Hexadecimal number");
}

// =============================email validating ================================

var str = "example@gmail.com";

var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var res = str.match(pattern);

if (res) {
  console.log(" email address is valid  you're good to Go ");
} else {
  console.log("please enter Valid email Address ");
}

var input = "0123456789";

var pattern = /0-9/;

var res = input.match(pattern);

if (res) {
  console.log("you have entered the correct mobile number format");
} else {
  console.log("please enter 0-9 numbers");
}
