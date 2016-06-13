angular.module('comuniapp', ['LocalStorageModule',
	'ngRoute',
	'ui.router',
	'templates',
	])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider

	.state('home', {
		url: '/home',
		templateUrl: 'home.html',
		controller: 'HomeController',
	})



	$urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}])