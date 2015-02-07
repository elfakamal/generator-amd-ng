'use strict';

define(['text!./views/base.html'], function(baseTemplate) {
  return {
    controllers: ['controls'],
    template: {
      base: baseTemplate
    }
  };
});
