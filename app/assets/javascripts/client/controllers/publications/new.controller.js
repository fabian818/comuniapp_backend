(function () {
	'use strict';

	angular.module('comuniapp').controller('NewController', ['$scope', '$state', '$stateParams', 'PublicationService', function ($scope, $state, $stateParams, PublicationService) {
		PublicationService.create(function(data){
			$scope.publication = data.publication;
		}); 	
	}]);
})();