// App Setup
var express = require('express');
var router = express.Router();
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
router.get('/', function(req, res) {
  res.send(welcomeMessage);
});
router.get('/reports', function(req, res) {
  reports = generateReports(100);
  res.send(reports);
});
router.get('/reports/:id', function(req, res) {
  var id = req.params.id
  if(id in reports){
      report = reports[id]
      res.send(report)
  }
  else {
      res.send('A report with ID ' + id + ' does not exist.')
  }
});

module.exports = router;
