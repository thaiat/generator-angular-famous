var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var Generator = yeoman.generators.Base.extend({
    init: function() {
        this.argument('appname', {
            type: String,
            required: false
        });
        this.appname = this.appname || path.basename(process.cwd());
        this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));
        this.pkg = require('../package.json');
        this.on('end', function() {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    welcome: function() {
        // Have Yeoman greet the user.
        if (!this.options['skip-welcome-message']) {
            this.log(yosay('Welcome to the marvelous angular-famous generator!'));
            this.log(
                chalk.magenta(
                    'Out of the box I include browserify, famous-angular and some angular recommended modules.' +
                    '\n'
                )
            );
        }
    },

    askForAppname: function() {
        var done = this.async();

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

    askForCompass: function() {
        var done = this.async();

        this.prompt([{
            type: 'confirm',
            name: 'compass',
            message: 'Would you like to use Sass (with Compass)?',
            default: true
        }], function(answers) {
            this.compass = answers.compass;
            done();
        }.bind(this));
    },

    app: function() {
        this.mkdir('app');
        this.mkdir('app/templates');
        this.mkdir('gulp');

    },

    projectfiles: function() {
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('jscsrc', '.jscsrc');
        this.copy('bowerrc', '.bowerrc');
        this.copy('gitignore', '.gitignore');
        this.copy('gulpfile.js', 'gulpfile.js');
        this.directory('gulp');
    }
});

module.exports = Generator;
