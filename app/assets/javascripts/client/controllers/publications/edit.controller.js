(function () {
	'use strict';

	angular.module('comuniapp').controller('PublicationsEditController', ['$scope', '$mdToast', '$state', '$stateParams','PublicationService',
		function ($scope, $mdToast, $state, $stateParams, PublicationService) {
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

			var publication_id = $stateParams.publicationid;
			PublicationService.show(publication_id, function(data){
				console.log(data);
				$scope.publication = data.publication
			})
			$scope.send = function(){
				PublicationService.update($scope.publication, function(data){
					if (data === true){						
						var pinTo = $scope.getToastPosition();
						$mdToast.show(
							$mdToast.simple()
							.textContent('La publicacion se ha modificado correctamente.')
							.position(pinTo )
							.hideDelay(3000)
							);
					}
					else
					{					
						var pinTo = $scope.getToastPosition();
						$mdToast.show(
							$mdToast.simple()
							.textContent('La publicacion NO se ha podido modificar.')
							.position(pinTo )
							.hideDelay(3000)
							);
					}
				})
			};
		}]);
})();