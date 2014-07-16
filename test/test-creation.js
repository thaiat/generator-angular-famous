/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('angular-famous generator', function() {
    beforeEach(function(done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('angular-famous:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function(done) {
        var expected = [
            'package.json',
            '.jshintrc',
            'gulpfile.js',
            '.editorconfig'
        ];

        helpers.mockPrompt(this.app, {
            'someOption': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function() {
            helpers.assertFile(expected);
            done();
        });
    });

    it('package.json and bower.json has expected appname', function(done) {
        helpers.mockPrompt(this.app, {
            'appname': 'my App'
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function() {
            var pkg = require(path.join(__dirname, 'temp', 'package.json'));
            console.log(pkg);
            helpers.assertFileContent('package.json', /"name": "toto"/);
            helpers.assertFileContent('bower.json', /"name": "toto"/);
            done();
        });
    });

});
