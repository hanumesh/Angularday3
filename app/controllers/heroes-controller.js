(function(){
	function heroData($scope, dataFactory, $http){
	//------------------------------------------------
	dataFactory.hd
	.success(function(r,s,x){// response, status "success" | "error", XMLHttpRequest 
		$scope.heroes = r;
	})
	.error(function(e,s,x){ // error, status, XMLHttpRequest
		console.log(e);
	});
	
	//---------------------------------------------------------
	$scope.title = "";
	$scope.city = "";
	$scope.power = "";
	$scope.photo = "";
	//---------------------------------------------------------
	$scope.addHero = function(){

		var data = {
			"id" : $scope.heroes.length+1,
			"title" : $scope.title,
			"city" : $scope.city,
			"power" : $scope.power,
			"photo" : $scope.photo,
			"movieslist" : []
		};
			$http.post("/heros", data)
			.success(function(r,s,x){
				$scope.heroes = r;
				console.log("data was updated on the server");
				console.log($scope.heroes);
				$scope.title = "";
				$scope.city = "";
				$scope.power = "";
				$scope.photo = "";
			}).error(function(e,s,x){
				console.log("something went wrong");
			});
	};
	}
	
	angular.module("app").controller("heroesContorller",heroData);
}());