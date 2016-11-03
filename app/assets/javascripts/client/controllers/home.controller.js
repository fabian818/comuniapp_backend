(function () {
	'use strict';

	angular.module('comuniapp').controller('HomeController', HomeController);

	HomeController.$inject = ['$scope', '$state', '$stateParams', '$timeout'];

	function HomeController($scope, $state, $stateParams, $timeout) {
		$timeout(function() {
			jQuery('.slider1').bxSlider({
				minSlides: 3,
				maxSlides: 3,
				slideWidth: 350,
				slideMargin: 10
			});
			jQuery('.slider2').bxSlider({
				minSlides: 3,
				maxSlides: 3,
				slideWidth: 350,
				slideMargin: 10
			});
		}, 100);
	}
})();
