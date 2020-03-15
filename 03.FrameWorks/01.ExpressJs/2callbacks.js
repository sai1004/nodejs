var ping = function(req, res) {
console.log('ping');
res.end(200);
};
5
6
app.get('/', ping);

var ping = function(req, res, next) {
console.log('ping');
return next();
};
var pong = function(req, res) {
console.log('pong');
res.end(200);
};
app.get('/', ping, pong);
