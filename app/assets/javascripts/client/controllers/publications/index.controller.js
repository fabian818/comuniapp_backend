(function () {
	'use strict';
	angular.module('comuniapp').controller('IndexController', ['$scope', '$state', '$stateParams','PublicationService', function ($scope, $state, $stateParams, PublicationService) {
		PublicationService.index(function(data){
			$scope.publications = data.publications;
		}); 
		$scope.destroy = function(publication){
			PublicationService.destroy(publication.id, function(data){
				if (data === true) {
					var index = $scope.publications.indexOf(publication);
					$scope.publications.splice(index, 1);
				}
			});
		}
	}]);
})();