

var http = require("http");
var https = require("https");

var options = {
    host: 'node2.codenvy.io',
    port: 38671,
    path: '/'
};

http.get(options, function(res) {
    console.log("Got response: " + res.statusCode);
    console.log(res);
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});






