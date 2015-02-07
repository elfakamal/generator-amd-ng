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
      name: 'layoutName',
      message: 'Name of your layout ?'
    }];

    this.prompt(prompts, function (props) {
      this.layoutName = props.layoutName;

      done();
    }.bind(this));
  },

  app: function () {
    var dest = '';

    dest = 'app/scripts/global/layouts/' + this.layoutName + '.html';
    this.template('layout.html', dest, {layoutName: this.layoutName});
  }
});

module.exports = AmdNgGenerator;
