"use strict";

define(["app", "../models/components"], function(app) {
  app.amd.controller("ControlsController", ["$scope", "$rootScope", "Components", function($scope, $rootScope, Components)
  {
    $scope.components = Components;

    $scope.start = function(componentName) {
      $rootScope.$emit("start-" + componentName);
    };

    $scope.stop = function(componentName) {
      $rootScope.$emit("stop-" + componentName);
    };

  }]);
});
