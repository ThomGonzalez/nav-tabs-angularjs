var app = angular.module('app', []);

app.controller('tabController', function($scope){
   
	$scope.init = function() {
		$scope.listNames = [
	   		{id:1, name:'Thom'}, 
	   		{id:2, name:'Thom1'}, 
	   		{id:3, name:'Thom2'}, 
	   		{id:4, name:'Thom3'}
		]
  	};
  //  instancia
  $scope.init();

  $('#mytab').tab('show');

  $scope.isTab = function(id){
  	console.log("param", id);
  };

 });
