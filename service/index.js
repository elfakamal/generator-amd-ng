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
      name: 'serviceName',
      message: 'Name of your service ?'
    }];

    this.prompt(prompts, function (props) {
      this.serviceName = props.serviceName;

      done();
    }.bind(this));
  },

  app: function () {
    var dest = '';
    dest = 'app/scripts/global/services/' + this.serviceName + '.js';
    this.template('service.js', dest, {serviceName: this.serviceName});
  }
});

module.exports = AmdNgGenerator;
