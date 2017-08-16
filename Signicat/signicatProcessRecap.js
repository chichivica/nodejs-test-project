const fs = require('fs');
const request = require('request');
const service = "bolink.no";
const url = 'https://preprod.signicat.com/ws/documentservice-v3?wsdl';
const req = require('request-promise');
const soap = require('soap');

/**
 * @see https://support.signicat.com/display/S2/Demo+service
 */
const method = "nbid-sign";
const options = {
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


/***** upload files to sds ***/
let taskId = Math.floor(Math.random() * (1000000 - 10 + 1)) + 10;
let docId = Math.floor(Math.random() * (1000000 - 10 + 1)) + 10;

let args = {
    service: `${service}`,
    password: 'Bond007',
    request: {
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
                method: method
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
                    method: method
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

let docfile = new Promise(function (resolve, reject) {
    let requestOptions = {
        // cert: fs.readFileSync(`./files/certs/crt.pem`),
        // key: fs.readFileSync(`./files/certs/key.pem`),
        // url: 'https://preprod.signicat.com/doc/bolink.no/sds/'
        url: `https://preprod.signicat.com/doc/${service}/sds`
    };
    fs.createReadStream('../files/contract.pdf')
        .pipe(
            request.post(
                requestOptions,
                function (error, response, body) {
                    if (!error && response.statusCode === 201) {
                        resolve(body);
                        console.log(body);
                    }
                    else {
                        reject(error);
                        console.log(error);
                    }
                }
            ).auth(
                `${service}`,
                'Bond007'
            )
        );
});


docfile.then(refSds => {
    console.log(refSds, 'file successfully uploaded');
    args.request.document.attributes['ref-sds-id'] = refSds;

    soap.createClient(url, options, function (err, client) {
        client.createRequest(args, function (err, result) {
            if (err)
                debugger;
            else {
                console.log(result);
                let url = `https://preprod.signicat.com/std/docaction/${service}?request_id=${result['request-id'][0]}&task_id=${taskId}`;
                console.log(url);
            }
        });

    });
}).catch(err => {
    debugger;
});

/***** *****/