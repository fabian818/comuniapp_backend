(function () {
	'use strict';
	angular.module('comuniapp').controller('QuestionsIndexController', ['$scope', '$mdDialog', '$mdToast', '$state', '$stateParams','QuestionService', function ($scope, $mdDialog, $mdToast, $state, $stateParams, QuestionService) {
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
		QuestionService.index(function(data){
			$scope.questions = data.questions;
		}); 
		$scope.destroy = function(question, ev){
			var confirm = $mdDialog.confirm()
			.title('¿Estas seguro que deseas eliminar este post?')
			.textContent('Una publicacion eliminada no puede volver a ser restaurada.')
			.ariaLabel('')
			.targetEvent(ev)
			.ok('Si')
			.cancel('No');
			$mdDialog.show(confirm).then(function() {
				QuestionService.destroy(question.id, function(data){
					if (data === true) {
						var index = $scope.questions.indexOf(question);
						$scope.questions.splice(index, 1);
						var pinTo = $scope.getToastPosition();
						$mdToast.show(
							$mdToast.simple()
							.textContent('Publicacion eliminada con exito.')
							.position(pinTo )
							.hideDelay(3000)
							);
					}
				});
			}, function() {
				var pinTo = $scope.getToastPosition();
				$mdToast.show(
					$mdToast.simple()
					.textContent('La publicacion no se ha eliminado.')
					.position(pinTo )
					.hideDelay(3000)
					);
			});
		}
	}]);
})();