"use strict";

define(["./controllers/splash", "text!./views/base.html"], function(splashController, baseTemplate) {
  return {
    template: {
      base: baseTemplate
    }
  };
});
