

var ipAddress = "250.45.29.64"

var newArr = function(ipAddress){
  ipaddress.split('.');}

//use Number function to convert each new string in newArr to number.
//check to see if each new number in array is between 0 and 255.
//if true, return true and console.log message good

//Andrew again from Slack
var isIpAdress = function(str) {

var arrOfNum = str.split('.');
if (arrOfNum[0] >= 0 && arrOfNum[0] <= 255 &&
    arrOfNum[1] >= 0 && arrOfNum[1] <= 255 &&
    arrOfNum[2] >= 0 && arrOfNum[2] <= 255 &&
    arrOfNum[3] >= 0 && arrOfNum[3] <= 255) {
      return true;
    } else {
      return false;
    }

  //Dan solution
  function isIPv4(str) {
  var sections = str.split(".");
  if (sections.length === 4) {
    return sections.every(function(sections) {
      return parseInt(sections) >= 0 && parseInt(sections) <= 255;
    });
  };
}

module.exports = isIPv4;
//"every" is a method for arrays that inspects each element
