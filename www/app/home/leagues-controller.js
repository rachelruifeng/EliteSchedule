(function(){
	'use strict';

	angular
		.module('eliteApp')
		.controller('LeaguesController', ['$state','eliteApi',LeaguesController]);

	function LeaguesController($state, eliteApi) {
		var vm = this; 

		var leagues = eliteApi.getLeagues();
		vm.leagues = leagues;

		vm.selectLeague = function(leagueId){
			//TODO 
			$state.go("app.teams");
		}
	};
})();