/* Controllers */

var morgenBroedControllers = angular.module('morgenBroedControllers', []);

morgenBroedControllers.controller('OrdreCtrl', function($scope,
		$routeParams, $location, $http, dataService, opdateringsData) {

});

morgenBroedControllers.controller('AdminCtrl', function($scope, $routeParams,
		$location, $http) {

     $scope.batchJobStatus = 'Batch-job er ikke afviklet';
    
     $scope.visData = function() 
     {
         
     };
    
    $scope.submitBatch = function() 
      {
        $scope.batchJobStatus = 'Batch-job er under afvikling';
        var promise = $http({
        method: 'POST',
        url: 'http://localhost:8080/MorgenbroedBatch/JobSubmitterServlet',
        headers: {'Content-Type': 'application/json'},
        data:  $scope.input
        });
                
         promise.success(function (data) 
        {
               $scope.batchJobStatus = 'Batch-job er afviklet uden fejl';
               $scope.status=data;
        });

         promise.error(function (data) 
        {
            $scope.batchJobStatus = 'Batch-job fejlede';
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
