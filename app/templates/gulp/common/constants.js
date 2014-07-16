module.exports = function() {
    var constants = {
        test  : '<%=bowerFolder%>',
        serve: {
            livereloadport: 35729,
            serverport: 5000
        },
        libs: {
            fontAwesomeCss: 'styles/font-awesome/4.0.3/css/font-awesome.css',
            ionic: 'scripts/libs/ionic/1.0.0-beta.4/ionic.js',
            ionicCss: 'styles/ionic/1.0.0-beta.4/scss/ionic.css',
            require: 'scripts/libs/require/2.1.10/require.js'

        },
        html: ['*.html', '!_Chutzpah.*.html', 'scripts/**/*.html'],
        image: {
            src: 'styles/img/**/*',
            dest: 'styles/img'
        },
        growly: {
            successIcon: 'node_modules/karma-growl-reporter/images/success.png',
            failedIcon: 'node_modules/karma-growl-reporter/images/failed.png'
        },
        lint: ['scripts/**/*.js', '!scripts/libs/**/*', 'gulpfile.js', 'gulp/**/*.js', 'karam.conf.js', 'tests/**/*.js', '!tests/jasmine-jquery.js', '!tests/templates.js', 'kinvey_server/business-logic/**/*.js'],
        templateCache: ['scripts/app/**/*/templates/**/*.html', 'scripts/app/**/*/directives/**/*.html'],
        cordova: {
            publishFolder: 'Y:/Documents/Phonegap/com.ipelia.yoobic', //"//psf/Home/Documents/Phonegap/com.ipelia.yoobic"
            distFolder: 'dist/cordova',
            webSubFolder: 'www',
            iosResourcesSubFolder: 'platforms/ios/Yoobic/Resources',
            androidSubFolder: 'platforms/android'
        },
        web: {
            publishFolder: 'D:/temp/yoobic-web-azure',
            distFolder: 'dist/web',
            webSubFolder: 'www',
            github: 'git@github.com:thaiat/yoobic-web-azure.git' //'https://github.com/thaiat/yoobic-web-azure.git'
        },
        build: {
            folder: 'build',
            css: 'styles.min.css'
        },
        kinvey: 'kinvey_server'
    };

    return constants;
};
