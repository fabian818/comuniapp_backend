angular.module('comuniapp', ['LocalStorageModule',
	'ngRoute',
	'ui.router',
	'templates',
	'ngMaterial'
	])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider

	.state('home', {
		url: '/home',
		templateUrl: 'home.html',
		controller: 'HomeController',
	})

	.state('publications-index', {
		url: '/publications/index',
		templateUrl:'publications/index.html',
		controller: 'IndexController',
	})

	.state('publications-edit', {
		url: '/publications/edit/:publicationid',
		templateUrl:'publications/edit.html',
		controller: 'EditController'
		})

	.state('publications-new', {
		url: '/publications/new',
		templateUrl:'publications/new.html',
		controller: 'NewController',
	})

	.state('publications-show', {
		url: '/publications/show/:publicationid',
		templateUrl:'publications/show.html',
		controller: 'ShowController'
		})


	.state('questions-index', {
		url: '/questions/index',
		templateUrl:'questions/index.html',
		controller: 'IndexController',
	})

	.state('questions-edit', {
		url: '/questions/edit/:publicationid',
		templateUrl:'questions/edit.html',
		controller: 'EditController'
		})

	.state('questions-new', {
		url: '/questions/new',
		templateUrl:'questions/new.html',
		controller: 'NewController',
	})

	.state('questions-show', {
		url: '/questions/show/:publicationid',
		templateUrl:'questions/show.html',
		controller: 'ShowController'
		})


	$urlRouterProvider.otherwise('/publications/index');

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}])