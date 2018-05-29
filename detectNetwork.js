// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix = cardNumber.substring(0, 2);
  var fourPrefix = cardNumber.substring(0, 4);
  var threePrefix = cardNumber.substring(0, 3);
  var sixPrefix = cardNumber.substring(0, 6);
  var cardNumLength = cardNumber.length;

  if ((prefix === '38' || prefix === '39') && cardNumLength === 14) {
    return 'Diner\'s Club';
  } else if ((prefix === '34' || prefix === '37') && cardNumLength === 15) {
    return 'American Express';
  } else if ((fourPrefix === '4903' || fourPrefix === '4905' || fourPrefix === '4911' || fourPrefix === '4936' || fourPrefix === '6333' || fourPrefix === '6759' || sixPrefix === '564182' || sixPrefix === '633110'
) && (cardNumLength === 16 || cardNumLength === 18 || cardNumLength === 19)
  ){
    return 'Switch';
  } else if (prefix[0] === '4' && (cardNumLength === 13 || cardNumLength === 16 || cardNumLength === 19)) {
    return 'Visa';
  } else if ((Number(prefix) >= 51 && Number(prefix) <= 55) && cardNumLength === 16) {
    return 'MasterCard';
  } else if ((fourPrefix === '6011' || (Number(threePrefix) >= 644 && Number(threePrefix) <= 649) || prefix === '65') && (cardNumLength === 16 || cardNumLength === 19)) {
    return 'Discover'
  } else if ((fourPrefix === '5018' || fourPrefix === '5020' || fourPrefix === '5038' || fourPrefix === '6304') && (cardNumLength >= 12 && cardNumLength <= 19)) {
    return 'Maestro';
  } else if (
    ((Number(sixPrefix) >= 622126 && Number(sixPrefix) <= 622925) || (Number(threePrefix) >= 624 && Number(threePrefix <= 626)) || (Number(fourPrefix >= 6282 && fourPrefix <= 6288))) && (cardNumLength >= 16 && cardNumLength <= 19)) {
    return 'China UnionPay';
  }
};
