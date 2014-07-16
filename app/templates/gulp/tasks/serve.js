var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var webserver = $.webserver;
var browserSync = require('browser-sync');
var openBrowser = require('open');

var constants = require('../common/constants')();

var serverConfig = {
    root: constants.serve.root,
    port: constants.serve.port,
    livereload: constants.serve.livereload
};

gulp.task('serve', ['watchify'], function() {
    gulp.src(serverConfig.root)
        .pipe(webserver({
            port: serverConfig.port,
            livereload: true
        }));
    console.log('Started connect web server on http://localhost:' + serverConfig.port + '.');
    openBrowser('http://localhost:' + serverConfig.port);
});

gulp.task('browsersync', ['watchify'], function() {
    var config = {
        files: [serverConfig.root + '/index.html', serverConfig.root + '/scripts/bundle.js'],
        tunnel: true,
        server: {
            baseDir: serverConfig.root,
            middleware: [

                function(req, res, next) {
                    //console.log("Hi from first middleware");
                    next();
                }
            ]
        },
        port: serverConfig.port,
        logLevel: 'info', // info, debug , silent
        open: true,
        browser: ['google chrome'], // ['google chrome', 'firefox'],
        notify: true,
        logConnections: false
    };

    browserSync(config);

});
