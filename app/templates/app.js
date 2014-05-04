"use strict";

define([
  "angular",
  "constants",
  "./config/route-config",
  "./config/location-config",
  "./global/directives/amd-component"
],
function(angular, constants, routeConfig, locationConfig, AMDComponentDirective) {

  var app = angular.module(constants.APP_NAME, [
    'ngCookies',
    'ngResource',
    'ui.bootstrap',
    'ui.router',
    constants.APP_NAME + '.system'
  ])
  .config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function($controllerProvider, $compileProvider, $filterProvider, $provide)
    {
      app.amd = {
        controller : $controllerProvider.register,
        directive  : $compileProvider.directive,
        filter     : $filterProvider.register,
        factory    : $provide.factory,
        service    : $provide.service
      };
    }
  ])
  .config(routeConfig)
  .config(locationConfig);

  //AMD directive to lazy load components.
  angular.module(constants.APP_NAME + '.system', [])
    .directive(constants.AMD_DIRECTIVE_NAME, AMDComponentDirective);

  return app;
});
