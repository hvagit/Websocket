/* Controllers */

var morgenBroedControllers = angular.module('morgenBroedControllers', []);

morgenBroedControllers.controller('OrdreCtrl', function($scope,
		$routeParams, $location, $http, dataService, opdateringsData) {

});

morgenBroedControllers.controller('AdminCtrl', function($scope, $routeParams,
		$location, $http, dataService, opdateringsData) {

});

morgenBroedControllers.controller('LoginCtrl', function($scope,
		$routeParams, $location) {
                    
                    
                $scope.login = function() {
                if($scope.brugerModel =='admin')
                {
        		$location.path('/admin');
                }
                else
                {
        		$location.path('/ordre');
                }
	}

});
