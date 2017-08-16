/**
 * Created by Ivan Talalaev on 2/6/2017.
 */

let fs = require('fs'),
  reqst = require('request-promise'),
  soap = require('soap'),
  request = require('request'),
  url = 'https://preprod.signicat.com/ws/documentservice-v3?wsdl';

let uploadFile = new Promise(function (resolve, reject) {
  let agent = {
    cert: fs.readFileSync(`../files/certs/crt.pem`),
    key: fs.readFileSync(`../files/certs/key.pem`),
    securityOptions: 'SSL_OP_NO_SSLv3',
  };
  let requestOptions = {
    url: 'https://preprod.signicat.com/doc/bolink.no/sds/'
    //url: 'https://id.signicat.com/doc/bolink.no/sds',
    // agentOptions: agent,
    // headers: {
    //   'Authorization' : "Basic Ym9saW5rLm5vOkJvbmQwMDc="
    // }
  };
  fs.createReadStream('../files/Example_pdf_file.pdf').pipe(
    request.post(
      requestOptions,
      function (error, response, body) {
        if (!error && response.statusCode == 201) {
          resolve(body);
          console.log(body);
        }
        else {
          reject(error);
          console.log(error);
        }
      }
    ).auth(
      'bolink.no',
      'Bond007',
      true
    )
  );
});

uploadFile.then(refSds => {

  debugger;
}).catch(err => {
  debugger

});