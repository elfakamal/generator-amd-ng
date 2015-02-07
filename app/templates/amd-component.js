'use strict';

define(['require', 'angular', '_', '../../config/constants'], function(require, angular, _, constants) {

  var AMDComponent = function($compile, $q, $rootScope) {
    return {
      restrict: 'A',

      link: function($scope, $element, $attrs)
      {
        var componentName = $attrs[constants.AMD_DIRECTIVE_NAME];

        if(typeof componentName === 'undefined' || typeof componentName !== 'string' || componentName === null)
          throw new Error('component name is undefined / not a string / null');

        /**
         * Starts the component by loading its main.js file
         * and its base template from the views.
         */
        var bootstrapComponent = function() {
          var main = '../../' + constants.AMD_FOLDER_NAME + '/' + componentName + '/' + constants.COMPONENT_MAIN_FILE;
          //load the component and its view
          var loadComponent = function() {
            require([main], function(Component) {
              var preCompile = constants.COMPONENT_PRE_COMPILE_FUNCTION,
                  loadComplete = constants.COMPONENT_LOAD_COMPLETE_FUNCTION,
                  controllers;

              var compileComponent = function(loadedController) {
                //verify whether the component has the preCompile method to call it.
                if(_.has(Component, preCompile)) {
                  try {
                    Component[preCompile].apply(Component);
                  }
                  catch (error) {
                    console.error(error);
                  }
                }

                //we need the $apply function to persist the $compile work.
                $rootScope.$apply(function()
                {
                  if(_.has(Component, 'template') && _.has(Component.template, 'base'))
                  {
                    //the HTML component's body loaded in its main file.
                    var componentBody = angular.element(Component.template.base);

                    //Copy the component's relative attributes to the component's body.
                    //they're in the data-* attributes defined in the component's element.

                    //@todo use _.each
                    var attributes = $element[0].attributes;
                    for (var i = 0; i < attributes.length ; i++) {
                      var attributeName = attributes[i].name;

                      if( attributeName.indexOf('data-') === 0 &&
                          _.indexOf(constants.AMD_COMPONENT_RESERVED_WORDS, attributeName) < 0)
                        componentBody[0].setAttribute(attributes[i].name, attributes[i].value);
                    }

                    //compiling the component's HTML.
                    var angularElement = $compile(componentBody[0].outerHTML)($scope);
                    $element.empty();

                    //replace (or not) the element with its component
                    var replaceWithTemplate = _.has($attrs, 'replaceMe');
                    if(replaceWithTemplate === true) $element.replaceWith(angularElement);
                    else $element.append(angularElement);
                  }

                  //it verfies whether the component has the loadComplete method to call it.
                  if(_.has(Component, loadComplete)) {
                    try {
                      Component[loadComplete].apply(Component, [$element]);
                    }
                    catch (error) {
                      console.log(error);
                    }
                  }
                });
              }

              if(_.has(Component, constants.COMPONENT_CONTROLLERS)) {
                controllers = _.map(Component[constants.COMPONENT_CONTROLLERS], function(controller) {
                  return '../../' + constants.AMD_FOLDER_NAME + '/' + componentName + '/controllers/' + controller;
                });

                //check if there is any controllers and then load them, else call the compileComponent function.
                if(typeof controllers !== 'undefined' && controllers !== null && _.isArray(controllers) && controllers.length > 0)
                  require(controllers, compileComponent);
              }
              else
              {
                compileComponent.apply(null);
              }
            });
          };

          loadComponent();
        }; //bootstrap element

        //if the component is intended to be started automatically, it will,
        //otherwise it will need the be started using an event,
        //for instance 'start-<component name>'.
        if( _.has($attrs, constants.COMPONENT_AUTO_START_ATTRIBUTE) ) {
          //automatically start a component
          bootstrapComponent();
        }

        //removing a component is as simple as removing its html content,
        //we can't (& must not) unload the dependencies from RequireJS
        //neither from angular.
        var removeComponent = function() {
          $element.empty();
        };

        //listening for the start event to manually start a component.
        $rootScope.$on('start-' + componentName, function() {
          bootstrapComponent();
        });

        //listening for the stop event, to remove the component.
        $rootScope.$on('stop-' + componentName, function() {
          removeComponent();
        });
      }
    };
  };

  return ['$compile', '$q', '$rootScope', AMDComponent];
});
