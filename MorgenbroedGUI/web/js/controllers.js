/* Controllers */

var morgenBroedControllers = angular.module('morgenBroedControllers', []);

morgenBroedControllers.controller('BrugerStatusCtrl', function($scope,
		$http, aktuelleData) {

        $scope.userId = '';
        $scope.userName = '';
        $scope.photoPath = '';
        $scope.saldo = '';
        
        $scope.setBrugerInfo = function() {
                var promise = $http.get('data/brugere.json'); 

                  promise.success(function(data, status, headers, config) {
 				for(var i=0; i<data.length; i++)
				{
                                    if(aktuelleData.brugerId === data[i].brugerId)
                                    {
                                        $scope.userId = data[i].brugerId;
                                        $scope.userName = data[i].navn;
                                        $scope.photoPath = data[i].photo;
                                    }
				}
	  	}).error(function(data, status, headers, config) {
	    		alert("Fejl "+status);
	  	});
	};

    $scope.hentSaldo = function() 
      {
        var promise = $http({
        method: 'POST',
        url: 'http://localhost:8080/MorgenbroedBatch/UtilServlet?userId='+$scope.userId,
        headers: {'Content-Type': 'application/json'},
        data:  $scope.input
        });
                
         promise.success(function (data) 
        {
             $scope.saldo = data;
         });

         promise.error(function (data) 
        {
             $scope.saldo = data;
            alert('Hent af saldo fejlede');
         });
     };
	
    
    
    
    $scope.setBrugerInfo();
        
});

morgenBroedControllers.controller('AdminCtrl', function($scope, $http) {

     $scope.batchJobStatus = 'Batch-job er ikke afviklet';
    
     $scope.ordreData = [];
     $scope.fileName = '';
     $scope.executionId = '';
    
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
        $scope.fileName = files[0].name;
    }
       
    var openbtn = document.getElementById("openselect");
    openselect.addEventListener("change", doOpen, false);

    $scope.submitBatch = function() 
      {
        $scope.batchJobStatus = 'Batch-job er under afvikling';
        var promise = $http({
        method: 'POST',
        url: 'http://localhost:8080/MorgenbroedBatch/JobSubmitterServlet?fileName='+$scope.fileName,
        headers: {'Content-Type': 'application/json'},
        data:  $scope.input
        });
                
         promise.success(function (data) 
        {
               $scope.batchJobStatus = 'Batch-job er afviklet uden fejl';
               $scope.executionId = data;
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
		$location, aktuelleData) {
                    
               	$scope.setAktuelleData = function() {
        		aktuelleData.brugerId = $scope.brugerModel;
        	};
    
                    
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
                        $scope.setAktuelleData();
                        if($scope.passwordModel !== null && $scope.passwordModel.length>0)
                        {
                            $location.path('/brugerStatus');
                        }
                    }
                };

});
