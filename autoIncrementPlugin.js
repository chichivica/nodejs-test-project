/**
 * Created by pc on 12/7/2016.
 */

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment'),
    connection = mongoose.connect('mongodb://localhost/nodejstest');


autoIncrement.initialize(connection);

var bookSchema = new Schema({
    title: String,
    genre: String,
    publishDate: Date
});

bookSchema.plugin(autoIncrement.plugin, { model: 'Book', field: 'shortId' });


var Book = connection.model('Book', bookSchema);

var bk = new Book ({
   title : "23123123",
    genre : "bal bala ",
    publishDate: new Date()
});

bk.save();

console.log('done!');