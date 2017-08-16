/**
 * Created by pc on 12/1/2016.
 */
var parser = require('cron-parser');

var events = require ('events');

try{
    var interval = parser.parseExpression('*/2 * * * * *');
    var date = new Date(interval.next().toDate().toString());
    var date2 = new Date(interval.next().toDate().toString());

    console.log(date2);
    console.log(date);
    console.log((date2 - date));
}
catch (err) {
    console.log(err);
}

eventEmitter = new events.EventEmitter();

function processEvent (eventName, eventObject){
    console.log(eventObject);
    console.log(`${eventName} ${eventObject}`);
}

eventEmitter.on('click', processEvent);
eventEmitter.emit('click', 'click', {some : 1});
