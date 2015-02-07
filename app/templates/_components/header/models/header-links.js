"use strict";

define(["app"], function(app) {
  app.amd.factory("HeaderLinks", ["$state", function($state) {
    return [
      {name: "Home", link: "/"},
      {name: "About", link: "/about"},
      {name: "Contact", link: "/contact"}
    ];
  }]);
});