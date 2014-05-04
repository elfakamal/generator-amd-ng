"use strict";

define(["app"], function(app) {
  app.amd.factory("<%= _.capitalize(modelName) %>Model", [function() {
    return {firstname: "john", lastname: "smith"};
  }]);
});
