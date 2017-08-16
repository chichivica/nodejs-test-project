/**
 * Created by chichivica on 5/12/17.
 */


let _ = require('lodash'),
  MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017/jaktfiske';


function fetchExternalMultipurchases(db) {
  return db.collection('multupurchases')
    .find({
      paymentChannel: "external"
    })
    .toArray()
}
function getExternalBlockedUsers(db, externalMultipurchases) {
  let userLicensesNumbers =
    _.chain(externalMultipurchases)
      .flatMap(mp => mp.items)
      .flatMap(item => item.users)
      .map(user => user.licenseNo)
      .value();
  return db.collection('blockedusers')
    .find({
      licenseNo: {
        $in: userLicensesNumbers
      },
      isBlocked: true
    })
    .toArray()
}

function releaseBlockedWithLicenses(db, blockedUsers) {
  return new Promise((resolve, reject) => {
    let bulk = db.collection('blockedusers').initializeUnorderedBulkOp();
    blockedUsers.forEach(blockedUser => {
      bulk
        .find({_id: blockedUser._id})
        .update({
          $set: {
            releasedDate: new Date(),
            isBlocked: false
          }
        });

    });
    if (bulk.length > 0) {
      bulk.execute((bulkError, bulkResult) => {
        if (bulkError) {
          reject(bulkError);
          debugger;
        } else {
          resolve(bulkResult.nModified)
        }
      })
    } else {
      resolve(0)
    }
  })
}

function releaseBlockedLicensesOnRiver(db) {
  return db.collection('userlicenses').aggregate({
      $match: {
        'river.id': 2,
        'catchReports.count': {$eq: 0},
        'status': {$eq: 'ACTIVE'}
      }
    },
    {
      $lookup: {
        "from": 'blockedusers',
        "localField": "licenseNo",
        "foreignField": "licenseNo",
        "as": "blocked_users"
      }
    }, {$unwind: '$blocked_users'},
    {$addFields: {blockedUserId: '$blocked_users._id'}},
    {$project: {blockedUserId: 1, _id: 0}}
  ).toArray()
    .then(ids => ids.map(id => id.blockedUserId))
    .then(ids => {
      console.log(_.values(ids));
      return db.collection('blockedusers')
        .updateMany({
          _id: {
            $in: _.values(ids)
          }
        }, {
          $set: {
            releasedDate: new Date(),
            isBlocked: false
          }
        })
    })
}

MongoClient.connect(url, function (err, db) {
  releaseBlockedLicensesOnRiver(db)
    .then(result => {
      console.log(JSON.stringify(result))
    })
});



