(function(){
	'use strict';

	angular
		.module('eliteApp')
		.controller('LocationsController', ['eliteApi',LocationsController]);

	function LocationsController(eliteApi) {
		var vm = this; 

		var data = eliteApi.getLeagueData();
		vm.locations = data.locations;
	};
})();