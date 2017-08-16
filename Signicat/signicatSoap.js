/**
 * Created by pc on 12/19/2016.
 */
let fs = require('fs'),
  reqst = require('request-promise'),
  soap = require('soap'),
  taskId = 123,//Math.floor(Math.random() * (1000000 - 10 + 1)) + 10,
  docId = 124,// Math.floor(Math.random() * (1000000 - 10 + 1)) + 10,
  url = 'https://preprod.signicat.com/ws/documentservice-v3?wsdl',
  args = {

    service: 'bolink.no', password: 'Bond007', request: {
      language: "nb",
      document: {
        attributes: {
          'xsi:type': "tns:sds-document",
          'ref-sds-id': "231220165joq322e5n0nzi53py9tdbb9ffc8hjmfhjodjlrkwz1yixza6",
          id: docId.toString(),
          //"mime-type": "application/pdf", //"",
          'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance'
        },
        description: 'realty gamak',
        'external-reference': docId.toString()
      },

      task: [{
        'on-task-complete': "http://localhost:3004/integration?requestId=${requestId}&taskId=${taskId}&status=taskcomplete",
        subject: {
          attributes: {
            id: (taskId + 15).toString()

          },
          'first-name': "Krister",
          'national-id': "08068843104",
          'last-name': "Koen",
          'mobile': "242423424",
          'email': "asdfjklasjkf@mail.com"
        },
        attributes: {
          id: taskId.toString(),
          bundle: true
        },
        "document-action": {
          attributes: {
            'send-result-to-archive': "false",
            optional: 'false',
            type: 'sign'
          },
          'document-ref': docId.toString()
        },
        // authentication: {
        //   attributes: {
        //     artifact: "true"
        //   },
        //   //method: 'nbid',
        // },
        signature: {
          attributes: {
            //'if-authentication': 'nbid-sign',
            responsive: true
          },
          method: 'nbid-sign'
        }
        /*,
         notification: {
         attributes: {
         type: 'EMAIL',
         'notification-id': 'taskNotification'
         },
         recipient: 'talalaev.i.a@yandex.ru',
         sender: 'noreply@bolink.no',
         header: 'Signature header',
         message: 'please sign the document ${taskUrl}'
         }*/
      },
        {
          subject: {
            attributes: {
              id: (taskId + 15).toString()

            },
            'first-name': "Joakim",
            'national-id': "01028844731",
            'last-name': "Dahlen",
            'mobile': "324234234",
            'email': "dahlen@mail.com"
          },
          attributes: {
            id: (taskId + 1).toString(),
            bundle: true
          },
          "document-action": {
            attributes: {
              'send-result-to-archive': "false",
              optional: 'false',
              type: 'view'
            },
            'document-ref': docId.toString()
          },
          // authentication: {
          //   attributes: {
          //     //artifact: "true"
          //   },
          //   //method: 'nbid',
          // },
          signature: {
            attributes: {
              //'if-authentication': 'nbid-sign',
              responsive: true
            },
            method: 'nbid-sign'
          }
          /*,
           notification: {
           attributes: {
           type: 'EMAIL',
           'notification-id': 'taskNotification'
           },
           recipient: 'talalaev.i.a@yandex.ru',
           sender: 'noreply@bolink.no',
           header: 'Signature header',
           message: 'please sign the document ${taskUrl}'
           }*/
        }]
    }
  };


var options = {
  envelopeKey: "soapenv",
  ignoredNamespaces: {
    namespaces: ['ns1', 'ns2'],
    override: true
  },
  overrideRootElement: {
    "namespace": "tns",
    "xmlnsAttributes": []
  }
};


var request = require('request');

let docfile = new Promise(function (resolve, reject) {
  let requestOptions = {
    cert: fs.readFileSync(`./files/certs/crt.pem`),
    key: fs.readFileSync(`./files/certs/key.pem`),
    url: 'https://preprod.signicat.com/doc/bolink.no/sds/'
    //url: 'https://id.signicat.com/ws/documentservice-v3?wsdl'
  };
  fs.createReadStream('./files/Example_pdf_file.pdf').pipe(
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
      'Bond007'
    )
  );
});

let artifactArgs = {
  service: 'bolink.no', password: 'Bond007',
  'request-id': "af834hf34gh8734tgf83gf"
};

docfile.then(refSds => {
  console.log(refSds, 'file successfully uploaded');
  req = require('request-promise');
  //args.request.document.attributes['ref-sds-id'] = refSds;
  soap.createClient(url, options, function (err, client) {
    client.createRequest(args, function (err, result) {
      if (err)
        debugger;
      else {
        console.log(result);
        let url = `https://preprod.signicat.com/std/docaction/bolink.no?request_id=${result['request-id'][0]}&task_id=${taskId}`;
        console.log(url);
      }
    });

  });
}).catch(err => {
  debugger;
});


/** ***/


/*** **/

/***** upload files to sds ***/
// let fil = fs.readFileSync('./files/contract.pdf');
//
// let ptions = {
//   uri: `https://preprod.signicat.com/doc/bolink.no/sds`,
//   method: 'POST',
//   resolveWithFullResponse: true,
//   headers: {
//     'Authorization': "Basic Ym9saW5rLm5vOkJvbmQwMDc=",
//     'Content-Type': "text/plain", // 'application/pdf',
//     'Expect': '100-continue',
//   },
//   body: "2312123"//fil.toString()
// };
//
// reqst(ptions)
//   .then(result => {
//     console.log(result.body,' ' , '!!');
//   })
//   .catch(err => {
//     debugger;
//   });

/***** *****/

let phph = {
  uri: `https://preprod.signicat.com/ws/documentservice-v2`,
  method: 'POST',
  resolveWithFullResponse: true,
  headers: {
    'Accept': "text/html,application/xhtml+xml,application/xml,text/xml;q=0.9,*/*;q=0.8",
    'Accept-Charset': 'utf-8'
  },
  body: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="https://id.signicat.com/definitions/wsdl/Document-v2">
<soapenv:Header/>
  <soapenv:Body>
    <tns:create-request-request>
    <tns:service>demo</tns:service>
    <tns:password>Bond007</tns:password>
    <tns:request>
       <tns:document xsi:type="tns:sds-document" ref-sds-id="191220161qh38mav5z6israr7jyzln9suqawphto6kcem69hr0uh2jmb1h" id="SIGNICAT_000602" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
           <tns:external-reference>SIGNICAT_000602</tns:external-reference>
           <tns:description>Lending agreement</tns:description>
       </tns:document>
       <tns:task id="task01017" >
           <tns:document-action send-result-to-archive="false" optional="false" type="sign">
               <tns:document-ref>SIGNICAT_000602</tns:document-ref>
           </tns:document-action>
           <tns:authentication artifact="true"/>
           <tns:signature>
               <tns:method>telia-sign</tns:method>
           </tns:signature>
           <tns:notification type="EMAIL" notification-id="taskNotification">
              <tns:recipient>customer@signicat.com</tns:recipient>
              <tns:sender>noreply@signicat.com</tns:sender>
              <tns:header>Signature request</tns:header>
              <tns:message>Sign here please: </tns:message>
           </tns:notification>
       </tns:task>
        </tns:request>
     </tns:create-request-request>
  </soapenv:Body>
</soapenv:Envelope>`
};

// reqst(phph)
//   .then(result => {
//     debugger;
//   })
//   .catch(err => {
//     debugger;
//   });

