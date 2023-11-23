function runRealRecurringReminders() {
  var RRRSheet = SpreadsheetApp.getActiveSheet();
  var calendarID = RRRSheet.getRange("B1").getValue();
  var RRRCal = CalendarApp.getCalendarById(calendarID);

  var eventList = RRRSheet.getRange("A3:Z50").getValues();
  
  for (i=0; i<eventList.length; i++) {
    var event = eventList[i];
    var rowVal = (i+3).toString()

    // if the event is missing any critical information, skip it
    if (event[1] != null && event[1] != "") {
      Logger.log('Event is already created with ID: ' + event[1]);
      continue;
    }

    // if the event is missing any critical information, skip it
    if (event[0] == null || event[0] == "" || event[3] == null || event[3] == "") {
      Logger.log('Missing event title or date for column: ' + rowVal);
      continue;
    }

    var title = event[0];
    var description = event[2];
    var startDate = event[3];

    // add all recurring events based on the number of dates in the row
    var recurringDates = CalendarApp.newRecurrence().addDate(startDate)
    for (j=4;;j++) {
      // break out when we run out of dates to add
      if (event[j] == null || event[j] == "") {
        break;
      }
      recurringDates = recurringDates.addDate(event[j])
    }

    // create calendar event
    var newCalEventSeries = RRRCal.createEventSeries(
      title, 
      startDate, 
      startDate,
      recurringDates,
      { description: description });
    
    // mark event as created in the sheet to avoid re-creating event series,
    // if it is intended to create the series again, manually delete this ID
    // value from the sheet
    Logger.log('Created calandar event series with ID: ' + newCalEventSeries.getId());
    RRRSheet.getRange("B"+rowVal).setValue(newCalEventSeries.getId());
  }
}