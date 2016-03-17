'use strict';

angular.module('mean.mail-templates').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('mail', {
      url: '/mailTemplates/example',
      templateUrl: 'mail-templates/views/index.html'
    });
  }
]);
