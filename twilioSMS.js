


var accountSid = 'AC956c63785ee39b3f5598ea8999b4b088'; // Your Account SID from www.twilio.com/console
var authToken = '133bf3c4ba8daa85b596b93d35fe5727';   // Your Auth Token from www.twilio.com/console


var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
var destination = '+14803109306';
var message = "this is yet another test !";
client.messages.create({
    body: message ,
    to: destination , //  Text this number
    from: '+14803729323' // From a valid Twilio number
})
