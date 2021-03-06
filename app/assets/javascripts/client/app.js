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
		url: '/publications',
		templateUrl:'publications/index.html',
		controller: 'PublicationsIndexController',
	})
	.state('admin-publications-index', {
		url: '/admin/publications',
		templateUrl:'admin/publications/index.html',
		controller: 'PublicationsIndexController',
	})

	.state('admin-publications-edit', {
		url: '/admin/publications/edit/:publicationid',
		templateUrl:'admin/publications/edit.html',
		controller: 'PublicationsEditController'
		})

	.state('admin-publications-new', {
		url: '/admin/publications/new',
		templateUrl:'admin/publications/new.html',
		controller: 'PublicationsNewController',
	})

	.state('publications-show', {
		url: '/publications/:publicationid',
		templateUrl:'publications/show.html',
		controller: 'PublicationsShowController'
		})

	.state('questions-index', {
		url: '/questions',
		templateUrl:'questions/index.html',
		controller: 'QuestionsIndexController',
	})

	.state('admin-questions-index', {
		url: '/admin/questions',
		templateUrl:'admin/questions/index.html',
		controller: 'QuestionsIndexController',
	})

	.state('admin-questions-edit', {
		url: '/admin/questions/edit/:questionid',
		templateUrl:'admin/questions/edit.html',
		controller: 'QuestionsEditController'
		})

	.state('admin-questions-new', {
		url: '/admin/questions/new',
		templateUrl:'admin/questions/new.html',
		controller: 'QuestionsNewController',
	})

	.state('questions-show', {
		url: '/questions/:questionid',
		templateUrl:'questions/show.html',
		controller: 'QuestionsShowController'
	});

	$urlRouterProvider.otherwise('/home');

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}])
.directive('asideAdmin', asideAdmin);

function asideAdmin() {
	return {
		restrict: 'A',
		link: function(){
			jQuery('#open-aside').on('click', function(){
				$('.admin__aside').addClass('show');
			});
			jQuery('#close-aside').on('click', function(){
				$('.admin__aside').removeClass('show');
			});
			jQuery('.admin__aside').on('click', function(){
				$('.admin__aside').removeClass('show');
			});
			jQuery('.admin__aside__container').on('click', function(){
				return false;
			})
		}
	}
}
