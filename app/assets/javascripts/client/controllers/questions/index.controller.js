(function () {
	'use strict';
	angular.module('comuniapp').controller('IndexController', ['$scope', '$state', '$stateParams','QuestionService', function ($scope, $state, $stateParams, QuestionService) {
		QuestionService.index(function(data){
			$scope.questions = data.questions;
		}); 
		$scope.destroy = function(question_id){
			QuestionService.destroy(question_id, function(data){
				$scope.questions = data.questions;
			}); 
		}
	}]);
})();