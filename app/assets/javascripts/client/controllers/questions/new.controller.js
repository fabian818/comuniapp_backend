(function () {
	'use strict';

	angular.module('comuniapp').controller('QuestionsNewController', ['$scope', '$state', '$stateParams', 'QuestionService', function ($scope, $state, $stateParams, QuestionService) {
		$scope.question = ""
		$scope.send = function(){
			QuestionService.create($scope.question, function(data){
				console.log(data)
				if (data.question.id === null)
				{
					alert("no se ha creado correctamente");
				} 
				else {
					alert("creado correctamente");
				}
			})
		};
	}]);
})();