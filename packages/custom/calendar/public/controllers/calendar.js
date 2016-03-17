(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.calendar', ['ui.calendar'] )
    .controller('CalendarController', CalendarController);

  CalendarController.$inject = ['$scope', 'Global', 'Calendar'];

  function CalendarController($scope, Global, Calendar) {
    $scope.global = Global;
    $scope.eventSources = [];
    $scope.package = {
      name: 'Calendar'
    };   
    $scope.uiConfig = {
      calendar:{
        defaultView: 'agendaDay',
        defaultDate: '2016-01-07',
        
        editable: true,
        selectable: true,
        eventLimit: true, // allow "more" link when too many events
        slotDuration: "00:15:00",
        eventOverlap: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'agendaDay,agendaTwoDay,agendaWeek,month'
        },
        views: {
          day: {
           start: '6:00:00',
           end:   '21:00:00'// options apply to basicDay and agendaDay views
          },
          agendaTwoDay: {
            type: 'agenda',
            duration: { days: 2 },
            start: '6:00:00',
            end:   '21:00:00',
            // views that are more than a day will NOT do this behavior by default
            // so, we need to explicitly enable it
            groupByResource: true

            //// uncomment this line to group by day FIRST with resources underneath
            //groupByDateAndResource: true
          }
        },

        //// uncomment this line to hide the all-day slot
        allDaySlot: false,
        // eventConstraint: [{
        //     start: '10:00', // a start time (10am in this example)
        //     end: '18:00', // an end time (6pm in this example)

        //     dow: [ 1, 2, 3, 4 ]
        //     // days of week. an array of zero-based day of week integers (0=Sunday)
        //     // (Monday-Thursday in this example)
        // }],
        resources: [
          { id: 'a', title: 'Kristal Locke', eventColor: 'green', eventBackgroundColor: 'green'  },
          { id: 'b', title: 'Melissa Shaffet', eventColor: 'red',  eventbackgroundColor: 'red'  },
          { id: 'c', title: 'Haley', eventColor: 'green'  },
          { id: 'd', title: 'Suzanne', eventColor: 'green'  },
          { id: 'e', title: 'Rachel', eventColor: 'green'  }
        ],
        events: [
          {
              id:    'kristal',
              resourceId: 'a',
              start: '8:00:00',
              end:   '19:00:00',
              rendering: 'background',
              backgroundColor: 'grey'
          },
          {
              id:    'melissa',
              resourceId: 'b',
              start: '9:00:00',
              end:   '19:00:00',
              rendering: 'background',
              backgroundColor: 'red'
          },

          { id: '1', resourceId: 'a', start: '2016-01-07T09:00:00', end: '2016-01-07T10:00:00', title: 'Cut', constraint: 'kristal'},
          { id: '2', resourceId: 'a', start: '2016-01-07T03:00:00', end: '2016-01-07T04:00:00', title: 'Color', constraint: 'kristal'},
          { id: '3', resourceId: 'b', start: '2016-01-07T12:00:00', end: '2016-01-07T01:00:00', title: 'Color', constraint: 'melissa' },
          { id: '4', resourceId: 'c', start: '2016-01-07T07:30:00', end: '2016-01-07T09:30:00', title: 'Cut' },
          { id: '5', resourceId: 'd', start: '2016-01-07T10:00:00', end: '2016-01-07T15:00:00', title: 'Color' },
          { id: '6', resourceId: 'e', start: '2016-01-07T10:00:00', end: '2016-01-07T15:00:00', title: 'Color' },
          { id: '7', resourceId: 'e', start: '2016-01-07T15:00:00', end: '2016-01-07T17:00:00', title: 'Color' }
        ],

        select: function(start, end, jsEvent, view, resource) {
          console.log(
            'select',
            start.format(),
            end.format(),
            resource ? resource.id : '(no resource)'
          );
        },
        dayClick: function(date, jsEvent, view, resource) {
          console.log(
            'dayClick',
            date.format(),
            resource ? resource.id : '(no resource)'
          );
        }
      }
    };
    
  }
})();