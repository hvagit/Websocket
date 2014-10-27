/* App Module */

var morgenBroedApp = angular.module('morgenBroedApp', [
  'ngRoute','ngAnimate', 'ngTouch', 'ngResource', 'morgenBroedControllers', 'morgenBroedDirectives', 'morgenBroedFactories', 'morgenBroedServices', 'morgenBroedFilters']);


morgenBroedApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }).
      when('/ordre', {
        templateUrl: 'templates/ordre.html',
        controller: 'OrdreCtrl'
      }).
      when('/admin', {
          templateUrl: 'templates/admin.html',
          controller: 'AdminCtrl'
        }).
      otherwise({
        controller: 'LoginCtrl',
        redirectTo: '/login'
      });
  }]);

