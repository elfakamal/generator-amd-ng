'use strict';

define([], function() {

  //Setting HTML5 Location Mode
  var configFn = function($locationProvider) {
    $locationProvider.hashPrefix('!');
  };

  return ['$locationProvider', configFn];
});
