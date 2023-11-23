# Run Recurring Reminders


## Table of contents
* [General info](#general-info)
* [Setting up](#setting-up)
* [Additional usage](#additional-usage)
* [Sources](#sources)


## General info
This script is provided as a simple way to set up a custom recurring event in Google Calendar using Google Sheets. This allows you to specify exact dates that an event will occur without being limited to the recurrence schedules which Google provides in their UI, and is helpful for cases such as:

- Reminders of when natural phenomen may occur, such as the full moon
- Reminders of events, such as scheduling your kids' baseball games
- Reminders of dates such as stock market holidays or company earnings reports
- Reminders of general maintenance and cleaning while you build your habits

Scheduling multiple dates automatically gives the benefits of being able to cancel all (or all remaining) events through Google Calendar without manually navigating to each instance of the event. This also keeps a neat tracker of all such recurring events in a Google Sheet so you can keep track of all the important things you scheduled.

## Setting up
This script is a Google App Script, and requires a Google account to use.
Specifically, you will want a minimum level of familiarity with Google Calendar, Google Sheets, and Google Drive.

#### Get the Calendar ID you want to add events to, either from an existing or new Calendar.
1. Navigate to Google Calendar
2. Choose or create a new calendar under "My calendars", and navigate to the settings through the additional options
3. Find the Calendar ID under the main calendar settings

#### Set up a Google Sheet with your data
1. Upload the example file, ```example_sheet.csv``` to Google Drive
2. Open the newly uploaded file with Google Sheets. You can delete the CSV file from your drive after that
3. Take the Calendar ID from the previous step, and replace <insert_calendar_id_here> in the sheet("B1")
4. Populate some events and corresponding dates and remove the default events

#### Create and run the Google App Script to generate new calendar events
1. From the Google Sheet, navigate to ``` extensions > Apps Script ``` in the toolbar
2. Copy the script from ```run_recurring_reminders.gs``` and replace the pre-provided "myFunction()" in the new App Script
3. Press the "Run" button and grant permissions for Google to access your accounts
4. If you recieve the "Google hasn’t verified this app" warning, open the "advanced" dropdown and continue with "Go to <project name> (unsafe)"

#### Verify your events
1. Navigate to Google Calendar and you should be able to verify your events

## Additional usage

#### Rerunning
Once you have generated an event, the script will populate the event ID into your Google Sheet to prevent you from re-generating the same event. If you wish to regenerate the same event anyways, such as if you modified and deleted the original event from your calandar, simply remove the event ID from your sheet and re-run the script.

#### Increasing the maximum number of events, or dates per event
Increase the range inside RRRSheet.getRange("A3:<NEW_RANGE_HERE>"). By default, the range is set to "A3:Z50" which will allow you to create up to 48 events that contain up to 23 dates each. 

#### Adding additional information to the event
You can add additional information to the event by modifying the script, particularly the call to RRRCal.createEventSeries(...) and modifying the Google Sheet to provide the additional information you want to populate. Referece the API guides in the "Sources" section below.

## Sources
- [Google Calendar API for App Scripts](https://developers.google.com/apps-script/reference/calendar/calendar)
- [Google Sheets API for App Scripts](https://developers.google.com/apps-script/reference/spreadsheet/range)