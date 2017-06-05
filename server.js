var express = require('express');
var app = express();
var bodyParser = require('body-parser')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var schedule = require('node-schedule');

// Routes

var router = express.Router();

var accountSid = 'AC956c63785ee39b3f5598ea8999b4b088'; // Your Account SID from www.twilio.com/console
var authToken = '133bf3c4ba8daa85b596b93d35fe5727'; // Your Auth Token from www.twilio.com/console


var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

// var mongoose   = require('mongoose');
// mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');

//phone numbers for testing

var Drew = '+14803109306'
var Rob = '+14805289474'


// if chron iformation is left out of the route then it will execute the message every minute on the minute
router.get('/remind/:number/:message', function(req, res) {
     var j = schedule.scheduleJob('0 * * * * *', function() { 
          var destination = '*'+ req.params.number;
          var message = String(req.params.message);
          console.log("this is what was sent " + message + " and this is who it was sent to: " + destination);
         
          client.messages.create({
               body: message,
               to: destination, //  Text this number
               from: '+14803729323' // From a valid Twilio number
          })          
     })
});

//provide phone numberto be sent to message and chron fields
router.get('/remind/:number/:message/:chrS/:chrM/:chrH/:chrD/:chrMo/:chrDoW', function(req, res) {
     var j = schedule.scheduleJob(''+ req.params.chrS + ' '+ //chron second value
     	req.params.chrM + ' '+ //chron minute value
     	req.params.chrH + ' '+ //chron Hour value
     	req.params.chrD + ' '+ //chron Day value
     	req.params.chrMo + ' '+ //chron month value
     	req.params.chrDoW + '', function() { //chron day of week value (doesnt work as of now i believe)
          var destination = '*'+ req.params.number;
          var message = String(req.params.message);
          console.log("this is what was sent " + message + " and this is who it was sent to: " + destination);
         
          client.messages.create({
               body: message,
               to: destination, //  Text this number
               from: '+14803729323' // From a valid Twilio number
          })          
     })
});

app.use('/api', router);


var server = app.listen(port, function(){
	var host = server.address().address
	console.log("RemindMe app api listening at http://%s:%s", host, port)
});


