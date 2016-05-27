(function(){
	angular.module("app")
		.controller("movieController", function($scope,$routeParams,heroFactory){
			$scope.param = $routeParams.heroname;
			$scope.movies = [];
			
			
			function successFun(d,s,x){
				$scope.data = d;
				for(var i = 0 ; i < $scope.data.heros.length ;i++){
					if($scope.data.heros[i].title.toLowerCase() == $scope.param+""){
						// alert("found");
						
						$scope.movies = $scope.data.heros[i].movieslist;
						console.log($scope.movies)
						/*
						for(var i = 0 ; i < $scope.data.movieslist.length ;i++){
							$scope.movies.push($scope.data.movieslist[i]) 
						}
						 */
					}
				}
			}
			function errorFun(m,s,x){
				alert(m)
			}
			heroFactory.hd.success(successFun).error(errorFun);
			
			
		});
}())
