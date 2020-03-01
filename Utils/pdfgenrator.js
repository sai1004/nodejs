var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./templates/demo.html', 'utf8');
var options = { format: 'Letter' };

pdf.create(html, options).toFile('./templates/demo.pdf', function(err, res) {
    if (err)
        return console.log(err);
    console.log(res);
})
