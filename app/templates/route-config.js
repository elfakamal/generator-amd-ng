'use strict';

define([], function() {

  //Setting up route
  var configFn = function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for the app
    $stateProvider
      .state('About', {
        url: '/about',
        templateUrl: 'scripts/global/layouts/about.html'
      })
      .state('Contact', {
        url: '/contact',
        templateUrl: 'scripts/global/layouts/contact.html'
      })
      .state('Home', {
        url: '/',
        templateUrl: 'scripts/global/layouts/index.html'
      });
  };

  return ["$stateProvider", "$urlRouterProvider", configFn];
});
