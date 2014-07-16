require('angular');
require('famous-angular');
var appModule = require('./app');
console.log(appModule.name);
var app = angular.module('main', [appModule.name, 'famous.angular']);