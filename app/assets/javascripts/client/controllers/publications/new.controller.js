(function () {
	'use strict';

	angular.module('comuniapp').controller('NewController', ['$scope', '$state', '$stateParams', 'PublicationService', function ($scope, $state, $stateParams, PublicationService) {
		$scope.publication = ""
		$scope.send = function(){
			PublicationService.create($scope.publication, function(data){
				console.log(data)
				if (data.publication.id === null)
				{
					alert("no se ha creado correctamente");
				} 
				else {
					alert("creado correctamente");
				}
			})
		};
	}]);
})();