(function () {
	'use strict';

	angular.module('comuniapp').controller('ShowController', ['$scope', '$state', '$stateParams',
		function ($scope, $state, $stateParams) {
			var publication_id 
			publication_id = $stateParams.publicationid 
			$scope.publicationid = publication_id
		}]);
})();