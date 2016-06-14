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

	.state('index', {
		url: '/publications/index',
		templateUrl:'publications/index.html',
		controller: 'IndexController',
	})

	.state('edit', {
		url: '/publications/edit/:publicationid',
		templateUrl:'publications/edit.html',
		controller: 'EditController'
		})

	.state('new', {
		url: '/publications/new',
		templateUrl:'publications/new.html',
		controller: 'NewController',
	})

	.state('show', {
		url: '/publications/show/:publicationid',
		templateUrl:'publications/show.html',
		controller: 'ShowController'
		})




	$urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}])