(function () {
	'use strict';

	angular.module('comuniapp').controller('PublicationsNewController', ['$scope', '$mdToast', '$state', '$stateParams', 'PublicationService', function ($scope, $mdToast, $state, $stateParams, PublicationService) {
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

		$scope.publication = ""
		$scope.send = function(){
			PublicationService.create($scope.publication, function(data){
				console.log(data)
				if (data.publication.id === null)
				{					
					var pinTo = $scope.getToastPosition();
					$mdToast.show(
						$mdToast.simple()
						.textContent('La publicacion NO se ha podido crear.')
						.position(pinTo )
						.hideDelay(3000)
						);
				} 
				else {
					var pinTo = $scope.getToastPosition();
					$mdToast.show(
						$mdToast.simple()
						.textContent('La publicacion se ha creado correctamente.')
						.position(pinTo )
						.hideDelay(3000)
						);
				}
			})
		};
	}]);
})();