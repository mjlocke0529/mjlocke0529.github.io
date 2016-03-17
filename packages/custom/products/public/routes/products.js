(function () {
  'use strict';

  angular
    .module('mean.products')
    .config(products);

  products.$inject = ['$stateProvider'];

  function products($stateProvider) {
    $stateProvider.state('products example page', {
      url: '/products/example',
      templateUrl: 'products/views/index.html'
    });
  }

})();
