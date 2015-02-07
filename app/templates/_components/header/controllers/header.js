"use strict";

define(["app", "../models/header-links"], function(app) {
  app.amd.controller("HeaderController", ["$scope", "$state", "HeaderLinks", function($scope, $state, HeaderLinks) {
    $scope.appName = "AMD AngularJS Components";
    $scope.links = HeaderLinks;
    $scope.selectedLink = $state.current.name;
  }]);
});