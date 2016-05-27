(function(){
	function moviesData($scope,$routeParams, dataFactory,$http){
	dataFactory.hd
	.success(function(r,s,x){
		$scope.heroes = r;
		setMovies();
	})
	.error(function(e,s,x){
		alert(s);
	});
	$scope.movies = [];
	$scope.heroId = $routeParams.hid;

	function setMovies(){
		for(var i = 0; i < $scope.heroes.length; i++){
			if($scope.heroes[i].id == parseInt($scope.heroId)){
				$scope.movies = $scope.heroes[i].movieslist;
				//console.log($scope.movies)
			}
		}
	};
	
	$scope.goBack = function(){
		history.back();
	};
	
	$scope.addMovie = function(){
		// --------------------------
		var data = {
			"sl" : $scope.movies.length+1,
			"title" : $scope.title,
			"poster" : $scope.poster
		};
			$http
			.put("/movies/"+$scope.heroId, data)
			.success(function(r,s,x){
				$scope.heroes = r;
				setMovies();
			})
			.error(function(e,s,x){
				alert(e)
			})
			
		// --------------------------
	}
	
	
	}
	
	angular.module("app").controller("moviesContorller",moviesData);
}());