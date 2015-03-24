// App Setup
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

// Jerk du Jour specific resources
var report = require('./report');

// Sample reports
var reports = {};
var report1_id = 'abcd1234'
var report2_id = 'efgh5678'
var report3_id = 'ijkl9123'
reports[report1_id] = new report.report(report1_id)
reports[report2_id] = new report.report(report2_id)
reports[report3_id] = new report.report(report3_id)

// RESTful API
app.get('/', function(req, res) {
    res.send('Welcome to Jerk du Jour API!');
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
