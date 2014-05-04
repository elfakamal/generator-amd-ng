"use strict";

define([], function() {
  return {
    APP_NAME: "scenario",
    AMD_DIRECTIVE_NAME: "amdComponent",
    AMD_FOLDER_NAME: "amd-components",

    COMPONENT_MAIN_VIEW: "base",

    COMPONENT_MAIN_FILE: "main",
    COMPONENT_PRE_COMPILE_FUNCTION: "preCompile",
    COMPONENT_LOAD_COMPLETE_FUNCTION: "loadComplete",
    COMPONENT_AUTO_START_ATTRIBUTE: "autoStartComponent",
    COMPONENT_REPLACE_ATTRIBUTE: "replaceMe",

    AMD_COMPONENT_RESERVED_WORDS: [
      "data-ng-component",

      "amd-components",
      "amdComponent",
      
      "preCompile",
      "loadComplete",

      "auto-start-component",
      "autoStartComponent",

      "replace-me",
      "replaceMe"
    ]
  };
});
