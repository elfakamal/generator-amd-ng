"use strict";

define(["./controllers/contact", "text!./views/base.html"], function(contactController, baseTemplate) {
  return {
    template: {
      base: baseTemplate
    }
  };
});
