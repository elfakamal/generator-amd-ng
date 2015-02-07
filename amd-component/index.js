'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var AmdNgGenerator = yeoman.generators.Base.extend({
  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic AmdNg generator.'));

    var prompts = [{
      name: 'componentName',
      message: 'Name of your component ?'
    }];

    this.prompt(prompts, function (props) {
      this.componentName = props.componentName;

      done();
    }.bind(this));
  },

  app: function () {
    //sample components
    var dest = '';
    this.mkdir('app/scripts/amd-components/' + this.componentName);

    //component's main file
    dest = 'app/scripts/amd-components/' + this.componentName + '/main.js';
    this.template('main.js', dest, {componentName: this.componentName});

    //component's controllers
    this.mkdir('app/scripts/amd-components/' + this.componentName + '/controllers');
    dest = 'app/scripts/amd-components/' + this.componentName + '/controllers/' + this.componentName + '.js';
    this.template('controller.js', dest, {componentName: this.componentName});

    //component's models
    this.mkdir('app/scripts/amd-components/' + this.componentName + '/models');
    dest = 'app/scripts/amd-components/' + this.componentName + '/models/' + this.componentName + '.js';
    this.template('model.js', dest, {componentName: this.componentName});

    //component's views
    this.mkdir('app/scripts/amd-components/' + this.componentName + '/views');
    dest = 'app/scripts/amd-components/' + this.componentName + '/views/base.html';
    this.template('base.html', dest, {componentName: this.componentName});
  }
});

module.exports = AmdNgGenerator;
