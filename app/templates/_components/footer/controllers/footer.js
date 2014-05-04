"use strict";

define(["app"], function(app) {
  app.amd.controller("FooterController", ["$scope", function($scope) {
    $scope.author = "the Yeoman team & Kamal Farsaoui";
  }]);
});
