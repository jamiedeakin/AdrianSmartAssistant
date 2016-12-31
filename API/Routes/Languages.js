
// require all needed node modules
var fs  = require("fs");

// require the main app module to get the instance of app
var app = require('../app');

// define all routes
app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/../" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})
