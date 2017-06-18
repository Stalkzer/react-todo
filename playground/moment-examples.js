var moment = require("moment");

console.log(moment().format());

console.log("=======================");

var now = moment();

console.log("Current timestamp", now.unix());

console.log("=======================");

var timestamp = 1497809140;
var currentMoment = moment.unix(timestamp);
console.log("Current moment", currentMoment.format("MMM, D, YY @ h:mm a"));

console.log("=======================");
// January 3rd, 2016 @ 12:13 AM <- this format

console.log("Formated moment", currentMoment.format("MMMM Qo, YYYY @ hh:mm A"));