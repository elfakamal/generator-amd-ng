'use strict';

define(['app'], function(app) {
  app.amd.controller('<%= _.capitalize(controllerName) %>Controller', ['$scope', function ($scope) {
    $scope.firstname = 'john';
    $scope.lastname = 'smith';

    //your brilliant code here ...
  }]);
});
