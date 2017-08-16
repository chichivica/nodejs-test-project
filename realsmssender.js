var querystring = '';


var http = require("https");

var options = {
    hostname: 'smsc.vianett.no',
    port: 443,
    path: '',
    method: 'POST',
    headers: {}
};

var user_name = "sharhan26@yandex.ru",
    password = "8bsr",
    tel = "4796667230",
    msg = "simple message from chichivica yahoo!!",
    campaignid = "357660",
    refno = 1488;


var url = "/v3/send?"
    + "username=" + encodeURIComponent(user_name)
    + "&password=" + encodeURIComponent(password)
    + "&tel=" + encodeURIComponent(tel)
    + "&SourceAddr=" + encodeURIComponent(tel)
    + "&msg=" + encodeURIComponent(msg)
    + "&campaignid=" + encodeURIComponent(campaignid)
    + "&refno=" + encodeURIComponent(refno);
options.path = url;
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

req.end();
