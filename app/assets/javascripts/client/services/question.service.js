(function () {
	'use strict';

	angular
	.module('comuniapp')
	.factory('QuestionService', QuestionService);

	QuestionService.$inject = ['$http', '$window'];
	function QuestionService($http, $window) {
		var service = {};

		service.index = index;
		service.show = show;
		service.create = create;
		service.update = update;
		service.destroy = destroy;

		return service;

		function index(callback) {
			$http.get('/api/questions/index.json')
			.success(function (response) {
				callback(response);
			})
			.error(function(response){
				console.log('error in index');
			});
		}

		function show(question_id, callback) {
			$http.get('/api/questions/show.json?question_id=' + question_id)
			.success(function (response) {
				callback(response);
			})
			.error(function(response){
				console.log('error in show');
			});
		}

		function create(question, callback) {
			$http.get('/api/questions/create.json?title=' + question.title + '&answer=' + 
				question.answer)
			.success(function (response) {
				callback(response);
			})
			.error(function(response){
				console.log('error in create');
			});
		}

		function update(question, callback) {
			$http.get('/api/questions/update.json?question_id=' + question.id + '&title=' + question.title + '&answer=' + 
				question.answer)
			.success(function (response) {
				callback(response);
			})
			.error(function(response){
				console.log('error in update');
			});
		}

		function destroy(question_id, callback) {
			$http.get('/api/questions/destroy.json?question_id=' + question_id)
			.success(function (response) {
				callback(response);
			})
			.error(function(response){
				console.log('error in destroy');
			});
		}
	}
})();