var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'CasasController',
		templateUrl: 'views/casas.html'
	})
	.when('/casas',{
		controller:'CasasController',
		templateUrl: 'views/casas.html'
	})
	.when('/casas/details/:id', {
		controller:'CasasController',
		templateUrl: 'views/casas_detalhes.html'
	})
	.when('/casas/add', {
		controller:'CasasController',
		templateUrl: 'views/add_casa.html'
	})
	.when('/casas/edit/:id', {
		controller:'CasasController',
		templateUrl: 'views/edit_casa.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});