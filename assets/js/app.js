'use strict';

var bookerApp = angular.module('bookerApp', ['ngRoute', 'ui.bootstrap']);

bookerApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/item/:itemId', {
      templateUrl: '/templates/index.html',
      controller: 'BookerCtrl'
    }).when('/success', {
      templateUrl: '/templates/success.html'
    }).otherwise({
      redirectTo: '/',
      templateUrl: '/templates/404.html',
      caseInsensitiveMatch: true
    })
  }]);
