'use strict';

define(['text!./views/base.html'], function(baseTemplate) {
  return {
    controllers: ['header'],
    template: {
      base: baseTemplate
    }
  }
});
