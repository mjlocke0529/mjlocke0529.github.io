(function () {
  'use strict';

  angular
    .module('mean.calendar')
    .config(calendar);

  calendar.$inject = ['$stateProvider'];

  function calendar($stateProvider) {
    $stateProvider.state('calendar', {
      url: '/calendar/',
      templateUrl: 'calendar/views/index.html'
    });
  }

})();
