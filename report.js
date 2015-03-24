// Public components to be imported by NodeJS
module.exports = {
  // Prototype "class" for a report
  // Usage:
  // var report = require('./report')
  // var myReport = new report.report('abcd1234')
   function report(id) {
    this.id = id;
    this.type = 'jerk_report';
    this.time = '1970-01-00T00:00:00Z';
    this.expiresOn = '2015-01-00T00:00:00Z';
    this.expired = '';
    this.location = '';
    this.reportee_id = '';
    this.offense = 'general';
    this.suspect = '';
    this.severity = 0;
    this.description = '';
    this.notes = '';
  }
}
