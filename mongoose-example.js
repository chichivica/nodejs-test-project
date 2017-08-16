/**
 * Created by Ivan Talalaev on 3/13/2017.
 */


let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-test');


let db = mongoose.connection;


let LicenseSchema = mongoose.Schema({
  startFrom: Date
}, {timestamps: true});


let LicenseModel = mongoose.model('License', LicenseSchema, 'licenses');


LicenseModel.create({
  startFrom: new Date()
})
  .then(result => {
    console.log(result.id);
  });
