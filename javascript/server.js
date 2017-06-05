var express = require('express');
var app = express();

var schedule = require('node-schedule');
var accountSid = 'AC956c63785ee39b3f5598ea8999b4b088'; // Your Account SID from www.twilio.com/console
var authToken = '133bf3c4ba8daa85b596b93d35fe5727'; // Your Auth Token from www.twilio.com/console


var twilio = require('twilio');
var client = new twilio(accountSid, authToken);


app.get('/', function(req, res) {
     var j = schedule.scheduleJob('0 12 0 * * *', function() {
          console.log("this is what was sent" + message + "and this is who it was sent to: " + destination);


          var destination = '+14805289474';
          var message = "scheduled test!";
          client.messages.create({
               body: message,
               to: destination, //  Text this number
               from: '+14803729323' // From a valid Twilio number
          })

          var h = schedule.scheduleJob('15 47 23 * * *', function() {




               // var destination = '+14803109306';
               var message = "this is yet another test !";
               client.messages.create({
                    body: message,
                    to: destination, //  Text this number
                    from: '+14803729323' // From a valid Twilio number
               })
          });
     })
});


var server = app.listen(8081, function() {
          var host = server.address().address
          var port = server.address().port

          console.log("Example app listening at http://%s:%s", host, port)
     })

