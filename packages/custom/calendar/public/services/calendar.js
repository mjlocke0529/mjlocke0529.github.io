(function () {
  'use strict';

  angular
    .module('mean.calendar')
    .factory('Calendar', Calendar);

  Calendar.$inject = [];

  function Calendar() {
    return {
      name: 'calendar'
    };
  }
})();
