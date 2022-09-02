var express = require('express');
var app = express();
app.use(express.static('dist/angular-14-jwt-auth'));
app.get('/', function (req, res,next) {
    res.redirect('/');
});
app.listen(8080)