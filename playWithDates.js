/**
 * Created by Ivan Talalaev on 2/6/2017.
 */

let moment = require('moment');
function getDayNumber(date) {
  let year = String(date.getFullYear());
  let month = date.getMonth() + 1;
  if (month < 10) month = '0' + month;
  let _date = date.getDate();
  if (_date < 10) _date = '0' + _date;
  return String(year + month + _date);
}

function getDayFromNumber(number) {
  let length = number.length;
  let day = number.substring(length - 2);
  let month = number.substring(length - 4, length - 2);
  let year = number.substring(0, length - 4);
  return new Date(year, month - 1, day)
}

function dayNumberAnotherApproach(date) {
  let diff = moment(date).diff(new Date(0, 0, 1), 'd');
  return diff;
}

function _dayNumberAnotherApproach(dayNumber) {
  return moment(new Date(0, 0, 1)).add(dayNumber, 'd').toDate();
}
// let current = new Date();
//
// console.log(getDayNumber(current));
// let date = getDayFromNumber(getDayNumber(current));
// console.log(date.toString());

let dn = dayNumberAnotherApproach(new Date());
console.log(dn);
console.log(_dayNumberAnotherApproach(dn).toString());
process.exit(0);

