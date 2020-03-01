const crypto = require("crypto");

// const secret = 'abcdef';

// const hash = crypto.createHmac('sha256',secret).update(' Hey hello world! ').digest('hex');

// console.log(hash);


//============ Encryption AES 192 method =============\\

const secret = 'password';

const cipher = crypto.createCipher("aes192", secret);
var encrypted = cipher.update("Hello world", "utf8", "hex");
encrypted += cipher.final("hex");

console.log(encrypted)

//================ Decryption AES 192 method ============\\

const decipher = crypto.createDecipher("aes192", secret);
var decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);


// https://www.npm.red/package/crypto-js
