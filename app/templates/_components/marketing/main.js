"use strict";

define(["./controllers/marketing", "text!./views/base.html"], function(marketingController, baseTemplate) {
  return {
    template: {
      base: baseTemplate
    }
  };
});
