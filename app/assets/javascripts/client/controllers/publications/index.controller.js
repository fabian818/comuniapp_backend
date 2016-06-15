(function () {
	'use strict';
	angular.module('comuniapp').controller('IndexController', ['$scope', '$state', '$stateParams','PublicationService', function ($scope, $state, $stateParams, PublicationService) {
		PublicationService.index(function(data){
			$scope.publications = data.publications;
		}); 
		$scope.destroy = function(publication_id){
			PublicationService.destroy(publication_id, function(data){
				$scope.publications = data.publications;
			}); 
		}
	}]);
})();