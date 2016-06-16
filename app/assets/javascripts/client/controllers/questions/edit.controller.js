(function () {
	'use strict';

	angular.module('comuniapp').controller('QuestionsEditController', ['$scope', '$mdToast', '$state', '$stateParams','QuestionService',
		function ($scope, $mdToast, $state, $stateParams, QuestionService) {
			function sanitizePosition() {
				var current = $scope.toastPosition;
				if ( current.bottom && last.top ) current.top = false;
				if ( current.top && last.bottom ) current.bottom = false;
				if ( current.right && last.left ) current.left = false;
				if ( current.left && last.right ) current.right = false;
				last = angular.extend({},current);
			}
			var last = {
				bottom: false,
				top: true,
				left: false,
				right: true
			};
			$scope.toastPosition = angular.extend({},last);
			$scope.getToastPosition = function() {
				sanitizePosition();
				return Object.keys($scope.toastPosition)
				.filter(function(pos) { return $scope.toastPosition[pos]; })
				.join(' ');
			};
			var question_id = $stateParams.questionid;
			QuestionService.show(question_id, function(data){
				console.log(data);
				$scope.question = data.question
			})
			$scope.send = function(){
				QuestionService.update($scope.question, function(data){
					if (data === true){						
						var pinTo = $scope.getToastPosition();
						$mdToast.show(
							$mdToast.simple()
							.textContent('La guia se ha modificado correctamente.')
							.position(pinTo )
							.hideDelay(3000)
							);
					}
					else
					{					
						var pinTo = $scope.getToastPosition();
						$mdToast.show(
							$mdToast.simple()
							.textContent('La guia NO se ha podido modificar.')
							.position(pinTo )
							.hideDelay(3000)
							);
					}
				})
			};
		}]);
})();