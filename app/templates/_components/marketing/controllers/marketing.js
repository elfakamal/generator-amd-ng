"use strict";

define(["app", "../models/marketing"], function(app) {
  app.amd.controller("MarketingController", ["$scope", "MarketingItems", function($scope, MarketingItems) {
    $scope.items = MarketingItems;
  }]);
});