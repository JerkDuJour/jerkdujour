// Public components to be imported by NodeJS
function Report(id) {
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

Report.prototype.isExpired = function() {
  return !(expired == '');
}

module.exports = Report;
