(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.products')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['$scope', 'Global', 'Products'];




  function ProductsController($scope, Global, Products) {
    $scope.global = Global;
    $scope.package = {
      name: 'products'
    };

    
    passport.use('provider', new OAuth2Strategy({
      authorizationURL: 'https://connect.squareup.com/oauth2/authorize',
      tokenURL: 'https://connect.squareup.com/oauth2/token',
      clientID: 'yn6zS-2zjKd_RBvViTMCMg',
      clientSecret: 'UjDntM11wrMjQOzOdW4ibq6CP_SeGqVVO5JzXpB1p0I'
      callbackURL: ''
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate(..., function(err, user) {
        done(err, user);
      });
    }
    ));
  
    // // direct way 
    // client.get("https://connect.squareup.com/v1/LOCATION_ID/inventory?limit=2500", function (data, response) {
    //   // parsed response body as js object 
    //   console.log(data);
    //   // raw response 
    //   console.log(response);
    // });
     
    // registering remote methods 
    client.registerMethod("jsonMethod", "https://connect.squareup.com/v1/LOCATION_ID/inventory?limit=2500", "GET");
     
    client.methods.jsonMethod(function (data, response) {
      // parsed response body as js object 
      console.log(data);
      // raw response 
      console.log(response);
    });



  }
})();