//
// Base Setup
//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configure app to use bodyParser() - This will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var router = express.Router();

//
// Define Routes
//

// Placeholder welcome message
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Jerk du Jour' });
});

// Sample report JSON data
/*
app.get('/abcd1234', function(request, response) {
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
*/

//
// Register Routes (all routes will be prefixed with /api)
//
app.use('/api', router);

//
// START THE SERVER
//
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
