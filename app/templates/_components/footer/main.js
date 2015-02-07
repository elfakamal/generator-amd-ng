'use strict';

define(['text!./views/base.html'], function(baseTemplate) {
  return {
    controllers: ['footer'],
    template: {
      base: baseTemplate
    }
  };
});
