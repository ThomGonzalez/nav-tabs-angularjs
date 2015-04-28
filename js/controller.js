var app = angular.module('app', []);

app.controller('tabController', function($scope){
   
	$scope.init = function() {
		$scope.listNames = [
	   		{name:'Thom'}, 
	   		{name:'Thom1'}, 
	   		{name:'Thom2'}, 
	   		{name:'Thom3'}
		]
  	};
  //  instancia
  $scope.init();

  $('#mytab').tab('show');
  
 });
