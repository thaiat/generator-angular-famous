var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var inquirer = require('yeoman-generator/node_modules/inquirer');

var Generator = yeoman.generators.Base.extend({
    init: function() {
        this.argument('appname', {
            type: String,
            required: false
        });
        this.pkg = require('../package.json');
        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous AngularFamous generator!'));

        var prompts = [{
            name: 'appname',
            message: 'What\'s your project\'s name?',
            default: this.appname,
        }];

        this.prompt(prompts, function(answers) {
            this.appname = answers.appname;
            done();
        }.bind(this));
    },

    app: function() {
        this.mkdir('app');
        this.mkdir('app/templates');
        this.mkdir('gulp');
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
    },

    projectfiles: function() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('jscsrc', '.jscsrc');
        this.copy('gulpfile.js', 'gulpfile.js');
        this.directory('gulp');
    }
});

module.exports = Generator;
