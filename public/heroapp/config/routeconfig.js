(function(){
	angular.module("app").config(function($routeProvider){
		$routeProvider
		.when("/",{
			controller : "heroController",
			templateUrl : "heroapp/view/hero.html"
		})
		.when("/movies/:heroname",{
			controller : "movieController",
			templateUrl : "heroapp/view/movies.html"
		})
	})
}());