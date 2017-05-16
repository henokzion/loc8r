angular
	.module('loc8rApp')
	.controller('homeCtrl', homeCtrl);

function homeCtrl ($scope, loc8rData){
	var vm = this;
	vm.pageHeader = {
		title: 'Loc8r',
		strapline: 'Find places to work with wifi near you'
	};
	vm.sidebar ={
		content: "Looking for wifi and a seat"
	};
	vm.message = "checkin your location";
	vm.getData = function (){
		var lat =51.378091 , lng = -0.7992599;
		vm.message = "Searching for nearby places";
		loc8rData.locationByCoords(lat, lng)
			.success(function(data){
				vm.message = data.length > 0 ? "" : "No locations found nearby";
				vm.data = {locations: data};
			})
			.error(function(e){
				vm.message= "Sorry, something's gone wrong";
			});
	}();

	vm.showError = function(error){
		$scope.$apply(function(){
			vm.message = error.message;
		});
	};
}