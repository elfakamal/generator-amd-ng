'use strict';

define(['app'], function(app) {
  app.amd.factory('Components', function() {
    return [
      {name: 'header'},
      {name: 'splash'},
      {name: 'marketing'},
      {name: 'about'},
      {name: 'contact'},
      {name: 'footer'}      
    ];
  });
});
