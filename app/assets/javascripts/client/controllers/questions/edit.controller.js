(function () {
	'use strict';

	angular.module('comuniapp').controller('EditController', ['$scope', '$state', '$stateParams','QuestionService',
		function ($scope, $state, $stateParams, QuestionService) {
			var question_id = $stateParams.questionid;
			QuestionService.show(question_id, function(data){
				console.log(data);
				$scope.question = data.question
			})
			$scope.send = function(){
				QuestionService.update($scope.question, function(data){
					if (data===true){
						alert("se guardo la modificacion")
					}
					else
					{
						alert("no se guardo la modificacion")
					}
				})
			};
		}]);
})();