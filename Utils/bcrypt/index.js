const bcrypt = require("bcryptjs");

const password = "SecretKey";

const saltRounds = 10;

// bcrypt.genSalt(saltRounds, (err, salt) => {
//   if (err) {
//     throw err;
//   } else {
//     bcrypt.hash(password, salt, (err, hash) => {
//       if (err) {
//         throw err;
//       } else {
//         console.log("hash", hash);
// Hash:  $2a$10$x08dU2mYBNZPmR7lvHdraOnP77e4pMgbOICQT2/jJR.zvuGppLCLy
//
//       }
//     });
//   }
// });

/*  ------------------ Compare Password Entered BY user ------------------ */

const passwordEnteredByUser = "SecretKey";
let hash = "$2a$10$x08dU2mYBNZPmR7lvHdraOnP77e4pMgbOICQT2/jJR.zvuGppLCLy";

bcrypt.compare(passwordEnteredByUser, hash, (err, isMatch) => {
  if (err) {
    throw err;
  } else if (!isMatch) {
    console.log("Password Doesn't Match");
  } else {
    console.log("Password Matched!! ");
  }
});
