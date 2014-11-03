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
      when('/brugerStatus', {
        templateUrl: 'templates/brugerStatus.html',
        controller: 'BrugerStatusCtrl'
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

morgenBroedApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, charset=utf-8';
    $httpProvider.defaults.headers.post['Accept-Charset'] = 'charset=utf-8';
}]);
