// App Setup
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
var welcomeMessage = 'Welcome to Jerk du Jour API!';

// Utilities
var Guid = require('guid');

// Jerk du Jour specific resources
var Report = require('./report');

// Sample reports
var reports = {};

function generateReports(n){
  var reports = {};
  for(i = 0; i < n; i++){
    var guid = Guid.create();
    reports[guid] = new Report(guid);
  }

  return reports;
}

// RESTful API
app.get('/', function(req, res) {
    reports = generateReports(100);
    var response = welcomeMessage;
    for(var r in reports){
      response += '\n' + r + '\n';
    }
    res.send(response);
});
app.get('/reports', function(req, res) {
    res.send(reports);
});
app.get('/reports/:id', function(req, res) {
    var id = req.params.id
    if(id in reports){
        report = reports[id]
        res.send(report)
    }
    else {
        res.send('A report with ID ' + id + ' does not exist.')
    }
});

//
// START THE SERVER
//
app.listen(app.get('port'), function() {
  console.log("Node app is listening on port " + app.get('port'));
});
