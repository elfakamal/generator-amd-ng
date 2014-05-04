"use strict";

/**
 * Configuring require.
 */
require.config({
  paths: {
    "jquery": "../bower_components/jquery/dist/jquery",
    "angular": "../bower_components/angular/angular",
    "underscore": "../bower_components/lodash/dist/lodash.underscore",
    "angular-resource": "../bower_components/angular-resource/angular-resource",
    "angular-cookies": "../bower_components/angular-cookies/angular-cookies",
    "angular-bootstrap": "../bower_components/angular-bootstrap/ui-bootstrap",
    "angular-ui-router": "../bower_components/angular-ui-router/release/angular-ui-router",
    "text": "../bower_components/requirejs-text/text",
    "constants": "./config/constants",
    "app": "./app",

    //folders
    "models": "./global/models/",
    "services": "./global/services/"
  },
  shim: {
    "angular": {exports: 'angular'},
    "underscore": {exports: "_"},
    "angular-resource": {deps: ['angular']},
    "angular-cookies": {deps: ['angular']},
    "angular-bootstrap": {deps: ['angular']},
    "angular-ui-router": {deps: ['angular']},
    "app": {deps: ['angular', 'constants']}
  },
  priority: ["angular"]
});

require([
    "angular",
    "app",
    "constants",
    "angular-resource",
    "angular-cookies",
    "angular-bootstrap",
    "angular-ui-router"
  ],
  
  function(angular, app, constants)
  {
    angular.element(document).ready(function() {
      //Fixing facebook bug with redirect
      if (window.location.hash === '#_=_')
        window.location.hash = '#!';

      //Then init the app
      angular.bootstrap(document, [constants.APP_NAME]);
    });

    window.benchmark = function(message) {
      console.log(message + ' : ' + (new Date()).getTime());
    };

    return app;
  }
);
