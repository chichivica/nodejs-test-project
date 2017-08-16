/**
 * Created by Ivan Talalaev on 1/31/2017.
 */

_ = require('lodash');


let before = {
  "_id": "5889e1e7555ce11f64b0ec38",
  "licenseNo": 520,
  "updatedAt": "2017-01-31T12:42:33.847Z",
  "createdAt": "2017-01-26T11:47:51.188Z",
  "product": "587f4cb550d73016d0a93f51",
  "seasonEnd": "2017-10-16T21:00:00.000Z",
  "seasonStart": "2017-01-15T21:00:00.000Z",
  "productType": 1,
  "__v": 64,
  "soldPerSeason": 0,
  "hasLicenseLimitPerSeason": true,
  "limitPerSeason": 35,
  "hasLicenseLimitPerDay": true,
  "hasZoneLimitPerDay": false,
  "limitPerDay": 52,
  "multiZone": false,
  "validZones": [1, 2, 3],
  "availability": {
    "daysAheadCount": 5,
    "dateRanges": [],
    "separateDates": ["2017-03-16T12:00:00.000Z", "2017-03-23T12:00:00.000Z", "2017-03-25T12:00:00.000Z", "2017-03-19T12:00:00.000Z", "2017-03-11T12:00:00.000Z", "2017-03-02T12:00:00.000Z", "2017-03-14T12:00:00.000Z", "2017-04-14T12:00:00.000Z", "2017-04-27T12:00:00.000Z", "2017-04-18T12:00:00.000Z", "2017-05-13T12:00:00.000Z", "2017-05-18T12:00:00.000Z", "2017-03-17T09:00:00.000Z", "2017-03-18T09:00:00.000Z", "2017-02-15T06:00:00.000Z", "2017-02-09T06:00:00.000Z", "2017-02-17T06:00:00.000Z", "2017-02-11T06:00:00.000Z", "2017-02-19T06:00:00.000Z", "2017-02-07T06:00:00.000Z", "2017-02-13T06:00:00.000Z", "2017-02-21T06:00:00.000Z", "2017-02-23T06:00:00.000Z", "2017-02-25T06:00:00.000Z", "2017-02-27T06:00:00.000Z", "2017-02-01T06:00:00.000Z", "2017-02-03T06:00:00.000Z", "2017-02-05T06:00:00.000Z", "2017-01-18T00:00:00.000Z", "2017-01-19T00:00:00.000Z"],
    "hasBlockedRanges": false,
    "weekDays": [0, 1, 2, 3, 4, 5, 6]
  },
  "startDayWeek": 0,
  "durationSeason": false,
  "durationWeek": false,
  "durationHours": true,
  "duration": 1,
  "description": "",
  "active": false,
  "isCustomSeason": false,
  "timeEnd": 36000000,
  "timeStart": 82800000,
  "priceVariations": [{
    "endDate": "2017-10-14T23:59:59.999Z",
    "startDate": "2017-01-17T00:00:00.000Z",
    "_id": "5890863333c1cf0c74637d96",
    "title": "Standard pris",
    "isDefault": true,
    "discounts": [{
      "index": 0,
      "_id": "5890863333c1cf0c74637d99",
      "isCustom": false,
      "name": "pensioner price",
      "price": 20500
    }, {
      "index": 1,
      "_id": "5890863333c1cf0c74637d98",
      "isCustom": false,
      "name": "with dog",
      "price": 30000
    }, {
      "index": 2,
      "_id": "5890863333c1cf0c74637d97",
      "isCustom": false,
      "name": "local resident price",
      "price": 56700
    }
    ],
    "price": 12300
  }, {
    "endDate": "2017-02-08T21:00:00.000Z",
    "startDate": "2017-01-31T21:00:00.000Z",
    "_id": "5890863333c1cf0c74637d92",
    "title": "Variation 2",
    "isDefault": false,
    "discounts": [{
      "index": 0,
      "_id": "5890863333c1cf0c74637d95",
      "isCustom": false,
      "name": "pensioner price",
      "price": 20100
    }, {
      "index": 1,
      "_id": "5890863333c1cf0c74637d94",
      "isCustom": false,
      "name": "with dog",
      "price": 30600
    }, {
      "index": 2,
      "_id": "5890863333c1cf0c74637d93",
      "isCustom": false,
      "name": "local resident price",
      "price": 78900
    }
    ],
    "price": 25000
  }
  ],
  "discounts": [{
    "index": 0,
    "_id": "5890863333c1cf0c74637d91",
    "isCustom": false,
    "name": "pensioner price"
  }, {
    "index": 1,
    "_id": "5890863333c1cf0c74637d90",
    "isCustom": false,
    "name": "with dog"
  }, {
    "index": 2,
    "_id": "5890863333c1cf0c74637d8f",
    "isCustom": false,
    "name": "local resident price"
  }
  ],
  "deposit": {
    "isRequired": false,
    "value": 0
  },
  "allowPosPayment": true,
  "allowWebPayment": true,
  "allowSmsPayment": true,
  "price": 12300,
  "name": "night fishing license",
  "deleted": false
};
let after = {
  "_id": "5889e1e7555ce11f64b0ec38",
  "licenseNo": 520,
  "updatedAt": "2017-01-31T12:42:33.847Z",
  "createdAt": "2017-01-26T11:47:51.188Z",
  "product": "587f4cb550d73016d0a93f51",
  "seasonEnd": "2017-10-16T21:00:00.000Z",
  "seasonStart": "2017-01-15T21:00:00.000Z",
  "productType": 1,
  "__v": 64,
  "soldPerSeason": 0,
  "hasLicenseLimitPerSeason": true,
  "limitPerSeason": 35,
  "hasLicenseLimitPerDay": true,
  "hasZoneLimitPerDay": false,
  "limitPerDay": 52,
  "multiZone": false,
  "validZones": [1, 2, 3],
  "availability": {
    "weekDays": [0, 1, 2, 3, 5, 6],
    "hasBlockedRanges": false,
    "separateDates": ["2017-03-16T12:00:00.000Z", "2017-03-23T12:00:00.000Z", "2017-03-25T12:00:00.000Z", "2017-03-19T12:00:00.000Z", "2017-03-11T12:00:00.000Z", "2017-03-02T12:00:00.000Z", "2017-03-14T12:00:00.000Z", "2017-04-14T12:00:00.000Z", "2017-04-27T12:00:00.000Z", "2017-04-18T12:00:00.000Z", "2017-05-13T12:00:00.000Z", "2017-05-18T12:00:00.000Z", "2017-03-17T09:00:00.000Z", "2017-03-18T09:00:00.000Z", "2017-02-15T06:00:00.000Z", "2017-02-09T06:00:00.000Z", "2017-02-17T06:00:00.000Z", "2017-02-11T06:00:00.000Z", "2017-02-19T06:00:00.000Z", "2017-02-07T06:00:00.000Z", "2017-02-13T06:00:00.000Z", "2017-02-21T06:00:00.000Z", "2017-02-23T06:00:00.000Z", "2017-02-25T06:00:00.000Z", "2017-02-27T06:00:00.000Z", "2017-02-01T06:00:00.000Z", "2017-02-03T06:00:00.000Z", "2017-02-05T06:00:00.000Z", "2017-01-18T00:00:00.000Z", "2017-01-19T00:00:00.000Z"],
    "dateRanges": [],
    "daysAheadCount": 5
  },
  "startDayWeek": 0,
  "durationSeason": false,
  "durationWeek": false,
  "durationHours": true,
  "duration": 1,
  "description": "",
  "active": false,
  "isCustomSeason": false,
  "timeEnd": 36000000,
  "timeStart": 82800000,
  "priceVariations": [{
    "startDate": "2017-01-17T00:00:00.000Z",
    "endDate": "2017-10-14T23:59:59.999Z",
    "_id": "58908a185b5ce31d78a4448e",
    "title": "Standard pris",
    "isDefault": true,
    "discounts": [{
      "index": 0,
      "_id": "58908a185b5ce31d78a44491",
      "isCustom": false,
      "name": "pensioner price",
      "price": 20500
    }, {
      "index": 1,
      "_id": "58908a185b5ce31d78a44490",
      "isCustom": false,
      "name": "with dog",
      "price": 30000
    }, {
      "index": 2,
      "_id": "58908a185b5ce31d78a4448f",
      "isCustom": false,
      "name": "local resident price",
      "price": 56700
    }
    ],
    "price": 12300
  }, {
    "startDate": "2017-01-31T21:00:00.000Z",
    "endDate": "2017-02-08T21:00:00.000Z",
    "_id": "58908a185b5ce31d78a4448a",
    "title": "Variation 2",
    "isDefault": false,
    "discounts": [{
      "index": 0,
      "_id": "58908a185b5ce31d78a4448d",
      "isCustom": false,
      "name": "pensioner price",
      "price": 20100
    }, {
      "index": 1,
      "_id": "58908a185b5ce31d78a4448c",
      "isCustom": false,
      "name": "with dog",
      "price": 30600
    }, {
      "index": 2,
      "_id": "58908a185b5ce31d78a4448b",
      "isCustom": false,
      "name": "local resident price",
      "price": 78900
    }
    ],
    "price": 25000
  }
  ],
  "discounts": [{
    "index": 0,
    "_id": "58908a185b5ce31d78a44489",
    "isCustom": false,
    "name": "pensioner price"
  }, {
    "index": 1,
    "_id": "58908a185b5ce31d78a44488",
    "isCustom": false,
    "name": "with dog"
  }, {
    "index": 2,
    "_id": "58908a185b5ce31d78a44487",
    "isCustom": false,
    "name": "local resident price"
  }
  ],
  "deposit": {
    "value": 0,
    "isRequired": false
  },
  "allowPosPayment": true,
  "allowWebPayment": true,
  "allowSmsPayment": true,
  "price": 12300,
  "name": "night fishing license",
  "deleted": false
};

function idOmitter(objValue, othValue) {

  debugger;
  return true;
}

_.extendWith(before, after);
// //let differnce = _.difference([before], [after], _.isEqual);
// let difference = _.reduce(before, function (result, value, key) {
//   if (key == "_id")
//     return result;
//   if (!_.isEqualWith(value, after[key], idOmitter)) {
//     result.push(key);
//   }
//   return result;
// }, []);

console.log(before);
process.exit(0);