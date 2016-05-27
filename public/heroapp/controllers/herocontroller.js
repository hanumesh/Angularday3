(function(){
	angular.module("app")
		.controller("heroController", function($scope,heroFactory,$http){
			function successFun(d,s,x){
				$scope.data = d;
			}
			function errorFun(m,s,x){
				alert(m)
			}
			
			$scope.htitle = "Default Name";
			$scope.photo = "images/default.jpg";
			$scope.city = "Bangalore";
			$scope.power = 0;
			$scope.movies = [];
			
			$scope.newHero = {
				"title": $scope.htitle,
				"photo": $scope.photo,
				"city": $scope.city,
				"power": $scope.power,
				"movieslist": $scope.movies
			}
			
			heroFactory.hd.success(successFun).error(errorFun);
			
			$scope.addHero = function(){
				// alert("do you want to add a hero");
				$http.post("http://localhost:1234", $scope.newHero )
				.success(function(d,s,x){
					alert(d)
				})
				.error(function(m,s,x){
					alert(m)					
				})
			}
		});
}())
