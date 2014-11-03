/* Controllers */

var morgenBroedControllers = angular.module('morgenBroedControllers', []);

morgenBroedControllers.controller('BrugerStatusCtrl', function($scope,
		$routeParams, $location, $http, dataService, opdateringsData) {

});

morgenBroedControllers.controller('AdminCtrl', function($scope, $http) {

     $scope.batchJobStatus = 'Batch-job er ikke afviklet';
    
     $scope.ordreData = [];
    
    function doOpen(evt) {
        var files = evt.target.files,
        reader = new FileReader();
        reader.onload = function() {
            var personData = this.result.split('\n');
            for(var i=0; i< personData.length; i++)
            {
                var detailData = personData[i].split(',');
                var data = {"brugerId": detailData[0], "bestilt":detailData[1], "betalt": detailData[2]};
                
                $scope.ordreData.splice(0, 0, data);
            }
            $scope.$digest();
        };
        reader.readAsText(files[0]);
    }
       
    var openbtn = document.getElementById("openselect");
    openselect.addEventListener("change", doOpen, false);

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
                            $location.path('/brugerStatus');
                        }
                    }
                };

});
