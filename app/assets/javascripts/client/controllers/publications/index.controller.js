(function () {
	'use strict';

	angular.module('comuniapp').controller('IndexController', ['$scope', '$state', '$stateParams','PublicationService', function ($scope, $state, $stateParams, PublicationService) {
		PublicationService.index(function(data){
			$scope.publications = data.publications;
		}); 	
	}]);
})();