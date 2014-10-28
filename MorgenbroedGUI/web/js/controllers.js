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
                    if($scope.passwordModel.length>0)
                    {
        		$location.path('/admin');
                    }
                }
                if($scope.brugerModel =='jhl' || $scope.brugerModel =='jmn' || $scope.brugerModel =='hve')
                {
                    if($scope.passwordModel.length>0)
                    {
        		$location.path('/ordre');
                    }
                }
	}

});
