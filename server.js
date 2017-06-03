var express = require('express');
var app = express();

var schedule = require('node-schedule');
 
app.get('/', function (req, res) {
   var j = schedule.scheduleJob('42 * * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
  });
	

   var h = schedule.scheduleJob('00 * * * * *', function(){
  console.log('reset');
  });
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
