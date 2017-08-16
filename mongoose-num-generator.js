let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejstest',
    {
        socketOptions: {
            keepAlive: 300000, connectTimeoutMS: 3000000
        }
    });
Schema = mongoose.Schema;


let db = mongoose.connection;

let ObjectId = Schema.Types.ObjectId;


const identifierId = '507f191e810c19729de860ea';

let IdentityGeneratorSchema = new Schema({
    customerNo: {type: Number, default: 1000},
    purchaseNo: {type: Number, default: 1000},
    orderProcessNo: {type: Number, default: 1000},
    orderProcessRefNo: {type: Number, default: 1000}
});

let IdentityGenerator = mongoose.model('IdentityGenerator', IdentityGeneratorSchema);


function get_next(counterType) {
    let inc = {};
    inc[counterType] = 1;

    return IdentityGenerator
        .findOneAndUpdate({
            _id: identifierId
        }, {
            $inc: inc,
        }, {
            new: true,
            upsert: true
        })
}

get_next("customerNo", 12)
    .then(result => {
        debugger;
        process.exit(0);
    })
    .catch(err => {
        debugger;
        process.exit(0);
    });
