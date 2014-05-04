"use strict";

define(["./controllers/footer", "text!./views/base.html"], function(footerController, baseTemplate) {
  return {
    template: {
      base: baseTemplate
    }
  };
});
