"use strict";

define(["app"], function(app) {
  app.amd.factory("<%= _.capitalize(componentName) %>Model", [function() {
    return [
      {firstname: "john", lastname: "smith"},
      {firstname: "jane", lastname: "smith"}
    ];
  }]);
});
