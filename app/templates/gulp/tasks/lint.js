var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var jshint = $.jshint;
var combine = require('stream-combiner');
var growly = require('growly');
var jscs = $.jscs;
var constants = require('../common/constants')();

gulp.task('jshint', function() {
    gulp.src(constants.lint)
        .pipe(jshint({
            lookup: true
        }))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .on('error', function() {
            growly.notify('One or more jshint error', {
                title: 'FAILED - JsHint',
                icon: constants.growly.failedIcon
            });
        })
        .on('end', function() {
            growly.notify('All files passed', {
                title: 'PASSED - JsHint',
                icon: constants.growly.successIcon
            });
        });
});

gulp.task('jscs', function() {
    var hasError = false;
    var combined = combine(
        gulp.src(constants.lint),
        jscs());

    combined.on('error', function(err) {
        hasError = true;
        console.log(err.toString());
        growly.notify('One or more jscs error', {
            title: 'FAILED - Jscs',
            icon: constants.growly.failedIcon
        });

    });

    combined.on('end', function() {
        if (!hasError) {
            growly.notify('All files passed', {
                title: 'PASSED - Jscs',
                icon: constants.growly.successIcon
            });
        }

    });

});

gulp.task('lint', ['jshint', 'jscs']);
