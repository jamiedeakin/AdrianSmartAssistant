
// require the main app module to get the instance of app
var app = require('./app');

// require the loader to make all routes available
require('./loader');

// start the server
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})