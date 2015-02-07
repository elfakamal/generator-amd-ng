'use strict';

define(['./controllers/<%= componentName %>', 'text!./views/base.html'],
  function(<%= _.capitalize(componentName) %>Controller, baseTemplate) {
    return {
      controllers: ['<%= componentName %>'],
      template: {
        base: baseTemplate
      }
    }
  }
);
