var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var constants = require('./templates/gulp/common/constants.js')();

var Generator = yeoman.generators.Base.extend({
    init: function() {
        this.argument('appname', {
            type: String,
            required: false
        });
        this.bowerDirectory = constants.bowerDirectory;
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
        this.mkdir('src');
        this.mkdir('src/client');
        this.mkdir('src/client/scripts');
        this.mkdir('src/client/styles');
        this.mkdir('src/server');
        this.mkdir('gulp');

    },

    projectfiles: function() {
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.copy('_README.md', 'README.md');
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('jscsrc', '.jscsrc');
        this.copy('bowerrc.json', '.bowerrc');
        this.copy('gitignore', '.gitignore');
        this.copy('gulpfile.js', 'gulpfile.js');
        this.copy('_index.html', 'src/client/index.html');
        this.directory('gulp');
        this.directory('scripts', 'src/client/scripts');
        this.directory('styles', 'src/client/styles');
        this.copy('gulp/common/constants.js');
    }
});

module.exports = Generator;
