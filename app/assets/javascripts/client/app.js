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
		controller: 'PublicationsIndexController',
	})

	.state('publications-edit', {
		url: '/publications/edit/:publicationid',
		templateUrl:'publications/edit.html',
		controller: 'PublicationsEditController'
		})

	.state('publications-new', {
		url: '/publications/new',
		templateUrl:'publications/new.html',
		controller: 'PublicationsNewController',
	})

	.state('publications-show', {
		url: '/publications/show/:publicationid',
		templateUrl:'publications/show.html',
		controller: 'PublicationsShowController'
		})


	.state('questions-index', {
		url: '/questions/index',
		templateUrl:'questions/index.html',
		controller: 'QuestionsIndexController',
	})

	.state('questions-edit', {
		url: '/questions/edit/:questionid',
		templateUrl:'questions/edit.html',
		controller: 'QuestionsEditController'
		})

	.state('questions-new', {
		url: '/questions/new',
		templateUrl:'questions/new.html',
		controller: 'QuestionsNewController',
	})

	.state('questions-show', {
		url: '/questions/show/:questionid',
		templateUrl:'questions/show.html',
		controller: 'QuestionsShowController'
		})


	$urlRouterProvider.otherwise('/publications/index');

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}])