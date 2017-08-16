/**
 * Created by pc on 1/10/2017.
 */

let moment_tz = require('moment-timezone');
let toDay = moment_tz();
let start = new Date(2017, 2, 26, 9, 0, 0);

console.log(moment_tz(start).format(), '-->', moment_tz(start).toDate().toJSON());

let startDate = new Date();
let end = moment_tz(startDate).add(2, 'd').endOf('day');

//set the beginning/end of the norwegian day
let st = moment_tz.tz(moment_tz(startDate).format('YYYY-MM-DD'), 'Europe/Oslo').toDate();
let finish = moment_tz.tz(end.format('YYYY-MM-DDTHH:mm:ss'), 'Europe/Oslo').toDate()

console.log({
  from: st,
  to: finish
});

//Europe/Moscow
console.log(toDay.format('YYYY.MM.DD'));
console.log(moment_tz(new Date()).tz('Europe/Oslo').toDate().toString(), '-**');
console.log(moment_tz.tz(moment_tz().format('YYYY-MM-DD'), 'Europe/Oslo').toDate().toString(), '-**?');
console.log(moment_tz.tz(new Date(), 'Europe/Oslo').toDate().toString(), '-**');


console.log(moment_tz('2017-03-27T09:00:00+02:00').tz('Europe/Oslo').toDate().toJSON());
console.log(moment_tz('2017-03-13T17:15:43+01:00').tz('Europe/Oslo').format(), moment_tz('2017-03-13T17:15:43+03:00').tz('Europe/Oslo').isDST());
console.log(moment_tz('2017-03-27T05:00:00+02:00').tz('Europe/Oslo').format(), moment_tz('2017-03-27T05:00:00+02:00').tz('Europe/Oslo').tz('Europe/Moscow').format());
console.log("---------------------");
let mom = moment_tz(new Date());
console.log(mom.utcOffset('+0100').format('DD-MM-YYYY HH:mm'));
console.log(moment_tz(new Date()).format('DD-MM-YYYY HH:mm'));
console.log(moment_tz(new Date()).format('Z'));
console.log(moment_tz(new Date()).tz("Europe/Oslo").format('DD-MM-YYYY HH:mm Z'));
//tz('Europe/Oslo')
console.log(moment_tz("2017-03-13T15:15:43+01:00").format(), 'vot tak vot');
console.log(moment_tz('2017-03-13T17:15:43+03:00').tz('Europe/Oslo').format());

console.log(moment_tz('2017-01-10T12:44:05.653Z').toString());
console.log(moment_tz('2017-01-10T12:44:05.653Z').utc().toString());
let oslo = moment_tz('2017-01-10T12:44:05.653Z').utc();
console.log(oslo.toString(), "<-- utc");
console.log(oslo.tz("Europe/Oslo").toString(), "<-- oslo");
console.log(oslo.toString(), "<-- changed to oslo");
console.log(oslo.tz("UTC").toString(), "<-- utc");


let moment = require('moment');
let from = moment(new Date()),
  to = moment(new Date());

console.log("----------------------");
to.add(15, 'd');

console.log(from.format());
console.log(to.format());


process.exit(0);

