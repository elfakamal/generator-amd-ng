'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var AmdNgGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
        // this.spawnCommand("grunt", ["build"]);
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic AmdNg generator.'));

    var prompts = [{
      name: 'appName',
      message: 'Name of your application ?'
    }];

    this.prompt(prompts, function (props) {
      console.log("app name : " + props.appName);
      this.appName = props.appName;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('dist');
    this.mkdir('test');

    this.mkdir('app/images');
    this.mkdir('app/styles');

    this.mkdir('app/scripts');

    this.mkdir('app/scripts/global');
    this.mkdir('app/scripts/global/controllers');
    this.mkdir('app/scripts/global/models');
    this.mkdir('app/scripts/global/services');
    this.mkdir('app/scripts/global/directives');

    this.mkdir('app/scripts/config');

    this.template('_package.json', 'package.json', {appName: this.appName});
    this.template('_bower.json', 'bower.json', {appName: this.appName});
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_.bowerrc', '.bowerrc');

    //config
    this.template("constants.js", "app/scripts/config/constants.js", {appName: this.appName});
    this.copy("route-config.js", "app/scripts/config/route-config.js");
    this.copy("location-config.js", "app/scripts/config/location-config.js");

    //app files
    this.copy("main.js", "app/scripts/main.js");
    this.copy("app.js", "app/scripts/app.js");
    this.copy("_robots.txt", "app/robots.txt");
    this.copy("_humans.txt", "app/humans.txt");
    this.copy("_index.html", "app/index.html");
    this.copy("_favicon.ico", "app/favicon.ico");
    this.copy("_404.html", "app/404.html");
    this.copy("_main.css", "app/styles/main.css");

    //amd component directive
    this.copy("amd-component.js", "app/scripts/global/directives/amd-component.js");

    //sample components
    this.directory('_components', "app/scripts/amd-components");

    //layouts
    this.directory('_layouts', 'app/scripts/global/layouts');

  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = AmdNgGenerator;
