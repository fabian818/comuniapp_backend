(function () {
	'use strict';

	angular.module('comuniapp').controller('ShowController', ['$scope', '$state', '$stateParams', 'PublicationService',
		function ($scope, $state, $stateParams, PublicationService) {
			var publication_id 
			publication_id = $stateParams.publicationid 
			$scope.publicationid = publication_id
			PublicationService.show(publication_id, function(data){
				$scope.publication = data.publication;
			}); 	
		}]);
})();