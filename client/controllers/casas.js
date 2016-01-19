var myApp = angular.module('myApp');

myApp.controller('CasasController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded ....');

	$scope.getCasas = function(){
		$http.get('/api/casas').success(function(response){
				$scope.casas = response;
		});
	}

	$scope.getCasa = function(){
		var id = $routeParams.id;
		$http.get('/api/casas/'+id).success(function(response){
				$scope.casa = response;
		});
	}


	$scope.addCasa = function(){
		$http.post('/api/casas/', $scope.casa).success(function(response){
				window.location.href='#/casas';
		});
	}

	$scope.updateCasa = function(){
		var id = $routeParams.id;
			$http.put('/api/casas/' +id, $scope.casa).success(function(response){
					window.location.href='#/casas';
			});
	}

	$scope.removeCasa = function(id){
			$http.delete('/api/casas/'+id).success(function(response){
					window.location.href='#/casas';
			});
	}


}]);