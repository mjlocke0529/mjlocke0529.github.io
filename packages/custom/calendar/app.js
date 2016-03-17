'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Calendar = new Module('calendar');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Calendar.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Calendar.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Calendar.menus.add({
    title: 'calendar',
    link: 'calendar',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Calendar.aggregateAsset('css', 'calendar.css');
  Calendar.aggregateAsset('css', 'fullcalendar.min.css');
  Calendar.aggregateAsset('css', 'jquery.qtip.min.css');
  Calendar.aggregateAsset('js', 'jquery.qtip.min.js');
 /**
  Calendar.aggregateAsset('css', 'fullcalendar.min.css');
  Calendar.aggregateAsset('css', 'fullcalendar.print.css');
  Calendar.aggregateAsset('css', 'scheduler.min.css');

  Calendar.aggregateAsset('js', 'moment.js');
  Calendar.aggregateAsset('js', 'calendar.js');

  Calendar.aggregateAsset('js', 'gcal.js');

    Calendar.aggregateAsset('js', 'fullcalendar.min.js');
  
  Calendar.aggregateAsset('js', 'scheduler.min.js');
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Calendar.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Calendar.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Calendar.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Calendar;
});
