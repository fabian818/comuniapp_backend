(function () {
	'use strict';

	angular.module('comuniapp').controller('EditController', ['$scope', '$state', '$stateParams','PublicationService',
		function ($scope, $state, $stateParams, PublicationService) {
			var publication_id = $stateParams.publicationid;
			PublicationService.show(publication_id, function(data){
				console.log(data);
				$scope.publication = data.publication
			})
			$scope.send = function(){
				PublicationService.update($scope.publication, function(data){
					if (data===true){
						alert("se guardo la modificacion")
					}
					else
					{
						alert("no se guardo la modificacion")
					}
				})
			};
		}]);
})();