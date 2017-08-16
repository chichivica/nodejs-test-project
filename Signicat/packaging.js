const url = "https://preprod.signicat.com/ws/packagingservice-v4?wsdl";
const req = require('request-promise');
const soap = require('soap');
const service = "bolink.no";
let docId = Math.floor(Math.random() * (1000000 - 10 + 1)) + 10;


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


let obj_option = {
    service: `${service}`,
    password: 'Bond007',
    version: "4",
    'packaging-method': "pades",
    'validation-policy':  "ltvsdo-validator",
    'sdo':
        [{
            'sds-document-id': {
                "id": "14082017592vjljhvff9oorntiswuc9wbgljes4aw0mhkxg73u9r64zujd"
            }
            // 'sds-document-id': "030820176302svx46ulzg82arfp59qzp3u82t1ch2kwq8mz666qcf9ws9f"
            // document: {
            //
            //     attributes: {
            //         'xsi:type': "tns:sds-document",
            //
            //         id: docId.toString(),
            //         //"mime-type": "application/pdf", //"",
            //         'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance'
            //     },
            //     description: 'realty gamak',
            //     'external-reference': docId.toString()
            // }
        }]
};

soap.createClient(url, options, function (err, client) {
    client['create-package'](obj_option, function (err, result) {
        if (err)
            debugger;
        else {
            debugger;
        }
    });

});