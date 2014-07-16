'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var watchify = require('gulp-watchify');

gulp.task('browserify', function() {
    gulp.src('./src/client/scripts/main.js')
        .pipe(browserify())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./src/client/scripts'));
});

gulp.task('watchify', watchify(function(watchify) {
    gulp.src('./src/client/scripts/main.js')
        .pipe(watchify({
            watch: true
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./src/client/scripts'));
}));
