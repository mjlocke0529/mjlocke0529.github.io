(function () {
  'use strict';

  angular
    .module('mean.products')
    .factory('Products', Products);

  Products.$inject = [];

  function Products() {
    return {
      name: 'products'
    };
  }
})();
