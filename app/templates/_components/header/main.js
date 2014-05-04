"use strict";

define(["./controllers/header", "text!./views/base.html"], function(headerController, baseTemplate) {
  return {
    template: {
      base: baseTemplate
    }
  }
});
