var express = require('express');
var app = express();

// RESTful API
app.get('/reports', function(req, res) {
    res.send([{name:'report1'}, {name:'report2'}]);
});
app.get('/reports/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
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
// START THE SERVER
//
app.listen(app.get('port'), function() {
  console.log("Node app is listening on port " + app.get('port'));
});
