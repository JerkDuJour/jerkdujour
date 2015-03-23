var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Placeholder welcome message
app.get('/', function(request, response) {
  var result = 'Welcome to Jerk du Jour'
  response.send(result);
});

// Sample report JSON data
app.get('/abcd1234/', function(request, response) {
  var jsonObj = {
    'id': 'abcd1234',
    'type': 'jerk_report',
    'utc_time': '2014-11-05T13:15:30Z',
    'reportee_id': 'xray744',
    'offense': 'double_parked',
    'notes': 'Black BMW i3'
  };

  // Return result as a string for now
  result = JSON.stringify(jsonObj);
  response.send(result);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
