'use strict';

define(['text!./views/base.html'], function(baseTemplate) {
  return {
    controllers: ['splash'],
    template: {
      base: baseTemplate
    }
  };
});
