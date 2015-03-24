var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

// Sample reports
var reports = {};
var report1 = {
    'id': 'abcd1234',
    'type': 'jerk_report',
    'utc_time': '2014-11-05T13:15:30Z',
    'reportee_id': 'xray744',
    'offense': 'double_parked',
    'notes': 'Black BMW i3'
  };
 var report2 = {
    'id': 'efgh5678',
    'type': 'jerk_report',
    'utc_time': '2014-12-16T22:08:35Z',
    'reportee_id': 'xray802',
    'offense': 'talking_at_urinal',
    'notes': ''
  };
reports['abcd1234'] = report1
reports['efgh5678'] = report2

// RESTful API
app.get('/', function(req, res) {
    res.send('Welcome to Jerk du Jour API!');
});
app.get('/reports', function(req, res) {
    res.send(reports);
});
app.get('/reports/:id', function(req, res) {
    if(id:req.params.id in reports){
        report = reports[id:req.params.id]
        res.send(report)
    }
    else {
        res.send('A report with ID ' + id:req.params.id + ' does not exist.')
    }
});

//
// START THE SERVER
//
app.listen(app.get('port'), function() {
  console.log("Node app is listening on port " + app.get('port'));
});
