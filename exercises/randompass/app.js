
//I need to generate random numbers, then random caps, then random lowercase letters,
//and then random symbols.  Then I need to convert numbers into strings and combine
//using .tostring method, and then I need to concat all strings for a password.
//I need to use a for loop also. I could use a for loop to generate an array from the four
//arrays I generate for each type of password element instead of concat.  I could
//concat several strings to make a large string, and then do a for loop to pick off characters.
//It is easier to make a 72 character string: 26 caps, 26 lowercase, 10 digits, 10 symbols.
//I don't need 4 strings to concat.



//function randomPass(digits) {
//  var num = math.floor(math.random() * 100 + 1)
//  return num;
//  var numStr = num.tostring;

//  var caps = str.toUpperCase;
//  var low =
//}

//randomPass(6);

//    var length = 8,
  //      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&^%$@#!",
    //    retVal = "";
  //  for (var i = 0, 8 = charset.length; i < length; ++i) {
    //    retVal += charset.charAt(Math.floor(Math.random() * 8));
    //}
//    return retVal;
//}

//generatePassword(8);

//function makePasswd() {
//  var passwd = '';
//  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789)(*%^&$#@?';
//  for (i=1;i<8;i++) {
//    var c = Math.floor(Math.random()*chars.length + 1);
//    passwd += chars.charAt(c)
//  }
//  return passwd;
//}
//makePasswd(8)

//Neil's solution:
function passGen(num) {
  var password = "";
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";

  for (i = 0; i < num; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
 }
  console.log(password);
}

passGen(8);
