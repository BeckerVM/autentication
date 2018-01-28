const SHA256 = require('crypto-js/sha256');

var message = 'I am user number 3';
var hash = SHA256(message).toString();


console.log('Message:' + message);
console.log('Hash:' + hash);