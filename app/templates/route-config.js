'use strict';

define([], function() {

  //Setting up route
  var configFn = function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'scripts/global/layouts/index.html'
      });
  };

  return ["$stateProvider", "$urlRouterProvider", configFn];
});
