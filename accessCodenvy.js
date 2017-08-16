/**
 * Created by pc on 11/25/2016.
 */


var querystring = '';
var postData = JSON.stringify({
    'PPPPPPPPPP' : '6666666666666666',
    'QQQQQQQQQQ' : 'asdfasdf',
    'name' : 'vanka',
    'familien' : '22 godika'
});

var http = require ("http");

var options = {
    hostname: 'node7.codenvy.io',
    port: 35697,
    path: '/process_post?id=1488',
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
    }
};

var req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
});

req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();