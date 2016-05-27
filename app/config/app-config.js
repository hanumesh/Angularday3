(function(){
	angular.module("app").config(function($routeProvider){
		$routeProvider
		.when("/",{
			controller : "heroesContorller",
			templateUrl : "app/views/heroes-view.html"
		})
		.when("/movies/:hid",{
			controller : "moviesContorller",
			templateUrl : "app/views/movies-view.html"
		})
		.otherwise({
			redirectTo : "/"
		})
	});
}());