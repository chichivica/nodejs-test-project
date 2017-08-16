/**
 * Created by Ivan Talalaev on 1/26/2017.
 */

let MongoClient = require('mongodb');
//import MongoClient from 'mongodb';
//import * as math from "lib/math";

let mongoose = require('mongoose');
let url = 'mongodb://jaktfiske:33z0e3506f29bZK@localhost/jaktfiske',
  ObjectId = mongoose.Types.ObjectId;


    mongoose.connect(url);
let db = mongoose.connection;

db.once('open', function () {

  db.collection('productlicenses').find({_id: ObjectId('5889e1e7555ce11f64b0ec38')}).toArray((err, data) => {
    debugger;

  })
});




