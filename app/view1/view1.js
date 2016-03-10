'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
	$scope.sum=0;
	$scope.fibnum = 1;
	$scope.fibbefore = 0;
	$scope.firsttime = true;
	$scope.add=function(){
		$scope.sum = $scope.fibnum + $scope.fibbefore;
		if($scope.sum == 1 && $scope.firsttime){
			$scope.fibbefore = 0;
			$scope.firsttime = false;
		}
		else{
			$scope.fibbefore = $scope.fibnum;
		}
		$scope.fibnum = $scope.sum;
	}

	$scope.reset=function(){
		$scope.fibnum = 1;
		$scope.fibbefore= 0;
		$scope.sum = 0;
		$scope.firsttime = true;

	}
});