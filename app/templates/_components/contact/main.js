'use strict';

define(['text!./views/base.html'], function(baseTemplate) {
  return {
    controllers: ['contact'],
    template: {
      base: baseTemplate
    }
  };
});
