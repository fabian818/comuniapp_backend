(function () {
	'use strict';

	angular.module('comuniapp').controller('QuestionsShowController', ['$scope', '$state', '$stateParams', 'QuestionService',
		function ($scope, $state, $stateParams, QuestionService) {
			var question_id 
			question_id = $stateParams.questionid 
			$scope.questionid = question_id
			QuestionService.show(question_id, function(data){
				$scope.question = data.question;
			}); 	
		}]);
})();