"use strict";

define(["app", "../models/<%= componentName %>"], function(app) {
  app.amd.controller("<%= _.capitalize(componentName) %>Controller", ["$scope", function($scope) {
    $scope.title = "AMD AngularJS Components - <%= _.capitalize(componentName) %>";
  }]);
});
