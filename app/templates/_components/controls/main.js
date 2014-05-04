"use strict";

define(["./controllers/controls", "text!./views/base.html"], function(controls, baseTemplate) {
  return {
    template: {
      base: baseTemplate
    }
  };
});
