const path = require('path');

let imageName = 'bob_smith';

let filepath = path.join(__dirname, '/images/useravatars/', imageName, '.png');

console.log('the file path of the image is', filepath);

// C:/Users/.../intro-to-the-path-module/images/useravatars/bob_smith.png


// Shortened for readability
let filepath = 'C:/Users/.../intro-to-the-path-module/images/useravatars/bob_smith.png';

let imageName = path.basename(filepath, '.png');

console.log('name of image:', imageName);
// name of image: bob_smith


let imageTypes = ['.png', '.jpg', '.jpeg'];

function isImage(filepath) {
  let filetype = path.extname(filepath);

  if(imageTypes.includes(filetype)) {
    return true;
  } else {
    return false;
  }
}

isImage('picture.png'); // true
isImage('myProgram.exe'); // false
isImage('pictures/selfie.jpeg'); // true
