'use strict';

define(['text!./views/base.html'], function(baseTemplate) {
  return {
    controllers: ['marketing'],
    template: {
      base: baseTemplate
    }
  };
});
