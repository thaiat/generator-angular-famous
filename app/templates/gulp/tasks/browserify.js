'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var rename = $.rename;
var browserify = $.browserify;
var watchify = $.watchify;

var constants = require('../common/constants')();

var scriptMainPath = ['.', constants.serve.root, constants.serve.scripts, constants.serve.scriptMain].join('/');
var scriptPath = ['.', constants.serve.root, constants.serve.scripts].join('/');
var scriptBundle = constants.serve.scriptBundle;

gulp.task('browserify', function() {
    gulp.src(scriptMainPath)
        .pipe(browserify())
        .pipe(rename(scriptBundle))
        .pipe(gulp.dest(scriptPath));
});

gulp.task('watchify', watchify(function(watchify) {
    gulp.src(scriptMainPath)
        .pipe(watchify({
            watch: true
        }))
        .pipe(rename(scriptBundle))
        .pipe(gulp.dest(scriptPath));
}));
