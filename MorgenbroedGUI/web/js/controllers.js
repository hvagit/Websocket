/* Controllers */

var morgenBroedControllers = angular.module('morgenBroedControllers', []);

morgenBroedControllers.controller('OrdreCtrl', function($scope,
		$routeParams, $location, $http, dataService, opdateringsData) {

});

morgenBroedControllers.controller('AdminCtrl', function($scope, $routeParams,
		$location, $http) {
                    
     $scope.submitBatch = function() 
      {
        var promise = $http({
        method: 'POST',
        url: 'http://localhost:8080/MorgenbroedBatch/JobSubmitterServlet',
        headers: {'Content-Type': 'application/json'},
        data:  $scope.input
        });
                
         promise.success(function (data) 
        {
            alert("Succes");
            $scope.status=data;
        });

         promise.error(function (data) 
        {
            alert("Fejl");
            $scope.status=data;
        });
     };
                    

});

morgenBroedControllers.controller('LoginCtrl', function($scope,
		$routeParams, $location) {
                    
                    
                $scope.login = function() {
                    if($scope.brugerModel ==='admin')
                    {
                        if($scope.passwordModel !== null && $scope.passwordModel.length>0)
                        {
                            $location.path('/admin');
                        }
                    }
                    if($scope.brugerModel ==='jhl' || $scope.brugerModel ==='jmn' || $scope.brugerModel ==='hve')
                    {
                        if($scope.passwordModel !== null && $scope.passwordModel.length>0)
                        {
                            $location.path('/ordre');
                        }
                    }
                };

});
