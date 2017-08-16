// HTTP GET PDF from Signicat SDS
// using Node.js (http://nodejs.org)
// and the request library (https://github.com/mikeal/request)
const fs = require('fs');
const request = require('request');

let url = 'https://preprod.signicat.com/doc/demo/sds/1108201730rcpit8elp1t4f1pk42uofe0c0mz23fwwdu8j72cffpgv787r';
request(url).auth('demo', 'Bond007').pipe(fs.createWriteStream('mydownloadedfile.pdf'));