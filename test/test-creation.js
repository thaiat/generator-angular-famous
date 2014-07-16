/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('angular-famous generator', function() {

    var appname = 'my App';
    var appnameExpected = 'my-app';
    var versionExpected = '1.0.0';

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
            'bower.json',
            '.jshintrc',
            'gulpfile.js',
            '.editorconfig',
            '.gitignore',
            '.bowerrc'
        ];
        helpers.mockPrompt(this.app, {
            'appname': 'my App'
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function() {
            helpers.assertFile(expected);
            done();
        });
    });

    it('package.json and bower.json has expected appname', function(done) {
        helpers.mockPrompt(this.app, {
            'appname': appname
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function() {
            var pkg = require(path.join(__dirname, 'temp', 'package.json'));
            checkPkgPropertyValue(pkg, 'name', appnameExpected);
            var bower = require(path.join(__dirname, 'temp', 'bower.json'));
            checkPkgPropertyValue(bower, 'name', appnameExpected);

            done();
        });
    });

    var checkPkgPropertyValue = function(pkg, propertyName, propertyValue) {
        helpers.assertTextEqual(pkg[propertyName], propertyValue);
    };

    it('package.json and bower.json has expected version', function(done) {
        helpers.mockPrompt(this.app, {
            'appname': appname
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function() {
            var pkg = require(path.join(__dirname, 'temp', 'package.json'));
            checkPkgPropertyValue(pkg, 'version', versionExpected);
            var bower = require(path.join(__dirname, 'temp', 'bower.json'));
            checkPkgPropertyValue(bower, 'version', versionExpected);

            done();
        });
    });

});
