let _ = require('lodash');

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

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

const kittyType = [
    "sign",
    "view"
];

let KittySchema = new Schema({
    name: {type: String, required: false},
    birthDate: {type: Date, required: false},
});
KittySchema.virtual('doggies', {
    ref: 'Doggy',
    localField: '_id',
    foreignField: 'kitties',
    justOne: true
});


let Kitten = mongoose.model('Kitten', KittySchema);

let DoggySchema = new Schema({
    name: {type: String, required: false},
    counter: {type: Number, required: false},
    kitties: [{type: ObjectId, ref: 'Kitten'}]
});

let Doggy = mongoose.model('Doggy', DoggySchema);

// Kitten.create({
//     name: "kitter" + Math.floor(Math.random() * 1000),
//     birthDate: new Date()
// });

// Doggy.create({
//     name: "doggy" + Math.floor(Math.random() * 1000),
//     counter: Math.floor(Math.random() * 1000)
// })
//     .then(() => process.exit(0));

Doggy.findOneAndUpdate({
    _id: "599404e0fdce4231872378d5"
}, {
    $inc: {
        counter: 123
    }
}, {
    new: true, upsert: true
})
    .then((a,b, c) => {
        debugger;
        process.exit(0)
    })

// .then((result, what, ever) => {
//     debugger;
// });

// Kitten.create({
//     name: "kitter" + Math.random(),
//     birthDate: new Date()
// })
//     .then(k1 => {
//         Kitten.create({
//             name: "kitter" + Math.random(),
//             birthDate: new Date()
//         }).then(k2 => {
//             Doggy.create({
//                 name: "doggy" + Math.random(),
//                 counter: Math.random(),
//                 kitties: [k1, k2]
//             })
//                 .then(doggy => {
//                     debugger;
//                 })
//         })
//     });

// Kitten
//     .findById("598c7b0102fc210281f679c0")
//     .populate("doggies")
//     .then(result => {
//         debugger
//     });
