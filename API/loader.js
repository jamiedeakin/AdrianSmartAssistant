
// get the 'Routes' folder
var normalizedPath = require("path").join(__dirname, "Routes");

// loop through each route file and require them
// to make all collections of routes accessible from the API
require("fs").readdirSync(normalizedPath).forEach(function(file) {

    require("./Routes/" + file);
});